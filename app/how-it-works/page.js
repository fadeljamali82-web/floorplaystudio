import Hero from '@/components/sections/Hero';
import StepProcess from '@/components/sections/StepProcess';
import FeatureGrid from '@/components/sections/FeatureGrid';
import TextBlock from '@/components/sections/TextBlock';
import { howItWorksContent } from '@/content/howItWorks';

export const metadata = {
  title: howItWorksContent.meta.title,
  description: howItWorksContent.meta.description,
};

export default function HowItWorksPage() {
  const { hero, steps, details, ctaSection } = howItWorksContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        heroImage={hero.heroImage}
        variant="default"
      />

      <StepProcess
        heading={steps.heading}
        steps={steps.items.map((s) => ({
          number: s.number,
          title: s.title,
          description: s.description,
        }))}
        background="white"
      />

      <FeatureGrid
        heading={details.heading}
        items={details.items.map((item) => ({
          title: item.title,
          description: item.description,
        }))}
        columns={3}
        cardVariant="bordered"
        background="light"
      />

      <TextBlock
        heading={ctaSection.heading}
        subheading={ctaSection.subheading}
        ctaPrimary={ctaSection.ctaPrimary}
        ctaSecondary={ctaSection.ctaSecondary}
        background="dark"
      />
    </>
  );
}
