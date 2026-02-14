import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DownloadIcon } from '@/components/ui/icons';
import { SITE_CONFIG, TECH_STACK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume for ${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
};

const experience = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Anywhere Real Estate (Contract)',
    location: 'Remote',
    period: 'June 2025 – Present',
    bullets: [
      'Contributing to modernization and SEO optimization of four major real estate brand platforms (BHGRE, ERA, Coldwell Banker, Century 21) using React, Next.js, and TypeScript',
      'Built 5+ production-grade pages across four brands using scalable component architecture',
      'Designed reusable sub-navigation and content templating systems adopted across brand sites',
      'Implemented structured data (JSON-LD), metadata standards, and header tagging systems to improve indexing and schema compliance',
      'Architected and built automated Core Web Vitals dashboard from scratch using Google Lighthouse API',
      'Integrated parallelized SEO performance audits into CI pipelines with multi-run averaging for accuracy',
      'Automated SEO regression detection per merge request to prevent performance degradation before production',
      'Improved code quality metrics through SonarQube remediation and frontend refactoring initiatives',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: "Lowe's (Full-time)",
    location: 'Charlotte, NC (Remote)',
    period: '2022 – Present',
    bullets: [
      'Lead microfrontend architecture for subscription (HomeCare+), checkout, and address management products using Webpack Module Federation, serving millions of daily users on lowes.com',
      'Drove +22.2% conversion rate lift and -76.6% cart abandonment reduction through architecture and UX improvements on the subscription enrollment funnel',
      'Built standalone Address MFE (Fabric) with BFF layer, replacing duplicated address UIs platform-wide across checkout and account surfaces',
      'Achieved -60% cold-start time reduction on checkout pages through bundle optimization, code splitting, and on-demand SDK loading',
      'Onboarded 4+ engineers to new microfrontend architecture with shared dev tooling, contract testing, and comprehensive documentation',
      'Maintained 99.9% checkout uptime during incremental migration from monolith using strangler-fig pattern',
      'Established testing strategy (Jest, RTL, Playwright) achieving >85% coverage on critical revenue paths',
    ],
  },
  {
    title: 'Frontend Engineer — Migration Lead',
    company: "Macy's",
    location: 'New York, NY (Remote)',
    period: '2022',
    bullets: [
      'Led migration of global site header from Backbone/Marionette to Vue 3 + TypeScript, serving ~2M daily active users',
      'Achieved 100% feature parity with -35% JavaScript bundle size reduction',
      'Built accessible mega navigation menu with ARIA roles, keyboard navigation, and screen reader support, resolving 12 known accessibility issues',
      'Designed bridge layer for incremental migration, enabling new Vue header to coexist with legacy Backbone modules',
      'Created migration playbook adopted by 3 other teams for their component modernizations',
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Toyota Financial Services',
    location: 'Plano, TX (Remote)',
    period: '2021 – 2022',
    bullets: [
      'Built 15+ customer-facing financial services tools (payment schedules, payment calculators, account dashboards) with React, Next.js, and Redux-Saga',
      'Achieved full WCAG 2.1 AA accessibility compliance across all customer-facing interfaces',
      'Created shared component library with accessibility baked in, reducing accessibility-related bug reports by 90%',
      'Implemented SSR with Next.js for customer portal, meeting <2s page load target on 95th percentile',
      'Built custom hooks (useAriaLive, useFocusTrap, useReducedMotion) that scaled accessibility knowledge across the team',
    ],
  }
];

export default function ResumePage() {
  return (
    <>
      <Section className="pt-24 pb-12 md:pt-32">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
              Resume
            </h1>
            <p className="mt-2 text-neutral-500 dark:text-neutral-400">
              {SITE_CONFIG.title} &middot; {SITE_CONFIG.location}
            </p>
          </div>
          <Button href="/Rauf_Maharramov_Senior_Software_Engineer.pdf" external>
            <DownloadIcon size={16} />
            Download PDF
          </Button>
        </div>
      </Section>

      <Section className="pt-0 pb-12">
        <div className="max-w-3xl">
          <div className="prose-custom">
            <p>
              Senior Frontend / Full-Stack Engineer with extensive experience building production 
              systems at Fortune 500 and multi-brand enterprise platforms. Specializing in microfrontend architecture
              (Webpack Module Federation), performance optimization, SEO engineering, accessibility,
              and developer experience at scale. Track record of measurable business impact: +22.2% conversion
              lifts, -60% cold-start reductions, automated CWV pipelines, and architecture migrations
              serving millions of users.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-neutral-50 pt-12 dark:bg-neutral-925">
        <SectionHeader title="Experience" />
        <div className="max-w-3xl space-y-12">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {job.title}
                </h3>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {job.period}
                </span>
              </div>
              <div className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-300">
                {job.company} &middot; {job.location}
              </div>
              <ul className="mt-3 space-y-2">
                {job.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Technical Skills" />
        <div className="flex flex-wrap gap-2">
          {TECH_STACK.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Section>

      <Section className="bg-neutral-50 dark:bg-neutral-925">
  <SectionHeader title="Education" />
  <div className="max-w-3xl">
    <div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
        Associate Degree in Business Administration
      </h3>
      <p   className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        ASA College (Manhattan, NY)
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
        B.Sc. in Accounting & Finance
      </h3>
      <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
        Azerbaijan State University of Economics (Baku, AZ)
      </p>
    </div>
  </div>
</Section>
    </>
  );
}
