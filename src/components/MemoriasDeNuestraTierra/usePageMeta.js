import { useEffect } from "react";

const upsertMeta = (name, content) => {
  if (!content) return;
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

export default function usePageMeta({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    upsertMeta("description", description);
  }, [title, description]);
}

