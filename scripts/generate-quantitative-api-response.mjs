import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(
  /\/$/,
  ""
);
const endpoint = `${siteUrl}/api/services?main_service=quantitative`;
const outputPath = resolve(
  process.cwd(),
  "data/quantitative-research-api-response.full.json"
);

const response = await fetch(endpoint);

if (!response.ok) {
  throw new Error(
    `Unable to generate fixture: ${response.status} ${response.statusText}`
  );
}

const payload = await response.json();
await writeFile(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

console.log(`Generated ${outputPath}`);
