import React from "react";
import { Link } from "react-router-dom";

const romanNumerals = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
];

const getPartLabel = (partNumber) =>
  `Entrega ${romanNumerals[partNumber - 1] ?? partNumber}`;

const HistorySeries = ({ title, currentPart, totalParts, parts = [] }) => {
  const partLinks = parts.reduce((links, part) => {
    if (part?.number && part?.href) links[part.number] = part.href;
    return links;
  }, {});
  const declaredParts = [
    { number: currentPart, current: true },
    ...parts.filter((part) => part?.number !== currentPart),
  ];
  const visibleParts = declaredParts.length
    ? declaredParts
    : Array.from({ length: totalParts }, (_, index) => ({ number: index + 1 }));

  return (
    <nav className="historia__series" aria-label={title}>
      <p className="historia__series-title">{title}</p>
      <ol className="historia__series-list">
        {visibleParts.map((part) => {
          const partNumber = part.number;
          const isCurrent = partNumber === currentPart;
          const href = partLinks[partNumber];
          const label = getPartLabel(partNumber);

          return (
            <li
              className={`historia__series-item${
                isCurrent ? " is-current" : ""
              }${!isCurrent && !href ? " is-disabled" : ""}`}
              key={partNumber}
            >
              <span className="historia__series-marker" aria-hidden="true" />
              {href && !isCurrent ? (
                <Link className="historia__series-link" to={href}>
                  {label}
                </Link>
              ) : (
                <span className="historia__series-label">
                  {label}
                  {isCurrent ? " (actual)" : ""}
                  {!isCurrent && part.status ? ` ${part.status}` : ""}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default HistorySeries;
