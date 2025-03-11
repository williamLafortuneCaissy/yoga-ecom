import React from 'react';
import Button from '../button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <div className={styles.topleft}>
          <Button size="sm">Yoga Lifestyle</Button>
          <p>Find your <br /> INNER PEACE</p>
        </div>
        <div className={styles.bottomleft}>
          <span>
            <Button>Embrace mindful living</Button>
          </span>
          <h1><span>Inner Peace</span><span>Elevated Living</span> </h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;