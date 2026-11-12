import { Reveal } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/sections/section';
import { JsonLd } from '@/components/seo/json-ld';
import { site } from '@/content/site';
import { absoluteUrl } from '@/lib/seo';

const film = {
  name: 'Nidaam Solutions: from scattered tools to one system',
  description:
    'A short film from Nidaam Solutions on the bottlenecks growing businesses run into, how we work, and what we have built for clients in retail, vehicle rental, education, logistics and the non-profit sector.',
  src: '/videos/nidaam-story.mp4',
  poster: '/videos/nidaam-story-poster.jpg',
  captions: '/videos/nidaam-story.en.vtt',
  uploadDate: '2026-11-12',
  /** 1 minute 41 seconds. */
  duration: 'PT1M41S',
};

/** Home page film: the problems we see, who we are and the work we have delivered. */
export function StoryFilm() {
  return (
    <Section id="film">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'VideoObject',
          name: film.name,
          description: film.description,
          thumbnailUrl: absoluteUrl(film.poster),
          contentUrl: absoluteUrl(film.src),
          uploadDate: film.uploadDate,
          duration: film.duration,
          inLanguage: 'en',
          publisher: { '@id': `${site.url}/#organization` },
        }}
      />
      <div className="container-site">
        <SectionHeading
          eyebrow="Watch"
          title="From scattered tools to one system, in under two minutes."
          description="The bottlenecks we see in growing businesses, how we work with you, and what we have built for clients."
        />
        <Reveal className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:mt-12">
          {/* preload="none": nothing is downloaded until the visitor presses play. */}
          <video
            className="block aspect-video w-full bg-card"
            width={1920}
            height={1080}
            poster={film.poster}
            controls
            playsInline
            preload="none"
            aria-label={film.name}
          >
            <source src={film.src} type="video/mp4" />
            <track src={film.captions} kind="captions" srcLang="en" label="English" />
            Your browser does not support video playback.
          </video>
        </Reveal>
      </div>
    </Section>
  );
}
