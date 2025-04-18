import Image from "next/image";
import Link from "next/link";
import Button from "../button/Button";
import styles from "./Header.module.css";


const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="./images/brand.svg"
          alt="ZenFlow Studio"
          width={237}
          height={60}
        />
      </Link>
      <Button style={{ marginLeft: 'auto', marginRight: '1.5rem' }}>{"Let's talk!"}</Button>
      <button>
        <Image className={styles.menu} src="./images/menu.svg" width={24} height={24} alt="menu" />
      </button>
    </header>
  );
}

export default Header;