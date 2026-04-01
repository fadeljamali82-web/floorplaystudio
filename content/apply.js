/* Apply page content — edit form fields, copy, and images here */

export const applyContent = {
  meta: {
    title: 'Apply to Become a FloorPlay™ Location',
    description:
      'Apply to become a FloorPlay™ partner. Tell us about your business and space, and our team will review your application.',
  },

  hero: {
    badge: 'BECOME A PARTNER',
    headline: 'Apply to Become a\nFloorPlay™ Location',
    subheadline:
      'Tell us about your business and available space. Our team reviews every application to find the right fit for a successful partnership.',
    heroImage: '/images/apply/hero.jpg',
  },

  process: {
    heading: 'Application Process',
    steps: [
      { number: '01', title: 'Submit Application', description: 'Fill out the form below with your business details.' },
      { number: '02', title: 'Team Review', description: 'Our partnerships team evaluates your application.' },
      { number: '03', title: 'Space Assessment', description: 'If approved, we schedule an assessment of your space.' },
      { number: '04', title: 'Installation', description: 'We install your curated FloorPlay™ display.' },
    ],
  },

  form: {
    heading: 'Partner Application',
    fields: [
      { name: 'businessName', label: 'Business Name', type: 'text', placeholder: 'Your business name', required: true },
      { name: 'contactName', label: 'Contact Name', type: 'text', placeholder: 'Full name', required: true },
      { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '(555) 123-4567', required: true },
      { name: 'businessType', label: 'Business Type', type: 'select', placeholder: 'Select your business type', required: true, options: [
        'Furniture Store',
        'Home Design Studio',
        'Boutique Retailer',
        'Staging Company',
        'Interior Design Firm',
        'Other',
      ]},
      { name: 'location', label: 'Business Location', type: 'text', placeholder: 'City, State', required: true },
      { name: 'squareFootage', label: 'Available Floor Space (sq ft)', type: 'text', placeholder: 'Approximate square footage', required: false },
      { name: 'monthlyTraffic', label: 'Estimated Monthly Foot Traffic', type: 'select', placeholder: 'Select range', required: false, options: [
        'Under 500',
        '500 - 1,000',
        '1,000 - 5,000',
        '5,000 - 10,000',
        '10,000+',
      ]},
      { name: 'message', label: 'Tell Us About Your Space', type: 'textarea', placeholder: 'Describe your space, customer base, and why you\'re interested in FloorPlay™...', required: false },
    ],
    submitText: 'Submit Application',
    disclaimer: 'By submitting this form, you agree to be contacted by FloorPlay™ regarding your application. We review all applications and respond within 3–5 business days.',
  },

  sidebarImage: '/images/apply/sidebar.jpg',
  bottomImage: '/images/apply/location.jpg',
};
