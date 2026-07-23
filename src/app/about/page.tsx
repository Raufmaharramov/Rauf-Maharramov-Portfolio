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
    period: 'June 2022 – Present',
    title: 'Senior Software Engineer',
    company: "Lowe's",
    description:
      'Co-engineered next-gen AI Purchase Agent (Mylow), built Grafana/Elasticsearch observability dashboards, architected microfrontends for subscription/checkout/address products, and delivered +22.2% conversion lift with -76.6% cart abandonment reduction.',
  },
  {
    period: 'June 2025 – March 2026',
    title: 'Senior Frontend Engineer – SEO & Performance (Contract)',
    company: 'Anywhere Real Estate',
    description:
      'Modernized four enterprise real estate platforms (BHGRE, ERA, Coldwell Banker, Century 21) using Next.js, React, and TypeScript. Built automated Lighthouse API performance monitoring integrated into CI/CD pipelines.',
  },
  {
    period: 'April 2022 – June 2022',
    title: 'Senior Software Engineer',
    company: "Macy's",
    description:
      'Led migration of global site header from Backbone/Marionette to Vue 3 + TypeScript, achieving 100% feature parity with -35% bundle size reduction serving ~2M daily active users.',
  },
  {
    period: 'November 2021 – April 2022',
    title: 'Software Engineer',
    company: 'Toyota Financial Services',
    description:
      'Built 15+ customer-facing financial tools with React, Next.js, and Redux-Saga; achieved WCAG 2.1 AA compliance and met <2s page load targets via Server-Side Rendering.',
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
              I am a Senior Software Engineer with 6+ years of experience delivering enterprise-scale web platforms for Fortune 500 organizations including Lowe's, Anywhere Real Estate, Macy's, and Toyota Financial Services. Specialized in React, TypeScript, Node.js, microfrontend architecture, performance engineering, and AI-powered commerce experiences serving millions of customers.
            </p>
            <p>
              Currently I work full-time at Lowe's, where I co-engineered the next-generation AI Purchase Agent (Mylow) and built comprehensive observability systems using Grafana, Elasticsearch, and Adobe Analytics. I also architected high-impact microfrontends using Webpack Module Federation, delivering +22.2% conversion lift and -76.6% cart abandonment reduction. Concurrently, I contributed as a contract engineer at Anywhere Real Estate, optimizing SEO and Core Web Vitals across four major real estate brands.
            </p>
            <p>
              I care deeply about code that is not just functional, but maintainable, accessible, and fast. I have shipped features that measurably improved conversion rates, reduced page load times, and eliminated entire categories of bugs through better architecture and testing practices.
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
