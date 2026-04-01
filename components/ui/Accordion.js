'use client';

import { useState } from 'react';
import styles from './Accordion.module.css';

export function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button
        className={styles.trigger}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={styles.question}>{question}</span>
        <span className={styles.icon}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}>
        <div className={styles.answer}>{answer}</div>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
