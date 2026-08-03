const fs = require("fs");
const path = require("path");

const buildDir = path.resolve(__dirname, "..", "build");
const indexPath = path.join(buildDir, "index.html");
const manifestPath = path.join(buildDir, "asset-manifest.json");
const seoRoutesPath = path.resolve(__dirname, "..", "src", "data", "seoRoutes.json");

const escapeAttribute = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const escapeText = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const normalizeRoute = (route) => {
  if (!route || route === "/") return "/";
  return route.startsWith("/") ? route : `/${route}`;
};

const absoluteUrl = (siteOrigin, value) => {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  const pathValue = value.startsWith("/") ? value : `/${value}`;
  return `${siteOrigin}${pathValue}`;
};

const upsertMeta = (html, attrName, attrValue, content) => {
  const escapedAttrValue = escapeAttribute(attrValue);
  const escapedContent = escapeAttribute(content);
  const tag = `<meta ${attrName}="${escapedAttrValue}" content="${escapedContent}" />`;
  const pattern = new RegExp(
    `<meta\\s+[^>]*${attrName}=["']${escapedAttrValue.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}["'][^>]*>`,
    "i"
  );

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n</head>`);
};

const upsertCanonical = (html, href) => {
  const tag = `<link rel="canonical" href="${escapeAttribute(href)}" />`;
  const pattern = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace("</head>", `    ${tag}\n</head>`);
};

const upsertTitle = (html, title) => {
  const tag = `<title>${escapeText(title)}</title>`;
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, tag);
  }
  return html.replace("</head>", `    ${tag}\n</head>`);
};

const resolveImage = (routeMeta, defaultMeta, manifest, siteOrigin) => {
  if (routeMeta.imageAsset) {
    const manifestValue = manifest.files?.[routeMeta.imageAsset];
    if (!manifestValue) {
      throw new Error(`Missing asset-manifest entry for ${routeMeta.imageAsset}`);
    }
    return absoluteUrl(siteOrigin, manifestValue);
  }

  return absoluteUrl(siteOrigin, routeMeta.image || defaultMeta.image);
};

const buildRouteHtml = (template, route, routeMeta, defaultMeta, manifest, siteOrigin) => {
  const normalizedRoute = normalizeRoute(route);
  const url = absoluteUrl(siteOrigin, normalizedRoute);
  const title = routeMeta.title || defaultMeta.title;
  const ogTitle = routeMeta.ogTitle || title;
  const description = routeMeta.description || defaultMeta.description;
  const type = routeMeta.type || defaultMeta.type || "website";
  const image = resolveImage(routeMeta, defaultMeta, manifest, siteOrigin);
  const imageAlt = routeMeta.imageAlt || defaultMeta.imageAlt || "Nuestro Pueblo";

  let html = template;
  html = upsertTitle(html, title);
  html = upsertMeta(html, "name", "description", description);
  html = upsertCanonical(html, url);
  html = upsertMeta(html, "property", "og:type", type);
  html = upsertMeta(html, "property", "og:title", ogTitle);
  html = upsertMeta(html, "property", "og:description", description);
  html = upsertMeta(html, "property", "og:url", url);
  html = upsertMeta(html, "property", "og:image", image);
  html = upsertMeta(html, "property", "og:image:alt", imageAlt);

  if (routeMeta.imageWidth) {
    html = upsertMeta(html, "property", "og:image:width", routeMeta.imageWidth);
  }
  if (routeMeta.imageHeight) {
    html = upsertMeta(html, "property", "og:image:height", routeMeta.imageHeight);
  }

  html = upsertMeta(html, "name", "twitter:card", "summary_large_image");
  html = upsertMeta(html, "name", "twitter:title", ogTitle);
  html = upsertMeta(html, "name", "twitter:description", description);
  html = upsertMeta(html, "name", "twitter:image", image);

  return html;
};

const writeRouteHtml = (route, html) => {
  const normalizedRoute = normalizeRoute(route);
  if (normalizedRoute === "/") {
    fs.writeFileSync(indexPath, html);
    return;
  }

  const routeDir = path.join(buildDir, ...normalizedRoute.split("/").filter(Boolean));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
};

const main = () => {
  if (!fs.existsSync(indexPath)) {
    throw new Error("build/index.html not found. Run react-scripts build first.");
  }

  const template = fs.readFileSync(indexPath, "utf8");
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, "utf8"))
    : { files: {} };
  const seoConfig = JSON.parse(fs.readFileSync(seoRoutesPath, "utf8"));
  const siteOrigin = seoConfig.siteOrigin || "https://nuestro-pueblo.vercel.app";
  const defaultMeta = seoConfig.default || {};
  const routes = seoConfig.routes || {};

  Object.entries(routes).forEach(([route, routeMeta]) => {
    const html = buildRouteHtml(template, route, routeMeta, defaultMeta, manifest, siteOrigin);
    writeRouteHtml(route, html);
  });

  console.log(`Generated route meta HTML for ${Object.keys(routes).length} route(s).`);
};

main();
