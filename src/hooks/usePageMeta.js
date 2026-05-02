import { useEffect } from "react";

const SITE_ORIGIN = "https://nuestro-pueblo.vercel.app";
const DEFAULT_IMAGE = `${SITE_ORIGIN}/png6.png`;

const upsertMeta = (selector, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => {
      // Ensure the identifying attribute exists (name/property).
      if (key === "name" || key === "property") {
        el.setAttribute(key, value);
      }
    });
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "content") {
      el.setAttribute("content", value);
    }
  });
};

const upsertLink = (rel, href) => {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const normalizePath = (path) => {
  if (!path) return "/";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) return `/${path}`;
  return path;
};

/**
 * Lightweight SEO/meta hook (no external deps).
 * Updates title, meta description, canonical, OpenGraph, and Twitter tags.
 */
const usePageMeta = ({
  title,
  description,
  path,
  image,
  imageAlt = "Nuestro Pueblo"
} = {}) => {
  useEffect(() => {
    const nextTitle =
      title || "Nuestro Pueblo: Historia, Cultura y Tradicion en Jesus Maria y Colonia Caroya";
    const nextDescription =
      description ||
      "Historia, lugares, eventos, costumbres y memorias de Jesus Maria y Colonia Caroya (Cordoba, Argentina).";

    const nextPath = normalizePath(path || window.location.pathname || "/");
    const nextUrl = nextPath.startsWith("http") ? nextPath : `${SITE_ORIGIN}${nextPath}`;
    const nextImage = image
      ? image.startsWith("http")
        ? image
        : `${SITE_ORIGIN}${normalizePath(image)}`
      : DEFAULT_IMAGE;

    document.title = nextTitle;
    upsertMeta('meta[name="description"]', { name: "description", content: nextDescription });
    upsertLink("canonical", nextUrl);

    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Nuestro Pueblo"
    });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: nextTitle });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: nextDescription
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: nextUrl });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: nextImage });
    upsertMeta('meta[property="og:image:alt"]', {
      property: "og:image:alt",
      content: imageAlt
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image"
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: nextTitle });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: nextDescription
    });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: nextImage });
  }, [title, description, path, image, imageAlt]);
};

export default usePageMeta;

