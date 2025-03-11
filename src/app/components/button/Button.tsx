"use client";

import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  type?: "sm" | "md" | 'circle' | 'square';
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Button({ type: size = "md", style, children }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`} style={style}>
      {children}
    </button>
  )
}
