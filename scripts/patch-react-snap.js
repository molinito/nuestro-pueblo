const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "..",
  "node_modules",
  "react-snap",
  "src",
  "puppeteer_utils.js"
);

const original = '        await page._client.send("ServiceWorker.disable");';
const patched = `        const client =
          typeof page._client === "function" ? page._client() : page._client;
        if (client && typeof client.send === "function") {
          await client.send("ServiceWorker.disable");
        }`;

function patchReactSnap() {
  if (!fs.existsSync(filePath)) {
    console.warn("react-snap patch skipped: puppeteer_utils.js was not found.");
    return;
  }

  const source = fs.readFileSync(filePath, "utf8");

  if (source.includes(patched)) {
    console.log("react-snap patch already applied.");
    return;
  }

  if (!source.includes(original)) {
    console.warn("react-snap patch skipped: expected source was not found.");
    return;
  }

  fs.writeFileSync(filePath, source.replace(original, patched));
  console.log("react-snap patch applied.");
}

if (require.main === module) {
  patchReactSnap();
}

module.exports = patchReactSnap;
