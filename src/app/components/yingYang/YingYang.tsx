import Button from '../button/Button';
import InvertedCorner from '../invertedCorner/InvertedCorner';
import styles from './YingYang.module.css';

const YingYang = () => {
  return (
    <section className={styles.yingYang}>
      <h2 className={styles.title}>
        <InvertedCorner circleAt='bottom left' size='1rem' top='0' right='100%'>
          <InvertedCorner circleAt='top left' size='1rem' bottom="0" right="100%">
            <span className={styles.wrapper}>Flow with the Ying</span>
          </InvertedCorner>
        </InvertedCorner>
        <span className={styles.wrapper}>Release with the Yang</span>
      </h2>
      <div className={styles.topLeft}>
        <Button buttonType="sm">Try Ying Yang</Button>
        <p>Find Your Balance <br /> EMBRACE HARMONY TODAY</p>
      </div>
      <div className={styles.buttonContainer}>
        <InvertedCorner circleAt='top left' size='1rem' bottom='0' right='100%'>
          <InvertedCorner circleAt='top right' size='1rem' bottom='0' left='100%'>
            <span className={styles.wrapper}>
              <Button buttonType="sm">Event - YIN YANG FLOW 2023</Button>
            </span>
          </InvertedCorner>
        </InvertedCorner>
      </div>
    </section>
  );
}

export default YingYang;