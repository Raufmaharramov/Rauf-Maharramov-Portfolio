import { CaseStudy } from '@/lib/types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'anywhere-real-estate-seo-cwv',
    title: 'Multi-Brand SEO & Core Web Vitals Platform',
    company: 'Anywhere Real Estate',
    period: '2025–Present',
    summary:
      'Contributed to the modernization and SEO optimization of multi-brand real estate platforms (Better Homes & Gardens, ERA, Coldwell Banker, Century 21) built with React, Next.js, and TypeScript.',
    role: 'Senior Frontend Engineer (Contract)',
    tags: ['SEO', 'performance', 'Next.js', 'CI/CD', 'Lighthouse', 'architecture'],
    featured: true,
    category: 'flagship',
    image: 'cwv-dashboard',
    liveUrl: '/seo-cwv-script.html',
    liveUrlNote: 'Live demo of the Core Web Vitals dashboard built from scratch.',
    metrics: [
      { value: '15+', label: 'Production pages built' },
      { value: '4 Brands', label: 'BHG, ERA, C21, CBR' },
      { value: 'CI-Integrated', label: 'Automated SEO audits' },
    ],
    detailedDescription: [
      'Anywhere Real Estate operates four major residential real estate brands — Better Homes & Gardens Real Estate, ERA, Coldwell Banker, and Century 21 — each with its own web platform built on a shared React + Next.js + TypeScript stack.',
      'I contributed to the modernization effort across all four brands, focusing on SEO engineering, structured data compliance, performance automation, and scalable component architecture.',
      'A key initiative was architecting and building an automated Core Web Vitals dashboard from scratch using the Google Lighthouse API. This system executes parallelized multi-brand SEO audits in CI pipelines, averages results across multiple runs for accuracy, and provides merge-request-level regression visibility — preventing performance degradation before production.',
    ],
    context:
      'Maintaining SEO consistency and Core Web Vitals compliance across four distinct real estate brand platforms was a major challenge. Each brand had its own set of pages (agent listings, property details, office pages, home pages) with varying performance characteristics. Without automated monitoring, CWV regressions could ship undetected, impacting search rankings and user experience across millions of property listings.',
    constraints: [
      'Four brand platforms with independent codebases sharing a common architecture',
      'SEO is revenue-critical — search ranking directly impacts lead generation',
      'Structured data (JSON-LD) must comply with Google\'s real estate schema requirements',
      'Lighthouse audits must run in CI without slowing down the development pipeline',
      'Multi-run averaging needed for accurate, non-flaky CWV measurements',
      'SonarQube code quality gates must pass alongside SEO checks',
    ],
    ownership:
      'I built 15+ production-grade pages across all four brands using scalable component architecture. I designed reusable sub-navigation and content templating systems adopted across brand sites. I architected the entire Core Web Vitals automation pipeline — from Lighthouse API integration to parallelized brand execution, multi-run averaging logic, and MR-level regression detection.',
    technicalDecisions: [
      {
        title: 'Automated CWV dashboard with Lighthouse API',
        description:
          'Built a comprehensive Core Web Vitals reporting dashboard from scratch that visualizes LCP, CLS, TBT/INP, and TTFB metrics across all four brands. The dashboard provides donut charts for pass rates, per-brand comparison bars, and detailed per-page metric tables with threshold indicators.',
      },
      {
        title: 'Parallelized multi-brand CI audits',
        description:
          'Integrated Lighthouse-based SEO performance audits into CI pipelines with parallelized execution across all four brands. Multi-run averaging logic produces stable, accurate metrics and eliminates flaky single-run variance.',
      },
      {
        title: 'MR-level SEO regression detection',
        description:
          'Automated SEO regression detection per merge request, comparing CWV scores against baseline thresholds. This prevents performance degradation from reaching production and gives developers immediate visibility into the SEO impact of their changes.',
      },
      {
        title: 'Structured data and JSON-LD implementation',
        description:
          'Implemented structured data schemas (JSON-LD) for real estate listings, agent profiles, and office pages. Established metadata standards and header tagging systems to improve indexing and schema compliance across all brands.',
      },
    ],
    testingApproach:
      'Built automated Lighthouse CI runs with multi-run averaging for stable CWV measurements. SonarQube integration enforces code quality gates. Structured data is validated against Google\'s Rich Results Test specifications. Visual regression tests ensure consistent rendering across all four brand themes.',
    outcomes: [
      'Built 15+ production pages across four real estate brands',
      'Designed reusable sub-navigation and content templating systems adopted across brands',
      'Architected automated CWV dashboard providing real-time SEO health visibility',
      'Integrated parallelized SEO audits into CI with multi-brand execution',
      'Automated MR-level regression detection preventing CWV degradation before production',
      'Improved code quality metrics through SonarQube remediation and frontend refactoring',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Lighthouse API',
      'JSON-LD',
      'CI/CD',
      'SonarQube',
      'Node.js',
    ],
  },
  {
    slug: 'lowes-homecareplus-subscription',
    title: 'HomeCarePlus Subscription Platform',
    company: "Lowe's",
    period: '2023–Present',
    summary:
      'Enterprise-grade subscription platform embedded inside Lowe\'s e-commerce ecosystem, supporting recurring revenue and high-traffic checkout integrations.',
    role: 'Senior Software Engineer',
    tags: ['microfrontends', 'performance', 'architecture', 'testing', 'e-commerce'],
    featured: true,
    category: 'flagship',
    image: 'subscription',
    liveUrl: 'https://www.lowes.com/loyalty/subscription',
    metrics: [
      { value: '+22.2%', label: 'Cart-to-order conversion lift' },
      { value: '-76.6%', label: 'Abandonment reduction' },
      { value: '3', label: 'MFE remotes owned' },
    ],
    detailedDescription: [
      'HomeCarePlus is a $99/year subscription product integrated into the MyLowe\'s Rewards program. It enables homeowners to manage recurring maintenance services directly through their Lowe\'s account.',
      'I led frontend architecture and microfrontend container development that powered subscription purchase and lifecycle management, service-area eligibility validation, appointment creation workflows, cart/checkout/order confirmation integration, and cross-MFE navigation boundaries.',
      'I designed reusable microfrontend components adopted across multiple teams, exposed shared API integration points, and ensured architectural isolation across distributed domains.',
      'This system operated inside Lowe\'s high-scale commerce infrastructure and supported production traffic across pilot store rollouts.',
    ],
    context:
      'HomeCarePlus is a subscription-based home protection plan integrated into the MyLowe\'s Rewards program. The product required a seamless enrollment and management experience embedded within lowes.com — a massive e-commerce platform serving millions of users daily. The challenge was building a complex subscription flow that felt native to the site while being independently deployable as a microfrontend.',
    constraints: [
      'Embedded within a large-scale e-commerce monolith transitioning to microfrontends',
      'Webpack Module Federation architecture with multiple independent remotes',
      'Server-side rendering required for SEO and performance on product pages',
      'Strict accessibility requirements (WCAG 2.1 AA) for a Fortune 500 retailer',
      'Cross-team coordination across 4+ teams (cart, checkout, identity, payments)',
      'Feature flags and A/B testing infrastructure for incremental rollout',
    ],
    ownership:
      'I owned the frontend architecture for three microfrontend remotes powering the HomeCarePlus subscription funnel. This included the plan selection module, the enrollment flow, and the subscription management dashboard. I made key decisions on state management, API integration patterns, and the component architecture that other teams adopted.',
    technicalDecisions: [
      {
        title: 'Microfrontend architecture with Module Federation',
        description:
          'Designed the remote/host contract for three independently deployable subscription modules. Established shared dependency versioning, fallback strategies for remote failures, and a typed API contract between host and remotes that prevented runtime integration bugs.',
      },
      {
        title: 'Optimistic UI with saga-based side effects',
        description:
          'Used Redux-Saga to orchestrate complex multi-step enrollment flows (address validation → eligibility check → payment tokenization → enrollment). Implemented optimistic updates with rollback patterns to keep the UI responsive during slow backend calls.',
      },
      {
        title: 'Analytics-driven iteration',
        description:
          'Instrumented the entire funnel with granular event tracking. Identified a critical drop-off point in the plan comparison step, then redesigned the comparison UX and reduced cognitive load — directly contributing to the 22.2% conversion improvement.',
      },
      {
        title: 'Server-side rendering with hydration optimization',
        description:
          'Implemented selective hydration for the plan selection pages to improve Time to Interactive. Used streaming SSR for the product detail pages where subscription upsells appeared, reducing First Contentful Paint by ~400ms.',
      },
    ],
    testingApproach:
      'Established a testing strategy combining Jest unit tests for business logic (plan eligibility rules, pricing calculations), React Testing Library for component behavior, and Playwright end-to-end tests covering the full enrollment funnel. Achieved >85% coverage on critical paths. Set up visual regression testing for the plan comparison cards across breakpoints.',
    outcomes: [
      'Improved cart-to-order conversion by +22.2%',
      'Reduced cart abandonment by -76.6% for HomeCarePlus plans',
      'Enabled recurring revenue model integration across pilot store rollouts',
      'Architecture adopted as the reference pattern for new microfrontend remotes across the organization',
      'Reduced deployment cycle from 2 weeks (monolith) to same-day independent deploys',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Webpack Module Federation',
      'Redux-Saga',
      'Node.js',
      'Express',
      'Jest',
      'React Testing Library',
      'Playwright',
      'Prometheus',
      'Elasticsearch',
    ],
  },
  {
    slug: 'macys-global-header-migration',
    title: 'Global Header Migration',
    company: "Macy's",
    period: '2022',
    summary:
      'Full migration of Macy\'s global header from Backbone/Marionette to Vue 3 + TypeScript under microfrontend architecture.',
    role: 'Senior Software Engineer (Repository Owner)',
    tags: ['legacy-modernization', 'microfrontends', 'performance', 'accessibility', 'architecture'],
    featured: true,
    category: 'flagship',
    image: 'migration',
    liveUrl: 'https://www.macys.com/',
    metrics: [
      { value: '~2M', label: 'Daily active users impacted' },
      { value: '100%', label: 'Feature parity maintained' },
      { value: '-35%', label: 'Bundle size reduction' },
    ],
    detailedDescription: [
      'The global header is a mission-critical shared component used across Macy\'s digital ecosystem, handling navigation, search, cart, account, and promotional logic for millions of users.',
      'The legacy implementation was written in Backbone, Marionette, jQuery, and Handlebars with tightly coupled logic and deeply nested state.',
      'When I joined, I had no prior experience in that stack. I reverse-engineered the legacy architecture, mapped state flows, and led the modernization strategy.',
      'I owned the entire header repository, led migration architecture discussions, converted complex nested legacy logic into modular Vue 3 + TypeScript patterns, rewrote data transformation algorithms from jQuery-heavy logic to modern JS, designed scalable state handling, ensured zero production regression during rollout, and mentored another engineer during the transformation.',
      'This was not a rewrite — it was a live migration inside active production traffic.',
    ],
    context:
      'Macy\'s web platform was running on a legacy Backbone/Marionette frontend that was increasingly difficult to maintain and hire for. The global site header — navigation, search, cart indicator, account menu — was the highest-visibility component on the site, rendering on every single page for millions of daily shoppers.',
    constraints: [
      'The header appears on every page — any bug is site-wide',
      'Legacy Backbone/Marionette codebase with years of accumulated complexity',
      'Must maintain exact feature parity (mega menus, search typeahead, cart count, account state)',
      'Incremental migration required — cannot take down the site for a rewrite',
      'Multiple teams depend on header events and APIs',
      'SEO-sensitive: header contains critical navigation links',
    ],
    ownership:
      'I owned the entire header repository end-to-end. I designed the Vue 3 + TypeScript architecture, established the migration playbook, coordinated with the platform team on integration strategy, and directly implemented the navigation mega menu, search integration, and cart indicator components. I mentored a junior engineer through the transformation process.',
    technicalDecisions: [
      {
        title: 'Vue 3 Composition API with TypeScript',
        description:
          'Chose Vue 3 with Composition API over Options API to improve code organization and type safety. This aligned with Macy\'s broader frontend modernization direction while providing better TypeScript integration than the alternatives considered.',
      },
      {
        title: 'Bridge pattern for legacy integration',
        description:
          'Designed a bridge layer that allowed the new Vue header to communicate with remaining Backbone modules through a shared event bus. This enabled incremental migration — the new header could be deployed while other page sections were still on the legacy stack.',
      },
      {
        title: 'Accessible mega menu from scratch',
        description:
          'Rebuilt the mega navigation menu with proper ARIA roles, keyboard navigation (arrow keys, escape to close, tab trapping), and screen reader announcements. The legacy implementation had significant accessibility gaps that were resolved in the migration.',
      },
      {
        title: 'Performance-focused rendering',
        description:
          'Implemented lazy rendering for mega menu panels (only mount on hover/focus), virtualized the search typeahead results list, and used Vue\'s built-in keep-alive for frequently toggled panels. Combined with tree-shaking unused Backbone code, achieved a 35% bundle reduction.',
      },
    ],
    testingApproach:
      'Created a visual regression testing suite using Chromatic to ensure pixel-perfect parity between the legacy and new header across all breakpoints and states (logged in, logged out, cart empty, cart full, etc.). Combined with unit tests for navigation logic and E2E tests for critical user flows.',
    outcomes: [
      'Migrated the header serving ~2M daily active users with zero rollbacks',
      'Achieved 100% feature parity while resolving 12 known accessibility issues',
      '-35% reduction in header JavaScript bundle size',
      'Migration playbook adopted by 3 other teams for their component migrations',
      'Zero production regressions during the entire rollout period',
    ],
    techStack: [
      'Vue 3',
      'TypeScript',
      'Composition API',
      'Pinia',
      'Vite',
      'Jest',
      'Chromatic',
      'ARIA',
      'Webpack',
    ],
  },
  {
    slug: 'toyota-financial-services-platform',
    title: 'New Digital Platform Launch',
    company: 'Toyota Financial Services',
    period: '2021–2022',
    summary:
      'Built core financial servicing platform features including recurring payments, dashboards, and secure account management.',
    role: 'Software Engineer',
    tags: ['fintech', 'accessibility', 'SSR', 'performance', 'testing'],
    featured: true,
    category: 'flagship',
    image: 'fintech',
    liveUrl: 'https://www.toyotafinancial.com/us/en.html',
    metrics: [
      { value: 'WCAG 2.1 AA', label: 'Full compliance achieved' },
      { value: '15+', label: 'Financial tools built' },
      { value: '<2s', label: 'Page load target met' },
    ],
    detailedDescription: [
      'Toyota Financial Services launched a new digital customer platform operating in startup mode within enterprise constraints.',
      'I built payment management pages (create, edit, delete payments), recurring payment scheduling with calendar date selection, payment history search and filtering system, dashboard summary blocks, and navigation menu architecture.',
      'I handled secure API integrations, Redux / Redux-Saga state orchestration, authentication flows, WCAG accessibility compliance, and Dockerized deployment workflows.',
      'The platform supported sensitive financial data and required high reliability across all customer-facing interfaces.',
    ],
    context:
      'Toyota Financial Services provides auto lending, leasing, and insurance products through a network of dealerships and direct-to-consumer channels. The platform needed modernization to improve the dealer experience while meeting strict financial industry accessibility and compliance requirements.',
    constraints: [
      'Financial data handling with strict security and audit requirements',
      'WCAG 2.1 AA compliance mandatory for all customer-facing interfaces',
      'Complex form workflows (loan applications with 50+ fields, multi-step validation)',
      'Must support older browsers used in dealership environments',
      'Real-time data synchronization between dealer and customer views',
      'Regulatory requirements for data display (APR disclosures, truth-in-lending)',
    ],
    ownership:
      'I owned the frontend development for the dealer-facing tools suite, including the payment management workflow, recurring payment scheduler, and account management dashboard. I was the primary contributor to the accessibility audit remediation effort and established the component testing patterns used across the team.',
    technicalDecisions: [
      {
        title: 'Next.js with server-side rendering',
        description:
          'Chose Next.js for the dealer portal to leverage SSR for initial page loads (critical for dealership environments with varying network quality) and API routes for BFF patterns that aggregated multiple Toyota backend services.',
      },
      {
        title: 'Redux-Saga for complex async workflows',
        description:
          'The payment management flow involved multiple dependent API calls (validation → scheduling → confirmation → notification). Redux-Saga\'s generator-based approach made these complex orchestrations testable and debuggable, with clear cancellation and retry semantics.',
      },
      {
        title: 'Accessibility-first component library',
        description:
          'Built a shared component library with accessibility baked in: every form control included proper labeling, error announcement, and keyboard interaction. Created custom hooks (useAriaLive, useFocusTrap, useReducedMotion) that made it easy for other developers to build accessible features without deep ARIA knowledge.',
      },
      {
        title: 'Secure form state management',
        description:
          'Implemented a custom form state management solution that provided instant field validation, maintained state across multi-step flows (with URL-based step tracking for browser back/forward), and gracefully handled session timeout scenarios common in financial applications.',
      },
    ],
    testingApproach:
      'Implemented comprehensive accessibility testing: automated axe-core scans in CI, manual screen reader testing (NVDA, VoiceOver) for all critical flows, and keyboard-only navigation testing. Unit tests covered financial calculation logic with property-based testing for edge cases. E2E tests covered the full payment management flow.',
    outcomes: [
      'Achieved full WCAG 2.1 AA compliance across all customer-facing interfaces',
      'Built 15+ financial servicing tools processing thousands of daily transactions',
      'Met <2 second page load target on 95th percentile across all portal pages',
      'Reduced accessibility-related bug reports by 90% after component library adoption',
      'Form completion rates improved by ~18% after UX and validation improvements',
    ],
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Redux',
      'Redux-Saga',
      'Node.js',
      'Express',
      'Docker',
      'Jest',
      'React Testing Library',
      'axe-core',
      'Cypress',
    ],
  },
  {
    slug: 'lowes-tender-anywhere-quick-checkout',
    title: 'Tender Anywhere — Quick Checkout',
    company: "Lowe's",
    period: '2022–2023',
    summary:
      'Digitization of the checkout experience for installation quotes, enabling flexible payment tender across channels with optimized cold-start performance.',
    role: 'Senior Software Engineer',
    tags: ['performance', 'microfrontends', 'checkout', 'DevEx'],
    category: 'secondary',
    image: 'checkout',
    liveUrl: 'https://www.lowes.com/mylowes/projects',
    metrics: [
      { value: '-60%', label: 'Cold-start reduction' },
      { value: '40+', label: 'Engineers onboarded' },
      { value: '99.9%', label: 'Uptime maintained' },
    ],
    context:
      'Lowe\'s checkout experience needed to support multiple payment methods across web and in-store kiosk channels. The existing checkout was a tightly coupled module within the monolith, making it slow to iterate and fragile to change.',
    constraints: [
      'Mission-critical checkout flow handling billions in annual revenue',
      'Zero-downtime requirement — any regression directly impacts revenue',
      'Multiple payment provider integrations with different SDK patterns',
      'Must work across desktop, mobile web, and in-store kiosk form factors',
      'Strict PCI compliance requirements for payment handling',
    ],
    ownership:
      'I led the frontend migration of the checkout payment module from the monolith into an independently deployable microfrontend. Owned the performance optimization initiative and established developer experience patterns that enabled 40+ engineers to contribute.',
    technicalDecisions: [
      {
        title: 'Strangler-fig migration pattern',
        description:
          'Designed an incremental extraction approach where the new microfrontend ran alongside legacy code with feature flag traffic control, eliminating the need for risky big-bang rewrites or maintenance windows.',
      },
      {
        title: 'On-demand SDK loading',
        description:
          'Implemented route-based code splitting and on-demand payment SDK loading — only loading Braintree when a user selected PayPal. This was the primary driver of the 60% cold-start improvement.',
      },
    ],
    testingApproach:
      'Built a comprehensive testing pyramid with unit tests, integration tests using MSW for API mocking, and Cypress E2E tests. Added performance budgets in CI that blocked merges if bundle size regressed.',
    outcomes: [
      '-60% cold-start time for checkout pages',
      'Onboarded 40+ engineers to the new microfrontend architecture',
      'Maintained 99.9% uptime during migration with zero payment-impacting incidents',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Webpack Module Federation',
      'Redux-Saga',
      'Cypress',
      'MSW',
    ],
  },
  {
    slug: 'lowes-multi-appliance-protection',
    title: 'Multi-Appliance Protection Plan',
    company: "Lowe's",
    period: '2023',
    summary:
      'Subscription-based appliance coverage integration within the Lowe\'s ecosystem, extending the protection plan architecture to multi-product bundles.',
    role: 'Senior Software Engineer',
    tags: ['microfrontends', 'e-commerce', 'architecture'],
    category: 'secondary',
    image: 'architecture',
    liveUrl: 'https://www.lowes.com/subscription/protection',
    metrics: [
      { value: 'Multi-SKU', label: 'Bundle coverage support' },
      { value: 'Shared MFE', label: 'Component reuse across plans' },
    ],
    context:
      'Extending the HomeCarePlus subscription architecture to support multi-appliance protection bundles, enabling customers to add coverage for multiple products under a single plan.',
    constraints: [
      'Must integrate with existing subscription infrastructure',
      'Complex pricing logic for multi-product bundles',
      'Consistent UX across single and multi-appliance flows',
    ],
    ownership:
      'Extended the microfrontend architecture to support multi-product subscription bundles, designed the pricing display components, and coordinated with the backend team on bundle API contracts.',
    technicalDecisions: [
      {
        title: 'Composable subscription components',
        description:
          'Designed a composable component architecture that allowed the same enrollment flow to support both single-appliance and multi-appliance bundles through configuration rather than code duplication.',
      },
    ],
    testingApproach:
      'Leveraged existing testing infrastructure from the HomeCarePlus project. Added specific test cases for multi-product pricing calculations and bundle configuration edge cases.',
    outcomes: [
      'Extended subscription architecture to multi-product bundles',
      'Achieved high component reuse from existing HomeCarePlus codebase',
      'Shipped within compressed timeline leveraging proven patterns',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Webpack Module Federation',
      'Redux-Saga',
      'Jest',
    ],
  },
  {
    slug: 'lowes-address-microfrontend',
    title: 'Address Microfrontend (Fabric) — Reusable Address Management UI',
    company: "Lowe's",
    period: '2023–2024',
    summary:
      'Built a standalone Address microfrontend that replaced duplicated address UIs across Lowe\'s pages with one reusable, consistent, bug-fixed solution.',
    role: 'Senior Software Engineer',
    tags: ['microfrontends', 'architecture', 'e-commerce', 'DevEx', 'BFF'],
    featured: true,
    category: 'flagship',
    image: 'address',
    liveUrl: 'https://www.lowes.com/',
    liveUrlNote: 'Address UI appears across checkout/account flows.',
    metrics: [
      { value: 'Platform-wide', label: 'Replaced duplicated address UIs' },
      { value: 'MFE + BFF', label: 'Full-stack architecture' },
      { value: 'DIY + Pro', label: 'Multi-persona support' },
    ],
    detailedDescription: [
      'Lowe\'s had multiple address sections across checkout and other surfaces, each with variations and duplicated logic. Address requirements were complex (DIY vs Pro), including organizational/group addresses, favoriting, editing, deleting, pagination consistency, and "change recipient" (first/last name changes on an address).',
      'I created a brand-new microfrontend repository (Fabric MFE) designed for drop-in reuse across teams, so teams could remove thousands of lines of custom address code and adopt a single standardized module.',
      'The system was designed to work even when consuming teams lacked access to certain datasets — the MFE handled data fetching internally where possible, and used prop-based inputs only when required.',
    ],
    context:
      'Address management across Lowe\'s platform was fragmented — multiple teams had built their own address selection and editing UIs with inconsistent logic, duplicate bugs, and no shared contract. This created ongoing maintenance burden, user-facing inconsistencies, and slowed feature delivery for any team touching address flows.',
    constraints: [
      'Multiple consuming teams with different data access patterns',
      'Must support DIY and Pro flows with different address structures (org/group)',
      'Deterministic address ordering and pagination consistency across pages',
      'Composable with another team\'s "Add New Address" MFE',
      'Strict backwards compatibility — existing flows cannot break during adoption',
      'Feature flags for incremental rollout across checkout and account surfaces',
    ],
    ownership:
      'I built the Address MFE as an independent repository with clean, modern TypeScript patterns and strict boundaries. I implemented a Microfrontend BFF layer with endpoints that call Lowe\'s address services (EC), normalize responses, and expose stable contracts for consuming teams. I partnered with another team to integrate their "Add New Address" MFE and composed it inside this Address MFE for a seamless UX.',
    technicalDecisions: [
      {
        title: 'Independent MFE with BFF endpoints',
        description:
          'Built the Address MFE as a self-contained repository with its own BFF layer that calls Lowe\'s address services, normalizes responses, and exposes stable typed contracts. This eliminated direct coupling between consuming teams and backend address APIs.',
      },
      {
        title: 'Prop-based inputs with internal data fetching fallback',
        description:
          'Designed the module to work when consuming teams lacked access to certain datasets — the MFE handled data fetching internally where possible, and accepted prop-based inputs only when required. This maximized portability across different page contexts.',
      },
      {
        title: 'Deterministic ordering and pagination',
        description:
          'Ensured deterministic address ordering and pagination consistency, avoiding reordering bugs between pages that had plagued previous implementations.',
      },
      {
        title: 'Composable MFE integration',
        description:
          'Partnered with another team to integrate their "Add New Address" MFE inside this Address MFE, composing two independently deployed microfrontends into a seamless user experience.',
      },
    ],
    testingApproach:
      'Built comprehensive unit tests for address normalization logic, BFF endpoint contracts, and edge cases around DIY vs Pro address structures. Integration tests covered the full address CRUD lifecycle including favorites management and recipient changes. Playwright E2E tests validated cross-MFE composition.',
    outcomes: [
      'Reduced duplicated address UI logic across the platform',
      'Improved consistency, reliability, and developer velocity for teams integrating address flows',
      'Supported DIY and Pro flows: org/group addresses, favorites (up to 10), edit/delete favorites, and recipient updates',
      'Enabled teams to remove thousands of lines of custom address code',
    ],
    techStack: [
      'React',
      'TypeScript',
      'Webpack Module Federation',
      'Node.js',
      'BFF (Backend for Frontend)',
      'REST APIs',
      'Vite',
      'Jest',
      'Playwright',
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFlagshipStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === 'flagship');
}

export function getSecondaryStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.category === 'secondary');
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  caseStudies.forEach((cs) => cs.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
