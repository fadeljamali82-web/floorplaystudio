/* Legal page content — edit terms, privacy, and consignment notice here */

export const legalContent = {
  meta: {
    title: 'Legal — FloorPlay™',
    description:
      'Review FloorPlay™ legal information including Terms of Use, Privacy Policy, and Consignment Model Notice.',
  },

  hero: {
    badge: 'LEGAL',
    headline: 'Legal',
    subheadline:
      'Transparency is the foundation of every FloorPlay™ partnership. Review our terms, privacy practices, and consignment policies below.',
  },

  sidebar: [
    { label: 'Terms of Use', id: 'terms' },
    { label: 'Privacy Policy', id: 'privacy' },
    { label: 'Consignment Notice', id: 'consignment' },
  ],

  sections: [
    {
      id: 'terms',
      title: 'Terms of Use',
      lastUpdated: 'Last updated: March 2026',
      content: [
        {
          subtitle: 'Acceptance of Terms',
          body: 'By accessing and using the FloorPlay™ website, you agree to be bound by these Terms of Use. If you do not agree, please do not use the site.',
        },
        {
          subtitle: 'Use of Website',
          body: 'This website is provided for informational purposes about FloorPlay™ and its consignment-based retail placement system. You may not use this website for any unlawful purpose or in violation of these terms.',
        },
        {
          subtitle: 'Intellectual Property',
          body: 'All content on this website — including text, graphics, logos, images, and software — is the property of FloorPlay™ or its content suppliers and is protected by intellectual property laws.',
        },
        {
          subtitle: 'Your Obligations',
          body: 'You agree to provide accurate information when submitting applications or contacting FloorPlay™. Any false or misleading information may result in disqualification from partnership consideration.',
        },
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: March 2026',
      content: [
        {
          subtitle: 'Information We Collect',
          body: 'We collect information you provide directly — such as your name, email, phone number, and business details — when you submit an application or contact us. We also collect standard analytics data to improve our website.',
        },
        {
          subtitle: 'How We Use Information',
          items: [
            'To review and process partnership applications',
            'To communicate with potential and existing partners',
            'To improve our website and services',
            'To send relevant updates about FloorPlay™ (with your consent)',
          ],
        },
        {
          subtitle: 'Data Protection',
          body: 'We implement reasonable security measures to protect your information. We do not sell your personal information to third parties.',
        },
        {
          subtitle: 'Contact About Privacy',
          body: 'For questions about our privacy practices, contact us at floorplay-studio@gmail.com.',
        },
      ],
    },
    {
      id: 'consignment',
      title: 'Partner / Consignment Model Notice',
      lastUpdated: 'Last updated: March 2026',
      content: [
        {
          subtitle: 'The Consignment Model',
          body: 'FloorPlay™ operates a consignment-based retail placement model. FloorPlay™ retains ownership of all inventory placed in partner locations. Partners do not purchase, own, or assume financial risk for any FloorPlay™ inventory.',
        },
        {
          subtitle: 'Inventory Ownership',
          body: 'All rugs and products displayed at partner locations remain the property of FloorPlay™. FloorPlay™ controls product selection, pricing, branding, display standards, and replenishment schedules.',
        },
        {
          subtitle: 'Partnership Terms',
          body: 'Specific partnership terms — including revenue share percentages, display requirements, and duration — are established through individual partnership agreements and are not guaranteed by this website.',
        },
      ],
    },
  ],

  legalContact: {
    heading: 'Legal Contact',
    body: 'For legal inquiries, requests, or questions about these policies, please reach out to our team.',
    email: 'floorplay-studio@gmail.com',
    address: '7701 Southern Dr Unit C14, Springfield, VA 22150',
    image: '/images/shared/legal-contact.jpg',
  },
};
