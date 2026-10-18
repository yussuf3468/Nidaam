/**
 * Central brand & content configuration.
 *
 * Every component reads from this file, so links, contact details, the logo
 * and launch status can be changed here without touching any markup.
 * (SEO tags in index.html must be updated separately — see README.)
 */

export type LaunchStageStatus = 'complete' | 'active' | 'pending';

export interface LaunchStage {
  label: string;
  status: LaunchStageStatus;
}

export const site = {
  name: 'Nidaam Software Company',
  shortName: 'Nidaam',
  abbreviation: 'NSC',
  description:
    'Nidaam Software Company is creating powerful digital solutions that help businesses operate, grow, and innovate. Our platform and services are coming soon.',
  copyrightYear: 2026,

  contact: {
    email: 'info@nidaam.co.ke',
    /** International format, digits only after the "+". Also drives the WhatsApp link. */
    phone: '+254722261776',
    phoneDisplay: '+254 722 261 776',
    address: 'Hodo Souk, 2nd Floor, Captain Murithi Rd',
    country: 'Kenya',
  },

  /** Leave a link as '' to hide it from the footer. */
  social: {
    website: 'https://nidaam.co.ke',
    linkedin: '',
    tiktok: 'https://www.tiktok.com/@nidaamsoftware',
    instagram: 'https://www.instagram.com/nidaamsoftware',
  },

  launch: {
    /** Overall build progress shown in the hero, 0–100. */
    progress: 72,
    stages: [
      { label: 'Strategy', status: 'complete' },
      { label: 'Design', status: 'complete' },
      { label: 'Engineering', status: 'active' },
      { label: 'Launch', status: 'pending' },
    ] as LaunchStage[],
  },

  newsletter: {
    /**
     * Endpoint that receives a JSON POST `{ "email": "..." }`
     * (Formspree, ConvertKit, Mailchimp proxy, your own API, ...).
     * While empty, sign-ups are simulated so the UI can be demoed safely.
     */
    endpoint: '',
  },
};

export const whatsappUrl = `https://wa.me/${site.contact.phone.replace(/\D/g, '')}`;
