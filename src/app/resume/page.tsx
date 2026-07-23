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
    title: 'Senior Software Engineer',
    company: "Lowe's",
    location: 'Remote',
    period: 'June 2022 – Present',
    bullets: [
      'Co-engineered next-gen AI Purchase Agent (Mylow) transitioning from deterministic checkout to AI-orchestrated conversational commerce with typed tools and context-aware state management',
      'Engineered Grafana operational dashboards and queried Elasticsearch production logs to analyze purchase failure metrics, identify cart abandonment causes, and reduce unnecessary live-agent handoffs',
      'Integrated installation services directly within AI Purchase Agent, enabling customers to configure complex service options without leaving the conversational experience',
      'Instrumented Adobe Analytics across conversational purchasing flows to capture granular user interactions, intent shifts, feature adoption, and funnel progression',
      'Architected high-impact microfrontends using Module Federation (Webpack) across subscription (HomeCare+), address management (Fabric MFE), and checkout surfaces serving millions of daily users',
      'Delivered +22.2% conversion rate lift and -76.6% reduction in cart abandonment on subscription enrollment flows through microfrontend architecture and streamlined UX',
      'Achieved ~60% load time reduction on critical checkout surfaces via bundle minimization, dynamic imports, and on-demand third-party SDK loading',
      'Built and deployed unified Address MFE with BFF layer, replacing duplicated address UIs across checkout and customer account surfaces platform-wide',
      'Maintained 99.9% uptime during incremental monolith decomposition using Strangler-Fig pattern, backed by GCP observability (Prometheus, GoAlert, Pharos)',
      'Mentored 4+ engineers adopting microfrontend architectures and established comprehensive automated testing strategies (Jest, RTL, Playwright) achieving >85% test coverage',
    ],
  },
  {
    title: 'Senior Frontend Engineer – SEO & Performance (Contract)',
    company: 'Anywhere Real Estate',
    location: 'Remote',
    period: 'June 2025 – March 2026',
    bullets: [
      'Modernized four enterprise real estate platforms (Better Homes and Gardens Real Estate, ERA, Coldwell Banker, Century 21) using Next.js, React, and TypeScript',
      'Built automated Lighthouse API performance monitoring dashboard integrated into CI/CD pipelines to catch SEO and performance regressions prior to production release',
      'Implemented structured data (JSON-LD), metadata standards, and content sub-navigation systems to improve search engine indexing and schema compliance across brand platforms',
      'Refactored legacy frontend modules and resolved SonarQube technical debt to enforce strict architectural quality standards',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: "Macy's",
    location: 'Hybrid',
    period: 'April 2022 – June 2022',
    bullets: [
      'Led migration of global site header (~2M daily active users) from legacy Backbone/Marionette to Vue 3 and TypeScript, achieving 100% feature parity while cutting JavaScript bundle size by 35%',
      'Built accessible mega-navigation menu compliant with WCAG AA standards and authored incremental migration bridge pattern adopted by 3 cross-functional engineering teams',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Toyota Financial Services',
    location: 'Remote',
    period: 'November 2021 – April 2022',
    bullets: [
      'Built 15+ customer-facing financial tools (payment calculators, account portals) using React, Next.js, and Redux-Saga; met <2s page load targets (95th percentile) via Server-Side Rendering (SSR)',
      'Created custom accessibility hooks (useAriaLive, useFocusTrap) and enforced WCAG 2.1 AA standards across components, reducing accessibility bug reports by 90%',
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
              Data-driven Senior Software Engineer with 6+ years of experience delivering enterprise-scale web platforms for Fortune 500 organizations including Lowe's, Anywhere Real Estate, Macy's, and Toyota Financial Services. Specialized in React, TypeScript, Node.js, microfrontend architecture, performance engineering, and AI-powered commerce experiences serving millions of customers.
            </p>
            <p>
              Proven track record of driving high-impact revenue metrics (+22.2% conversion rate lift, -76.6% cart abandonment) and engineering AI observability systems (Elasticsearch, Grafana, Adobe Analytics) to analyze customer behavior, mitigate live-agent handoffs, and optimize conversational checkout flows.
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
