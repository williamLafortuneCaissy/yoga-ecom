import React from 'react';
import Button from '../button/Button';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.main}>
        <div className={styles.topleft}>
          <Button type="sm" >Yoga Lifestyle</Button>
          <p>Find your <br /> INNER PEACE</p>
        </div>
        <div className={styles.bottomleft}>
          <span>
            <Button>Embrace mindful living</Button>
          </span>
          <h1><span>Inner Peace</span><span>Elevated Living</span> </h1>
        </div>
      </div>
      <article className={styles.featured}>
        <Button type='sm'>Client</Button>
        <p>Become a <br />REGULAR CUSTOMER</p>
        <p>Step into <br />the Yoga Flow</p>
        <div className={styles.bottomRight}>
          <Button type='circle'>
            <Arrow />
          </Button>
        </div>
      </article>
      <article className={styles.featured}>
        <Button type='sm'>Product</Button>
        <p>Create Your Practice <br /> as You Envisioned</p>
        <p>{"Nature's Essence"} <br />Within</p>
        <div className={styles.bottomRight}>
          <Button type='circle'>
            <Arrow />
          </Button>
        </div>
      </article>
    </section>
  );
}

const Arrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.525 5.495l-.004 2l4.557.01l-9.603 9.585l1.413 1.415l9.63-9.61l-.012 4.614l2 .004l.02-8z" /></svg>
  );
}

export default Hero;