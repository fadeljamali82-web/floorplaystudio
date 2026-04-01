import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  type = 'button',
  onClick,
  className = '',
  ...props
}) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
