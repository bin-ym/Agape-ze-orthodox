#!/usr/bin/env node
const { spawnSync } = require("child_process");

console.log("Running YouTube scraper...");
spawnSync("node", ["scripts/fetch-youtube.js"], { stdio: "inherit" });
console.log("Running Facebook scraper...");
spawnSync("node", ["scripts/fetch-facebook.js"], { stdio: "inherit" });
console.log("Done");
