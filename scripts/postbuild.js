const { spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const isStrict = String(process.env.POSTBUILD_STRICT || "") === "1";
const isDisabled = String(process.env.REACT_SNAP_DISABLE || "") === "1";

if (isDisabled) {
  console.log("Skipping react-snap (REACT_SNAP_DISABLE=1).");
  process.exit(0);
}

const result = spawnSync("npx", ["react-snap"], {
  encoding: "utf8",
  shell: true
});

const combinedOutput = `${result.stdout || ""}${result.stderr || ""}`;
if (combinedOutput) {
  process.stdout.write(result.stdout || "");
  process.stderr.write(result.stderr || "");
}

try {
  const outPath = path.join(process.cwd(), "build", "react-snap.log");
  fs.writeFileSync(outPath, combinedOutput || "(no output)\n", "utf8");
  console.log(`Saved react-snap log to ${outPath}`);
} catch (err) {
  console.warn("Failed to write react-snap log file:", err && err.message ? err.message : err);
}

// Also log which routes were actually materialized as HTML on disk.
try {
  const entries = fs.readdirSync(path.join(process.cwd(), "build"), { withFileTypes: true });
  const topLevelDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name).sort();
  const topLevelHtml = entries.filter((e) => e.isFile() && e.name.endsWith(".html")).map((e) => e.name).sort();
  const outPath2 = path.join(process.cwd(), "build", "react-snap-files.log");
  fs.writeFileSync(
    outPath2,
    `Top-level .html files:\n${topLevelHtml.join("\n")}\n\nTop-level directories:\n${topLevelDirs.join("\n")}\n`,
    "utf8"
  );
  console.log(`Saved react-snap file listing to ${outPath2}`);
} catch (err) {
  console.warn("Failed to write react-snap file listing:", err && err.message ? err.message : err);
}

if ((result.status ?? 0) !== 0 && !isStrict) {
  // react-snap relies on Chromium. If it cannot launch locally, do not fail the build.
  console.warn("react-snap failed; continuing without prerender (set POSTBUILD_STRICT=1 to fail).");
  process.exit(0);
}

process.exit(result.status ?? 0);
