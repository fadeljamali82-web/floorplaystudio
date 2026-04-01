import Hero from '@/components/sections/Hero';
import SplitContent from '@/components/sections/SplitContent';
import FeatureGrid from '@/components/sections/FeatureGrid';
import TextBlock from '@/components/sections/TextBlock';
import { earningsContent } from '@/content/earnings';

export const metadata = {
  title: earningsContent.meta.title,
  description: earningsContent.meta.description,
};

export default function EarningsPage() {
  const { hero, model, benefits, splitSection, ctaSection } = earningsContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        heroImage={hero.heroImage}
        variant="default"
      />

      <SplitContent
        heading={model.heading}
        body={model.body}
        image={model.image}
        background="white"
      />

      <FeatureGrid
        heading={benefits.heading}
        items={benefits.items}
        columns={4}
        cardVariant="bordered"
        background="light"
      />

      <SplitContent
        heading={splitSection.heading}
        body={splitSection.body}
        image={splitSection.image}
        reverse
        background="white"
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
