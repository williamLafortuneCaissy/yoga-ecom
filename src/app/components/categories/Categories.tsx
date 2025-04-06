import Image from "next/image";
import { ArrowIcon } from "../ArrowIcon";
import Button from "../button/Button";
import InvertedCorner from "../invertedCorner/InvertedCorner";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <Article1 />
      <Article2 />
      <Article3 />
    </section>
  )
}


function Article1() {
  return (
    <article className={styles.article}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/categories-1.jpg" alt="Women doing yoga with her toddler" width={750} height={500} />
        <div className={styles.btnContainer}>
          <InvertedCorner circleAt="top left" size="1.5rem" bottom="0" right="100%">
            <InvertedCorner circleAt="top left" size="1.5rem" bottom="100%" right="0">
              <span className={styles.spacer}>
                <Button filled buttonType="circle"><ArrowIcon /></Button>
              </span>
            </InvertedCorner>
          </InvertedCorner>
        </div>
      </div>
      <Button>Yoga for Everyone</Button>
      <h2 className={styles.title}>Embracing All, <br />GROWING TOGETHER</h2>
    </article>
  )
}


function Article2() {
  return (
    <article className={styles.article}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/categories-2.jpg" alt="WOmen doing a complex yoga figure" width={900} height={900} />
        <div className={styles.content}>
          <InvertedCorner circleAt="top right" size="1.5rem" bottom="100%" left="0">
            <InvertedCorner circleAt="top right" size="1.5rem" bottom="0" left="100%">
              <span className={styles.spacer + " " + styles.buttonSpacer}>
                <Button>Mindful Movement</Button>
              </span>
            </InvertedCorner>
          </InvertedCorner>
          <h2 className={styles.title}>
            <span className={styles.spacer} style={{ borderTopRightRadius: "1.25rem", borderBottomRightRadius: "1.25rem", letterSpacing: .7 }}>We Flow with Intention</span>
            <InvertedCorner circleAt="bottom right" size="1.25rem" top="0" left="100%">
              <InvertedCorner circleAt="top right" size="1.25rem" bottom="0" left="100%">
                <span className={styles.spacer}>TO FIND INNER PEACE</span>
              </InvertedCorner>
            </InvertedCorner>
          </h2>
        </div>
      </div>
    </article >
  )
}

function Article3() {
  return (
    <article className={styles.article}>
      <Button>Empower Your Flow</Button>
      <h2 className={styles.title}>
        Strength in Motion <br />
        POWER IN PRESENCE
      </h2>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/categories-2.jpg" alt="WOmen doing a complex yoga figure" width={880} height={501} />
        <div className={styles.btnContainer}>
          <InvertedCorner circleAt="top left" size="1.5rem" bottom="0" right="100%">
            <InvertedCorner circleAt="top left" size="1.5rem" bottom="100%" right="0">
              <span className={styles.spacer}>
                <Button filled buttonType="circle"><ArrowIcon /></Button>
              </span>
            </InvertedCorner>
          </InvertedCorner>
        </div>
      </div>
    </article>
  )
}