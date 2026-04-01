'use client';

import { useState } from 'react';
import styles from './PartnerForm.module.css';

export default function PartnerForm({ fields, submitText, disclaimer }) {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Ready for backend integration
    // Replace this block with your API call:
    // const res = await fetch('/api/apply', { method: 'POST', body: JSON.stringify(formData) });
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.successMessage}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Application Submitted</h3>
        <p className={styles.successBody}>
          Thank you for your interest in FloorPlay™. Our partnerships team will review your application and respond within 3–5 business days.
        </p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.fieldGrid}>
        {fields.map((field) => (
          <div
            key={field.name}
            className={`${styles.fieldWrapper} ${field.type === 'textarea' ? styles.fullWidth : ''}`}
          >
            <label htmlFor={field.name} className={styles.label}>
              {field.label}
              {field.required && <span className={styles.required}>*</span>}
            </label>

            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
                className={styles.select}
                defaultValue=""
              >
                <option value="" disabled>{field.placeholder}</option>
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                className={styles.textarea}
                rows={4}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                onChange={handleChange}
                className={styles.input}
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Submitting...' : submitText}
      </button>

      {disclaimer && (
        <p className={styles.disclaimer}>{disclaimer}</p>
      )}

      {status === 'error' && (
        <p className={styles.errorMessage}>
          Something went wrong. Please try again or contact us directly at floorplay-studio@gmail.com.
        </p>
      )}
    </form>
  );
}
