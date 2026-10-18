import { PhoneBar } from './components/layout/PhoneBar';
import { SiteFooter } from './components/layout/SiteFooter';
import { SiteHeader } from './components/layout/SiteHeader';
import { Hero } from './sections/Hero';
import { Services } from './sections/Services';
import { Updates } from './sections/Updates';

export default function App() {
  return (
    <div className="relative min-h-dvh overflow-x-clip">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Services />
        <Updates />
      </main>

      <SiteFooter />
      <PhoneBar />
    </div>
  );
}
