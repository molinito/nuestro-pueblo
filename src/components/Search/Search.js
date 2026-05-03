import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.css";
import { searchIndex } from "../../data/searchIndex";

const MIN_QUERY_LENGTH = 2;
const MAX_RESULTS = 10;

const normalizeText = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const buildSearchText = (item) =>
  [
    item.title,
    item.subtitle,
    item.section,
    item.id,
    item.href,
    item.content,
    ...(item.highlights || []),
    ...(item.keywords || [])
  ]
    .filter(Boolean)
    .join(" ");

const searchableItems = searchIndex.map((item) => ({
  ...item,
  searchText: normalizeText(buildSearchText(item))
}));

const Search = ({ onNavigate }) => {
  const [query, setQuery] = useState("");

  const normalizedQuery = useMemo(() => normalizeText(query), [query]);

  const { results, total } = useMemo(() => {
    if (normalizedQuery.length < MIN_QUERY_LENGTH) {
      return { results: [], total: 0 };
    }
    const terms = normalizedQuery.split(" ").filter(Boolean);
    const matches = searchableItems.filter((item) =>
      terms.every((term) => item.searchText.includes(term))
    );
    return {
      results: matches.slice(0, MAX_RESULTS),
      total: matches.length
    };
  }, [normalizedQuery]);

  const handleClear = () => setQuery("");
  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      handleClear();
    }
  };

  const handleLinkClick = () => {
    handleClear();
    if (onNavigate) {
      onNavigate();
    }
  };

  const showHelper = normalizedQuery.length > 0 && normalizedQuery.length < MIN_QUERY_LENGTH;
  const showResults = normalizedQuery.length >= MIN_QUERY_LENGTH;

  return (
    <div className={styles.search}>
      <div className={styles.searchHeader}>
        <label className={styles.searchLabel} htmlFor="site-search">
          Buscador del portal
        </label>
        <div className={styles.searchField}>
          <input
            id="site-search"
            type="search"
            className={styles.searchInput}
            placeholder="Busca por título, subtítulo o texto destacado"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
          />
          {query.length > 0 && (
            <button
              type="button"
              className={styles.clearButton}
              onClick={handleClear}
              aria-label="Limpiar búsqueda"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {showHelper && (
        <p className={styles.helperText}>Escribí al menos 2 caracteres.</p>
      )}

      {showResults && (
        <div className={styles.results}>
          <div className={styles.resultsHeader}>
            <span>Resultados</span>
            <span>
              {total > 0 ? `${Math.min(total, MAX_RESULTS)} de ${total}` : "0"}
            </span>
          </div>
          {results.length > 0 ? (
            <ul className={styles.resultList}>
              {results.map((item) => (
                <li key={item.id} className={styles.resultItem}>
                  <Link className={styles.resultLink} to={item.href} onClick={handleLinkClick}>
                    <span className={styles.resultSection}>{item.section}</span>
                    <span className={styles.resultTitle}>{item.title}</span>
                    {item.subtitle && (
                      <span className={styles.resultSubtitle}>{item.subtitle}</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.emptyText}>No encontramos coincidencias.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
