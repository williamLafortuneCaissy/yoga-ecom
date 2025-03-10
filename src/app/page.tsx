
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./components/button/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/brand.svg"
            alt="ZenFlow Studio"
            width={237}
            height={60}
          />
        </Link>
        <Button>{"Let's talk!"}</Button>
      </header>
    </>
  );
}


