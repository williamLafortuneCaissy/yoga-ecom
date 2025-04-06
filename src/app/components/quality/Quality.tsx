import Image from "next/image";
import Button from "../button/Button";
import InvertedCorner from "../invertedCorner/InvertedCorner";
import styles from "./Quality.module.css";

const Quality = () => {
  return (
    <section className={styles.quality}>
      <article className={styles.article}>
        <Button inverted>Products</Button>
        <p className={styles.p}>Create Your Sanctuary as You Envisioned</p>
        <p className={styles.p}>Nature’s Flow Within</p>
      </article>
      <div className={styles.main}>
        <InvertedCorner circleAt="top right" size="1rem" bottom="0" left="100%" style={{ width: "100%" }}>
          <span className={`${styles.spacer} ${styles.roundedTop}`}>
            <Button>Modern Serenity</Button>
          </span>
        </InvertedCorner>
        <h2 className={styles.h2}>
          <InvertedCorner circleAt="top right" size="1rem" bottom="0" left="100%">
            <span className={`${styles.spacer} ${styles.roundedTop}`}>
              When we craft
            </span>
          </InvertedCorner>
          <span className={`${styles.spacer} ${styles.roundedTop} ${styles.roundedBottom}`}>
            Yoga essentials,
          </span>
          <InvertedCorner circleAt="bottom right" size="1rem" top="0" left="100%">
            <span className={`${styles.spacer} ${styles.roundedBottom}`}>
              We look for
            </span>
          </InvertedCorner>
          <InvertedCorner circleAt="bottom right" size="1rem" top="0" left="100%">
            <span className={`${styles.spacer} ${styles.roundedBottom}`}>
              The finest
            </span>
          </InvertedCorner>
        </h2>
        <InvertedCorner circleAt="bottom right" size="1rem" top="0" left="100%" style={{ width: "100%", paddingTop: "1rem" }}>
          <span className={`${styles.spacer} ${styles.roundedBottom}`}>
            <Button filled>Buy now</Button>
          </span>
        </InvertedCorner>
      </div>
      <Image className={styles.featured} src="./images/quality-2.jpg" alt="High quality mats" width={1400} height={933} />
    </section>
  );
}

export default Quality;