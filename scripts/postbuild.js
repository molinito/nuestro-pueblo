const { spawnSync } = require("child_process");

const isVercel = String(process.env.VERCEL || "").toLowerCase() === "1";

if (isVercel) {
  console.log("Skipping react-snap on Vercel.");
  process.exit(0);
}

const result = spawnSync("npx", ["react-snap"], {
  stdio: "inherit",
  shell: true
});

process.exit(result.status ?? 0);
