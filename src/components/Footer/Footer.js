import styles from "./Footer.module.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <p>&copy; Copyright 2023 Todos los derechos reservados</p>
        <p>Powered by Molinito</p>
        <a
          href="https://www.facebook.com/groups/26140216205584060"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.linkedin.com/in/marcelo-saravia-27128092"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
