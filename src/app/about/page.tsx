import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/section';
import { Timeline } from '@/components/ui/timeline';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, MapPinIcon } from '@/components/ui/icons';
import { SITE_CONFIG, TECH_STACK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: `About ${SITE_CONFIG.name} — ${SITE_CONFIG.title}. Background, experience, and engineering philosophy.`,
};

const experience = [
  {
    period: 'June 2025 – Present',
    title: 'Senior Frontend Engineer — Strategic Contract Engagement',
    company: 'Anywhere Real Estate',
    description:
      'Contributing to the modernization and SEO optimization of multi-brand real estate platforms (BHGRE, ERA, Coldwell Banker, Century 21). Built 5+ production pages, automated Core Web Vitals dashboards with Lighthouse API, and integrated SEO regression detection into CI pipelines.',
  },
  {
    period: '2022 – Present',
    title: 'Senior Software Engineer',
    company: "Lowe's",
    description:
      'Leading microfrontend architecture for subscription, checkout, and address management products using Webpack Module Federation. Delivered +22.2% conversion lift and -60% cold-start reduction across high-traffic e-commerce flows.',
  },
  {
    period: '2022',
    title: 'Frontend Engineer — Migration Lead',
    company: "Macy's",
    description:
      'Led the migration of the global site header from Backbone/Marionette to Vue 3 + TypeScript. Achieved 100% feature parity with -35% bundle size reduction serving ~2M daily active users.',
  },
  {
    period: '2021 – 2022',
    title: 'Frontend Engineer',
    company: 'Toyota Financial Services',
    description:
      'Built accessible financial services interfaces with React, Next.js, and Redux-Saga. Achieved WCAG 2.1 AA compliance and built 15+ customer-facing tools.',
  }
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24 md:pt-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
            About
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <MapPinIcon size={16} />
            <span>{SITE_CONFIG.location}</span>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <div className="prose-custom">
            <p>
              I am a Senior Frontend / Full-Stack Engineer with extensive experience building production systems at Fortune 
              500 and multi-brand enterprise platforms. My work focuses on the intersection of
              architecture, performance, and developer experience — the kind of engineering that
              makes large teams productive and products reliable at scale.
            </p>
            <p>
              Currently I work full-time at Lowe&apos;s, where I lead frontend architecture for
              subscription, checkout, and address management products — high-traffic, revenue-critical
              flows built on microfrontend architecture using Webpack Module Federation. Concurrently,
              I contribute as a contract engineer at Anywhere Real Estate, optimizing SEO and Core Web
              Vitals across four major real estate brands. Before that, I led a legacy-to-modern
              migration at Macy&apos;s and built accessible financial services interfaces at Toyota.
            </p>
            <p>
              I care deeply about code that is not just functional, but maintainable, accessible,
              and fast. I have shipped features that measurably improved conversion rates, reduced
              page load times, and eliminated entire categories of bugs through better architecture
              and testing practices.
            </p>
            <p>
              I am currently based in Pittsburgh, PA and relocating to Turkey. I am open to
              senior/staff-level roles aligned with EU/UK timezones — remote or hybrid.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-neutral-925">
        <SectionHeader title="Experience" />
        <div className="max-w-3xl">
          <Timeline items={experience} />
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Technical Skills"
          subtitle="The tools and technologies I work with regularly."
        />
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-neutral-925">
        <SectionHeader title="Engineering Philosophy" />
        <div className="max-w-3xl space-y-6">
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Architecture should serve the team, not the resume
            </h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              I choose architectures that make the next 40 engineers productive, not ones that look
              impressive in a conference talk. The best technical decisions are often boring ones
              applied consistently.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Measure, then optimize
            </h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Performance work without data is guesswork. I instrument before I optimize, and I
              validate improvements with real user metrics — not just lighthouse scores.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Accessibility is a baseline, not a feature
            </h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Building accessible interfaces from the start costs a fraction of retrofitting them
              later. I bake accessibility into component libraries so every developer ships
              inclusive features by default.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-neutral-900 dark:text-white">
              Testing is a design tool
            </h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Good tests are not just safety nets — they document behavior, clarify interfaces, and
              catch design problems early. I invest in testing infrastructure that makes writing
              tests easier than skipping them.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Want to learn more?
          </h2>
          <p className="mt-2 text-neutral-500 dark:text-neutral-400">
            Check out my case studies or get in touch.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/work">
              View Work
              <ArrowRightIcon size={16} />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
