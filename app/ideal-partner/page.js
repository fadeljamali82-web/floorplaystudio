import Hero from '@/components/sections/Hero';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SplitContent from '@/components/sections/SplitContent';
import TextBlock from '@/components/sections/TextBlock';
import { idealPartnerContent } from '@/content/idealPartner';

export const metadata = {
  title: idealPartnerContent.meta.title,
  description: idealPartnerContent.meta.description,
};

export default function IdealPartnerPage() {
  const { hero, partnerTypes, qualifications, splitSection, ctaSection } = idealPartnerContent;

  return (
    <>
      <Hero
        badge={hero.badge}
        headline={hero.headline}
        subheadline={hero.subheadline}
        heroImage={hero.heroImage}
        variant="default"
      />

      <FeatureGrid
        heading={partnerTypes.heading}
        subheading={partnerTypes.subheading}
        items={partnerTypes.categories}
        columns={4}
        cardVariant="dark"
        background="white"
      />

      <FeatureGrid
        heading={qualifications.heading}
        items={qualifications.items}
        columns={2}
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
