import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const require = createRequire(import.meta.url);
const projects = require("../app/data/projects.json");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputDir = path.resolve(__dirname, "..", "public", "thumbnails");
const viewport = { width: 1200, height: 900 };

async function capture() {
  await mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport });

  for (const project of projects) {
    if (!project.demoUrl) {
      console.warn(`Skip ${project.title}: demoUrl missing`);
      continue;
    }

    const filePath = path.join(outputDir, `${project.id}.png`);

    try {
      await page.goto(project.demoUrl, {
        waitUntil: "domcontentloaded",
        timeout: 60000,
      });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1500);
      await page.screenshot({ path: filePath });
      console.log(`Saved ${filePath}`);
    } catch (error) {
      console.error(`Failed ${project.title}:`, error);
    }
  }

  await browser.close();
}

capture();
