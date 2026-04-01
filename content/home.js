/* Home page content — edit text, images, and CTAs here */

export const homeContent = {
  meta: {
    title: 'FloorPlay™ — Premium Rug Placement for Retail Spaces',
    description:
      'FloorPlay™ places curated rug displays inside partner businesses on consignment. Zero inventory risk, premium presentation, shared revenue.',
  },

  hero: {
    badge: 'CONSIGNMENT-FIRST RETAIL',
    headline: 'Premium Rugs.\nZero Risk.',
    subheadline:
      'We place curated rug displays in your space. You earn from every sale — without buying a single piece of inventory.',
    heroImage: '/images/home/hero.jpg',
    ctaPrimary: { text: 'Become a Partner', href: '/apply' },
    ctaSecondary: { text: 'How It Works', href: '/how-it-works' },
  },

  valueProps: {
    heading: 'A Better Way to Sell Rugs',
    subheading: 'FloorPlay™ handles everything — you provide the space.',
    items: [
      {
        icon: '📦',
        title: 'Zero Inventory Cost',
        description:
          'We own the inventory. You never purchase, warehouse, or risk unsold stock.',
      },
      {
        icon: '🎨',
        title: 'Curated Displays',
        description:
          'Our team designs and installs premium rug presentations tailored to your space.',
      },
      {
        icon: '🔄',
        title: 'Automatic Replenishment',
        description:
          'Sold rugs are replaced. Your display stays fresh and full without any effort on your part.',
      },
      {
        icon: '💰',
        title: 'Revenue Share',
        description:
          'Earn a share of every sale. No upfront costs, no risk — just revenue from your existing floor space.',
      },
    ],
  },

  howItWorksPreview: {
    heading: 'Simple. Profitable. Hands-Off.',
    subheading: 'Three steps to transform your unused floor space into a revenue stream.',
    steps: [
      {
        number: '01',
        title: 'Apply',
        description: 'Tell us about your space. We review your location and foot traffic.',
      },
      {
        number: '02',
        title: 'We Install',
        description: 'Our team curates and installs a rug display designed for your space.',
      },
      {
        number: '03',
        title: 'You Earn',
        description: 'Customers buy directly. You earn a share of each sale automatically.',
      },
    ],
    ctaText: 'Learn More',
    ctaHref: '/how-it-works',
  },

  splitSection: {
    heading: 'Designed for Your Space',
    body: 'Every FloorPlay™ display is tailored to fit your environment. We consider your layout, customer base, and aesthetic to create a presentation that enhances your business — not disrupts it.',
    image: '/images/home/display-setup.jpg',
    ctaText: 'See Ideal Partners',
    ctaHref: '/ideal-partner',
  },

  ctaSection: {
    heading: 'Ready to Turn Floor Space Into Revenue?',
    subheading:
      'Join FloorPlay™ and start earning from premium rug sales — no inventory, no risk, no hassle.',
    ctaPrimary: { text: 'Apply Now', href: '/apply' },
    ctaSecondary: { text: 'Explore FAQ', href: '/faq' },
  },
};
