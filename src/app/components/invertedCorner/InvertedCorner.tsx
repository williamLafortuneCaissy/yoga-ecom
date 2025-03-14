import { CSSProperties } from 'react';
import styles from './InvertedCorner.module.css';

type InvertedCornerProps = {
  circleAt: CSSProperties['backgroundPosition']; // ex: 'top left' is gonna have a border-bottom-right-radius of {size}
  size: CSSProperties['borderRadius'];
  top?: CSSProperties['top'];
  bottom?: CSSProperties['bottom'];
  left?: CSSProperties['left'];
  right?: CSSProperties['right'];
  style?: CSSProperties;
  children: React.ReactNode;
};


const InvertedCorner = ({ circleAt, size, top, bottom, left, right, style: styleProps, children }: InvertedCornerProps) => {
  const style = {
    '--circleAt': circleAt,
    '--size': size,
    '--bottom': bottom || 'auto',
    '--top': top || 'auto',
    '--left': left || 'auto',
    '--right': right || 'auto',
    ...styleProps
  } as CSSProperties;

  return (<span className={styles.invertedCorner} style={style}>{children}</span>);
};

export default InvertedCorner;