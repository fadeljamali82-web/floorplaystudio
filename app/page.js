import Hero from '@/components/sections/Hero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import StepProcess from '@/components/sections/StepProcess';
import SplitContent from '@/components/sections/SplitContent';
import TextBlock from '@/components/sections/TextBlock';
import { homeContent } from '@/content/home';

export const metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
};

export default function HomePage() {
  const { hero, valueProps, howItWorksPreview, splitSection, ctaSection } = homeContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        heroImage={hero.heroImage}
        ctaPrimary={hero.ctaPrimary}
        ctaSecondary={hero.ctaSecondary}
      />

      <FeatureGrid
        heading={valueProps.heading}
        subheading={valueProps.subheading}
        items={valueProps.items}
        columns={4}
        cardVariant="bordered"
        background="white"
      />

      <StepProcess
        heading={howItWorksPreview.heading}
        subheading={howItWorksPreview.subheading}
        steps={howItWorksPreview.steps}
        background="light"
      />

      <SplitContent
        heading={splitSection.heading}
        body={splitSection.body}
        image={splitSection.image}
        ctaText={splitSection.ctaText}
        ctaHref={splitSection.ctaHref}
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
