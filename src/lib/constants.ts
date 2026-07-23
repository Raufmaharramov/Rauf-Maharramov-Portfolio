export const SITE_CONFIG = {
  name: 'Rauf Maharramov',
  title: 'Senior Software Engineer · AI & Full-Stack Specialist',
  description:
    'Senior Software Engineer specializing in AI-orchestrated systems, microfrontend architecture, performance optimization, and data-driven analytics at Fortune 500 companies.',
  url: 'https://raufmaharramov.com',
  email: 'rauf.maharramov@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rauf-maharramov/',
  github: 'https://github.com/raufmaharramov',
  location: 'Pittsburgh, PA',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Resume', href: '/resume' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
] as const;

export const TECH_STACK = [
  'React',
  'Next.js',
  'TypeScript',
  'AI/ML',
  'Conversational AI',
  'Grafana',
  'Elasticsearch',
  'Adobe Analytics',
  'Module Federation',
  'Vite',
  'Webpack',
  'Redux-Saga',
  'Node.js',
  'Express',
  'MongoDB',
  'Docker',
  'GCP',
  'Playwright',
  'Jest',
  'Cypress',
  'Prometheus',
  'Lighthouse API',
  'SonarQube',
  'JSON-LD',
] as const;

export const OPTIMIZATION_AREAS = [
  {
    title: 'Performance',
    description:
      'Cold-start reduction, bundle optimization, lazy loading, and runtime efficiency at scale.',
    icon: 'zap',
  },
  {
    title: 'Accessibility',
    description:
      'WCAG-compliant interfaces, screen reader support, keyboard navigation, and inclusive design patterns.',
    icon: 'accessibility',
  },
  {
    title: 'Developer Experience',
    description:
      'Shared component libraries, CI/CD pipelines, module federation architecture, and documentation.',
    icon: 'code',
  },
  {
    title: 'Reliability',
    description:
      'Comprehensive testing (unit, integration, e2e), observability, error tracking, and graceful degradation.',
    icon: 'shield',
  },
] as const;

export const COMPANIES = [
  { name: "Lowe's", period: 'June 2022 – Present' },
  { name: 'Anywhere Real Estate', period: 'June 2025 – March 2026' },
  { name: "Macy's", period: 'April 2022 – June 2022' },
  { name: 'Toyota Financial Services', period: 'November 2021 – April 2022' },
] as const;
