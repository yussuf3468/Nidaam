# Nidaam Software Company — launch page

The "coming soon" site for **Nidaam Software Company (NSC)**. Built with React 19, TypeScript, Vite and Tailwind CSS v4. Icons come from Lucide. There are no other runtime dependencies.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
```

`dist/` is a static site. Deploy it to any static host (Vercel, Netlify, Cloudflare Pages, cPanel...).

## Project structure

```
index.html                     SEO tags, Open Graph, JSON-LD, fonts, no-flash theme script
public/
  logo.svg                     Original logo (black square, NSC + "Nidaam software company")
  logo-mark.svg                NSC badge used in the header and footer
  logo-lockup-white.svg        White NSC lockup used on the launch ticket
  favicon.svg                  Browser tab icon (the "N")
  apple-touch-icon.png         iOS home-screen icon, 180×180
  og-image.png                 Link preview image, 1200×630
src/
  config/site.ts               ← company details, links, launch progress, newsletter endpoint
  content/services.ts          ← the four service cards
  index.css                    Design tokens (colours, radius, fonts), light/dark themes
  sections/                    Hero · Services · Updates (sign-up)
  components/
    LaunchTicket.tsx           Build-progress "ticket" in the hero
    ServiceCard.tsx            Service card (opens an enquiry email)
    NewsletterForm.tsx         Email sign-up with validation + toast
    layout/                    SiteHeader · SiteFooter · PhoneBar (phone bottom bar)
    brand/                     LogoMark · social icons (LinkedIn, TikTok, Instagram, WhatsApp)
    ui/                        Button · Badge (status pill, tone badge) · Toast · Container · Reveal
  hooks/                       useTheme · useActiveSection · useInView · usePrefersReducedMotion
```

## Common changes

### Links, email, phone, address

Edit `src/config/site.ts`:

```ts
contact: {
  email: 'info@nidaam.co.ke',
  phone: '+254722261776',            // also builds the WhatsApp link (wa.me)
  phoneDisplay: '+254 722 261 776',
  address: 'Hodo Souk, 2nd Floor, Captain Murithi Rd',
  country: 'Kenya',
},
social: {
  website: 'https://nidaam.co.ke',
  linkedin: '',                       // empty = hidden from the footer
  tiktok: 'https://www.tiktok.com/@nidaamsoftware',
  instagram: 'https://www.instagram.com/nidaamsoftware',
},
```

Then update the copies in `index.html`: the canonical URL, `og:url`, `og:image`, the JSON-LD block (`url`, `email`, `telephone`, `address`, `sameAs`) and the `<noscript>` email. Search engines and link previews read these without running JavaScript, so they can't be generated at runtime.

**To add LinkedIn:** put the company page URL in `social.linkedin` and add it to `sameAs` in `index.html`.

### Logo

Replace the files in `public/` and keep the same names:

| File | Used for | Notes |
|---|---|---|
| `logo-mark.svg` | Header and footer badge | 56×32 ratio, rounded black badge |
| `logo-lockup-white.svg` | Launch ticket (on black) | White artwork, transparent background |
| `favicon.svg` | Browser tab | Square |
| `apple-touch-icon.png` | iOS home screen, JSON-LD logo | 180×180 PNG |
| `og-image.png` | WhatsApp, LinkedIn and X link previews | 1200×630 PNG |

### Launch progress

In `src/config/site.ts`, set `launch.progress` (0–100) and each stage's `status`: `'complete'`, `'active'` or `'pending'`. The caption ("Engineering in progress · 2 of 4 stages done") is written for you.

### Email sign-up

Sign-ups are **simulated** until you set `newsletter.endpoint` in `src/config/site.ts`. The form sends `POST { "email": "..." }` as JSON to that URL. Formspree, Getform, a ConvertKit/Mailchimp proxy or your own API all work. A non-2xx response shows an error message.

### Services

Edit `src/content/services.ts`. Each card has a title, a one-line description, examples (shown under the dashed line), a Lucide icon and a tile colour. Clicking a card opens an email to `contact.email` with the subject "<Service> enquiry".

## Design notes

- **Calm and nearly monochrome.**
  - Warm off-white background with borderless white cards.
  - Near-black primary buttons (white in dark mode).
  - Colour only carries meaning: status swatches (amber = in progress, green = done), the green progress figure, and the service category tiles.
- **Fonts:** Manrope for UI and headings, Outfit for paragraphs (Google Fonts).
- **Theme:** light by default. The moon/sun button switches to dark and remembers the choice. The sign-up panel always uses the opposite theme.
- **Phones:**
  - A floating glass bottom bar whose active pill follows the section you're reading.
  - A round WhatsApp button beside it.
  - Touch targets are at least 44 px.
- **Motion:** subtle fades and slides using `cubic-bezier(0.22, 1, 0.36, 1)`. All of it is turned off when the visitor's system asks for reduced motion.
