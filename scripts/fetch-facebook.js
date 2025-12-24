#!/usr/bin/env node
const fs = require("fs");
const { chromium } = require("playwright");

(async function main() {
  console.log("Launching Playwright to scrape mobile Facebook page");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)",
  });
  const page = await context.newPage();
  const url = "https://m.facebook.com/medehaniyalem";
  console.log("Navigating to", url);
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(2000);
  // Try to select post containers
  const posts = await page.$$('[role="article"]');
  const out = [];
  for (let i = 0; i < Math.min(posts.length, 8); i++) {
    const post = posts[i];
    const text = (await post.innerText()).trim();
    const images = await post.$$eval("img", (imgs) => imgs.map((i) => i.src));
    const link = await post.$("a");
    let href = "";
    if (link) href = await link.getAttribute("href");
    out.push({
      id: `fb-${i + 1}`,
      title: text.split("\n")[0].slice(0, 80),
      excerpt: text.slice(0, 200),
      author: "ዓጋፔ ኦርቶዶክስ",
      date: "",
      image: images[0] || "",
      url: href || url,
    });
  }
  await browser.close();
  fs.mkdirSync("public/data", { recursive: true });
  fs.writeFileSync(
    "public/data/blog.json",
    JSON.stringify(out, null, 2),
    "utf8"
  );
  console.log("Wrote", out.length, "facebook posts to public/data/blog.json");
})();
