import Button from "../button/Button";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <section className={styles.top}>
        <div className={styles.left}>
          <div>Design Your Practice</div>
          <h2>Create Your Space</h2>
        </div>
        <Button filled>{"Let's Talk!"}</Button>
      </section>
      <section className={styles.bottom}>
        <p>&copy; 2025, All right reserved. <br />ZenFlow Studio</p>
        <div className={styles.flex}>
          <Button>Facebook</Button>
          <Button>Instagram</Button>
          <Button>Twitter</Button>
          <Button>Linkedin</Button>
        </div>
        <address>
          2485 Rue Lumière, <br />MONTRÉAL, QC
        </address>
      </section>
    </footer>
  );
}

export default Footer;