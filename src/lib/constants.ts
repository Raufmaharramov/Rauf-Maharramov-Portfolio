export const SITE_CONFIG = {
  name: 'Rauf Maharramov',
  title: 'Senior Frontend / Full-Stack Engineer',
  description:
    'Senior Frontend / Full-Stack Engineer specializing in large-scale React applications, microfrontends, performance optimization, and accessible user experiences.',
  url: 'https://raufmaharramov.com',
  email: 'rauf.maharramov@gmail.com',
  linkedin: 'https://www.linkedin.com/in/rauf-maharramov/',
  github: 'https://github.com/raufmaharramov',
  location: 'Pittsburgh, PA → Relocating to Turkey',
  timezone: 'EU/UK timezone-friendly',
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
  'Elasticsearch',
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
  { name: 'Anywhere Real Estate', period: '2025–Present · Contract' },
  { name: "Lowe's", period: '2022–Present · Full-time' },
  { name: "Macy's", period: '2022' },
  { name: 'Toyota Financial Services', period: '2021–2022' },
] as const;
