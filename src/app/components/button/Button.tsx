"use client";

import React from 'react';
import styles from './Button.module.css';

export default function Button({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}
