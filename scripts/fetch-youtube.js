#!/usr/bin/env node
const fs = require("fs");
const https = require("https");

function get(url) {
  return new Promise((res, rej) => {
    https
      .get(url, (r) => {
        let data = "";
        r.on("data", (c) => (data += c));
        r.on("end", () => res(data));
      })
      .on("error", rej);
  });
}

function findPlaylistsFromInitialData(json) {
  const found = [];
  function walk(obj) {
    if (!obj || typeof obj !== "object") return;
    if (Array.isArray(obj)) return obj.forEach(walk);
    if (obj.playlistId && obj.title) {
      const title = obj.title.runs
        ? obj.title.runs.map((r) => r.text).join("")
        : obj.title.simpleText || "";
      const thumb =
        obj.thumbnail &&
        obj.thumbnail.thumbnails &&
        obj.thumbnail.thumbnails[0] &&
        obj.thumbnail.thumbnails[0].url;
      found.push({
        id: obj.playlistId,
        title,
        image: thumb,
        url: `https://www.youtube.com/playlist?list=${obj.playlistId}`,
      });
      return;
    }
    Object.values(obj).forEach(walk);
  }
  walk(json);
  // de-duplicate
  const map = new Map();
  for (const p of found) map.set(p.id, p);
  return Array.from(map.values());
}

(async function main() {
  const url = "https://www.youtube.com/@agapezeortodox/playlists";
  console.log("Fetching YouTube playlists from", url);
  const html = await get(url);
  const m =
    html.match(/ytInitialData\s*=\s*(\{.*?\});/s) ||
    html.match(/window\["ytInitialData"\]\s*=\s*(\{.*?\});/s);
  if (!m) {
    console.error("Could not find ytInitialData in page");
    process.exit(1);
  }
  let data;
  try {
    data = JSON.parse(m[1]);
  } catch (err) {
    console.error("Failed to parse ytInitialData", err);
    process.exit(1);
  }
  const playlists = findPlaylistsFromInitialData(data);
  const out = playlists.map((p) => ({
    id: p.id,
    title: p.title,
    description: "",
    image: p.image || "",
    tags: [],
    url: p.url,
  }));
  const outPath = "public/data/videos.json";
  fs.mkdirSync("public/data", { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");
  console.log("Wrote", out.length, "playlists to", outPath);
})();
