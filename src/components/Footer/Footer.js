import styles from "./Footer.module.css";
import { FaFacebook, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const qrUrl =
    "https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=https%3A%2F%2Fnuestro-pueblo.vercel.app%2F";

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerText}>
          <p>&copy; Copyright 2023 Todos los derechos reservados</p>
          <p>Powered by Molinito</p>
        </div>
        <div className={styles.footerActions}>
          <div className={styles.socialIcons}>
            <a
              className={`${styles.socialLink} ${styles.gmail}`}
              href="mailto:molinito48@gmail.com"
              aria-label="Gmail"
            >
              <FaEnvelope />
            </a>

            <a
              className={`${styles.socialLink} ${styles.whatsapp}`}
              href="https://wa.me/5493525610862?text=Hola%E2%80%A6!!!%2C%20este%20es%20un%20chat%20con%20destino%20comercial.%20Puedes%20dejar%20tu%20consulta%20acerca%20del%20portal%20web%20o%20si%20necesitas%20una%20p%C3%A1gina%20web%20para%20tu%20negocio."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              className={`${styles.socialLink} ${styles.facebook}`}
              href="https://www.facebook.com/groups/26140216205584060"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              className={`${styles.socialLink} ${styles.linkedin}`}
              href="https://www.linkedin.com/in/marcelo-saravia-27128092"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className={styles.qrBox}>
            <img
              className={styles.qrImage}
              src={qrUrl}
              alt="QR para abrir nuestro-pueblo.vercel.app"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
