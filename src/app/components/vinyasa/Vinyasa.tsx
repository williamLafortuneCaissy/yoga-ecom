import Button from "../button/Button";
import InvertedCorner from "../invertedCorner/InvertedCorner";
import styles from "./Vinyasa.module.css";

const Vinyasa = () => {
  return (
    <section className={styles.vinyasa} style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('./images/vinyasa-1.jpg')" }}>
      <div className={styles.bottomLeft}>
        <InvertedCorner circleAt="top right" size="1rem" bottom="100%" left="0">
          <InvertedCorner circleAt="top right" size="1rem" bottom="0" left="100%">
            <span className={styles.spacer} style={{ paddingTop: "1rem", paddingBottom: ".5rem", paddingRight: "1rem", borderTopRightRadius: "1rem" }}>
              <Button>Join the flow</Button>
            </span>
          </InvertedCorner>
        </InvertedCorner>
        <h2 className={styles.h2}>
          <span className={styles.spacer} style={{ paddingBlock: ".5rem", borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}>Mindfully Crafted</span>
          <InvertedCorner circleAt="bottom right" size="1rem" top="0" left="100%">
            <InvertedCorner circleAt="top right" size="1rem" bottom="0" left="100%">
              <span className={styles.spacer}>Vinyasa Flow</span>
            </InvertedCorner>
          </InvertedCorner>
          <InvertedCorner circleAt="top right" size="1rem" bottom="0" left="100%">
            <span className={styles.spacer} style={{ paddingBlock: ".5rem", borderTopRightRadius: "1rem" }}>Inspired by Nature</span>
          </InvertedCorner>
        </h2>
      </div>
      <div className={styles.topRight}>
        <Button inverted>Start Your Journey</Button>
        <p>
          Manifest Your  <br />
          Inner Peace
        </p>
      </div>
    </section>
  );
}

export default Vinyasa;