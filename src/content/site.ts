/**
 * Company details and navigation.
 * Every page, the footer, structured data and the sitemap read from this file.
 *
 * The business registration number is deliberately NOT stored here and must not
 * appear anywhere on the website.
 */

export const site = {
  name: 'Nidaam Solutions',
  shortName: 'Nidaam',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nidaam.co.ke').replace(/\/$/, ''),
  locale: 'en_KE',
  foundingDate: '2026-10-25',
  title: 'Nidaam Solutions | Software Development Company in Nairobi, Kenya',
  description:
    'Nidaam Solutions is a software development company in Eastleigh, Nairobi, Kenya. We design, build and manage custom software, school and business management systems, websites, mobile apps and AI-powered automation for organisations across Kenya.',
  /**
   * One-sentence identity statement. Used in structured data and the footer so search
   * engines can tell Nidaam Solutions (Kenya) apart from other businesses called "Nidaam".
   */
  identity:
    'Nidaam Solutions is a Kenyan software and digital services company based in Eastleigh, Nairobi, building custom software, business and school management systems, websites and mobile apps.',
  alternateNames: ['Nidaam', 'Nidaam Solutions Kenya', 'Nidaam Solutions Nairobi', 'nidaam.co.ke'],
  /** From the capability statement. Used in the footer and structured data. */
  slogan: 'Building reliable software. Supporting long-term growth.',
  pricesIn: 'US dollars or Kenya shillings',
  payment: 'Bank transfer or M-Pesa',

  contact: {
    email: 'info@nidaam.co.ke',
    /** International format. Also builds the WhatsApp and tel: links. */
    phone: '+254722261776',
    phoneDisplay: '+254 722 261 776',
    street: 'Hodo Souk, Captain Mungai Street',
    locality: 'Eastleigh',
    city: 'Nairobi',
    country: 'Kenya',
    countryCode: 'KE',
    hours: 'Monday to Friday, 8:00 to 17:00 EAT',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hodo+Souk%2C+Captain+Mungai+Street%2C+Eastleigh%2C+Nairobi',
  },

  /** Leave a link as '' to hide it everywhere. */
  social: {
    linkedin: '',
    instagram: 'https://www.instagram.com/nidaamsoftware',
    tiktok: 'https://www.tiktok.com/@nidaamsoftware',
  },

  /**
   * Case studies and testimonials in /src/content are illustrative examples written
   * for launch. While this is true, they carry a small "Illustrative" label on the
   * site. Replace them with real client work, then set this to false.
   */
  labelSampleContent: true,
} as const;

export const whatsappUrl = `https://wa.me/${site.contact.phone.replace(/\D/g, '')}`;
export const telUrl = `tel:${site.contact.phone}`;
export const mailUrl = `mailto:${site.contact.email}`;
export const fullAddress = `${site.contact.street}, ${site.contact.locality}, ${site.contact.city}, ${site.contact.country}`;

export type NavItem = { label: string; href: string };

/** Header links. Kept short on purpose; Careers and Contact live in the footer and the header button. */
export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
];

/** Extra links shown only in the phone menu. */
export const secondaryNav: NavItem[] = [
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];
