import { writeFile } from "node:fs/promises";

const spreadsheetId = "1tK6Ec98FY6zLos3LbBnYG5hp9YloqAOVXy0kyr3V4vY";
const sheets = [
  { name: "Pages", gid: "0" },
  { name: "Blog", gid: "645400255" },
  { name: "Team", gid: "1567898087" },
];

function parseCsv(csv) {
  const rows = [];
  let row = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const next = csv[index + 1];

    if (char === '"') {
      if (quoted && next === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (char === "," && !quoted) {
      row.push(value);
      value = "";
    } else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim())) rows.push(row);
      row = [];
      value = "";
    } else {
      value += char;
    }
  }

  if (value || row.length) {
    row.push(value);
    rows.push(row);
  }

  return rows;
}

function clean(value) {
  const normalized = value.replace(/\s+/g, " ").trim();
  return normalized.startsWith('"') && normalized.endsWith('"')
    ? normalized.slice(1, -1).trim()
    : normalized;
}

function valid(value) {
  const normalized = clean(value);
  return (
    normalized.length > 0 &&
    normalized !== "Loading..." &&
    !normalized.startsWith("#REF!")
  );
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function addEntry(output, path, title, description) {
  const entry = {};
  if (valid(title)) entry.title = clean(title);
  if (valid(description)) entry.description = clean(description);
  if (entry.title || entry.description) output[path] = entry;
}

const output = {};

for (const sheet of sheets) {
  const url =
    `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export` +
    `?format=csv&gid=${sheet.gid}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Unable to download ${sheet.name}: ${response.status}`);
  }

  const rows = parseCsv(await response.text());

  for (const [rawUrl = "", rawTitle = "", rawDescription = ""] of rows) {
    if (!rawUrl.startsWith("http")) continue;

    const path = new URL(rawUrl).pathname.replace(/\/$/, "") || "/";
    addEntry(output, path, rawTitle, rawDescription);

    if (sheet.name === "Blog" && valid(rawTitle)) {
      const title = clean(rawTitle);
      const titleWithoutBrand = title
        .replace(/\s*[-|]\s*Insights\s+Opinion$/i, "")
        .trim();
      const blogPaths = new Set([
        `/blogs/${slugify(title)}`,
        `/blogs/${slugify(titleWithoutBrand)}`,
        `/blogs/${path.split("/").filter(Boolean).at(-1)}`,
      ]);

      for (const blogPath of blogPaths) {
        addEntry(output, blogPath, rawTitle, rawDescription);
      }
    }

    if (path.startsWith("/research-expertise/")) {
      addEntry(
        output,
        path.replace("/research-expertise/", "/research/"),
        rawTitle,
        rawDescription
      );
    }

    if (path.startsWith("/case-study/")) {
      addEntry(
        output,
        path.replace("/case-study/", "/case-studies/"),
        rawTitle,
        rawDescription
      );
    }

    if (path.startsWith("/our-teams/")) {
      addEntry(
        output,
        path.replace("/our-teams/", "/our-team/"),
        rawTitle,
        rawDescription
      );
    }
  }
}

const staticAliases = {
  "/about-us": "/our-story",
  "/about-us/leadership": "/leadership",
  "/case-studies": "/case-study",
  "/our-team": "/our-teams",
};

for (const [currentPath, sheetPath] of Object.entries(staticAliases)) {
  if (output[sheetPath]) output[currentPath] = output[sheetPath];
}

await writeFile(
  new URL("../data/sheet-seo.json", import.meta.url),
  `${JSON.stringify(output, null, 2)}\n`
);

console.log(`Generated ${Object.keys(output).length} SEO route entries.`);
