import styles from "./Footer.module.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerText}>
          <p>&copy; Copyright 2023 Todos los derechos reservados</p>
          <p>Powered by Molinito</p>
        </div>
        <div className={styles.socialIcons}>
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
      </div>
    </footer>
  );
};

export default Footer;
