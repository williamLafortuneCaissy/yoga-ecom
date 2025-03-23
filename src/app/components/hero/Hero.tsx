import { ArrowIcon } from '../ArrowIcon';
import Button from '../button/Button';
import InvertedCorner from '../invertedCorner/InvertedCorner';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <div className={styles.topleft}>
          <Button buttonType="sm" >Yoga Lifestyle</Button>
          <p>Find your <br /> INNER PEACE</p>
        </div>
        <div className={styles.bottomleft}>
          <InvertedCorner circleAt='top right' size='1.5rem' bottom='100%' left='0'>
            <InvertedCorner circleAt='top right' size='1.5rem' bottom="0" left="100%">
              <span className={styles.spacer}>
                <Button>Embrace mindful living</Button>
              </span>
            </InvertedCorner>
          </InvertedCorner>
          <h1>
            <InvertedCorner circleAt='top right' size='1.5rem' bottom='0' left='100%'>
              <span className={styles.spacer}>
                Inner Peace
              </span>
            </InvertedCorner>
            <InvertedCorner circleAt='top right' size='1.5rem' bottom='0' left='100%'>
              <span className={styles.spacer}>
                Elevated Living
              </span>
            </InvertedCorner>
          </h1>
        </div>
      </div>
      <article className={styles.featured}>
        <Button buttonType='sm'>Client</Button>
        <p>Become a <br />REGULAR CUSTOMER</p>
        <p>Step into <br />the Yoga Flow</p>
        <div className={styles.bottomRight}>
          <InvertedCorner circleAt='top left' size='1rem' bottom='100%' right='0'>
            <InvertedCorner circleAt='top left' size='1rem' bottom='0' right='100%'>
              <span className={styles.spacer}>
                <Button buttonType='circle' filled>
                  <ArrowIcon />
                </Button>
              </span>
            </InvertedCorner>
          </InvertedCorner>
        </div>
      </article>
      <article className={styles.featured}>
        <Button buttonType='sm' inverted>Product</Button>
        <p>Create Your Practice <br /> as You Envisioned</p>
        <p>{"Nature's Essence"} <br />Within</p>
        <div className={styles.bottomRight}>
          <InvertedCorner circleAt='top left' size='1rem' bottom='100%' right='0'>
            <InvertedCorner circleAt='top left' size='1rem' bottom='0' right='100%'>
              <span className={styles.spacer}>
                <Button buttonType='circle' filled>
                  <ArrowIcon />
                </Button>
              </span>
            </InvertedCorner>
          </InvertedCorner>
        </div>
      </article>
    </section>
  );
}

export default Hero;