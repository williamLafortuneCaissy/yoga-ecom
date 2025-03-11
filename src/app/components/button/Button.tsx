"use client";

import React from 'react';
import styles from './Button.module.css';

type ButtonProps = {
  size?: "sm" | "md";
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default function Button({ size = "md", style, children }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`} style={style}>
      {children}
    </button>
  )
}
