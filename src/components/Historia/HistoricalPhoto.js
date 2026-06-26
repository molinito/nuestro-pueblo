import React from "react";

const HistoricalPhoto = ({
  image,
  title,
  subtitle,
  date,
  location,
  description,
  source,
  author,
  number,
  alt,
  onOpen,
  onKeyDown,
}) => {
  const paddedNumber = String(number ?? 1).padStart(2, "0");

  return (
    <figure
      className="historia__historical-photo"
      role={onOpen ? "button" : undefined}
      tabIndex={onOpen ? 0 : undefined}
      onClick={onOpen}
      onKeyDown={onKeyDown}
      aria-label={onOpen ? `Agrandar documento fotográfico: ${alt || title}` : undefined}
    >
      <div className="historia__historical-photo-kicker">
        Documento fotográfico N° {paddedNumber}
      </div>
      <figcaption className="historia__historical-photo-head">
        {title && <strong>{title}</strong>}
        {subtitle && <span>{subtitle}</span>}
        {date && <span>{date}</span>}
        {location && <span>{location}</span>}
      </figcaption>
      <div className="historia__historical-photo-image">
        <img src={image} alt={alt || title || ""} loading="lazy" decoding="async" />
        {onOpen && <div className="historia__overlay">Haz click para agrandar</div>}
      </div>
      {(description || source || author) && (
        <div className="historia__historical-photo-body">
          {description && <p>{description}</p>}
          {source && (
            <p>
              <span>Fuente:</span> {source}
            </p>
          )}
          {author && (
            <p>
              <span>Autor:</span> {author}
            </p>
          )}
        </div>
      )}
    </figure>
  );
};

export default HistoricalPhoto;
