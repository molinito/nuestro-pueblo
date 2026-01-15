const fs = require("fs");
const path = require("path");

const ROOTS = ["src", "public"];
const TEXT_EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".css",
  ".html",
  ".md",
  ".json",
  ".svg"
]);
const SKIP_DIRS = new Set(["node_modules", "build", "dist", ".git"]);
const MAX_RESULTS = 100;

const patterns = [
  { name: "replacement-char", regex: /\uFFFD/g },
  { name: "mojibake-latin", regex: /[\u00C2\u00C3\u00A2\u00A3\u00A4\u00A5]/g },
  { name: "cyrillic", regex: /[\u0400-\u04FF]/g },
  { name: "cjk", regex: /[\u3040-\u30FF\u3400-\u9FFF]/g }
];

const results = [];

const toLineCol = (text, index) => {
  const before = text.slice(0, index);
  const line = before.split("\n").length;
  const lastBreak = before.lastIndexOf("\n");
  const column = lastBreak === -1 ? index + 1 : index - lastBreak;
  return { line, column };
};

const scanFile = (filePath) => {
  const text = fs.readFileSync(filePath, "utf8");
  patterns.forEach((pattern) => {
    let match;
    while ((match = pattern.regex.exec(text)) !== null) {
      const { line, column } = toLineCol(text, match.index);
      results.push({ filePath, line, column, pattern: pattern.name });
      if (results.length >= MAX_RESULTS) {
        return;
      }
    }
  });
};

const walkDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    return;
  }
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) {
        walkDir(fullPath);
      }
      return;
    }
    const ext = path.extname(entry.name);
    if (TEXT_EXTENSIONS.has(ext)) {
      scanFile(fullPath);
    }
  });
};

ROOTS.forEach((root) => walkDir(path.join(process.cwd(), root)));

if (results.length === 0) {
  console.log("No encoding issues detected.");
  process.exit(0);
}

console.error("Potential encoding issues detected:");
results.forEach((item) => {
  console.error(`${item.filePath}:${item.line}:${item.column} ${item.pattern}`);
});
process.exit(1);
