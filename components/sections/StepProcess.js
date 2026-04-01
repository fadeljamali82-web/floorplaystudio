import SectionWrapper from '@/components/ui/SectionWrapper';
import styles from './StepProcess.module.css';

export default function StepProcess({
  heading,
  subheading,
  steps,
  background = 'light',
}) {
  return (
    <SectionWrapper background={background}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        {subheading && <p className={styles.subheading}>{subheading}</p>}
      </div>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.stepNumber}>{step.number}</div>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
