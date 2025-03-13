"use client";

import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  buttonType?: "sm" | "md" | 'circle' | 'square';
  inverted?: boolean;
  filled?: boolean;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Button({ buttonType = "md", inverted = false, filled = false, style, children }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[buttonType]}`} style={style} type='button' data-inverted={inverted} data-filled={filled}>
      {children}
    </button>
  )
}
