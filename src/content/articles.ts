import { Article } from '@/lib/types';

export const articles: Article[] = [
  {
    slug: 'module-federation-at-scale',
    title: 'Module Federation at Scale: Lessons from a Fortune 500 E-Commerce Platform',
    date: '2024-03-15',
    summary:
      'Practical lessons learned from implementing Webpack Module Federation across a large e-commerce platform with dozens of teams and hundreds of developers.',
    tags: ['microfrontends', 'architecture', 'DevEx'],
    content: `When people talk about microfrontends, the conversation usually starts with the theory — independent deployability, team autonomy, technology agnosticism. What rarely gets discussed is what actually breaks when you try to run Module Federation at the scale of a Fortune 500 e-commerce platform.

## The reality of shared dependencies

The first thing that will bite you is shared dependency management. Module Federation lets you share React, React DOM, and other libraries between host and remotes. In theory, this is elegant. In practice, with 20+ remotes maintained by different teams, version drift becomes a constant tax.

We solved this by establishing a "platform version" — a quarterly-updated set of blessed dependency versions that all remotes must adopt within a two-week window. Teams that fell behind got automated PRs. It is not glamorous, but it kept us from the "works on my machine" hell that plagues many microfrontend setups.

## Failure modes you don't read about

Remote loading failures are inevitable at scale. Networks fail, deploys go bad, CDN caches get stale. We built a three-tier fallback strategy:

1. **Stale cache**: If a remote fails to load, serve the last known good version from a service worker cache
2. **Skeleton fallback**: If no cache exists, render a non-interactive skeleton that preserves layout
3. **Graceful degradation**: If the feature is non-critical, hide the section entirely with an error boundary

This sounds obvious in retrospect, but I have seen multiple large organizations launch microfrontends without any failure handling. The first CDN incident becomes a full site outage.

## Developer experience is the real bottleneck

The hardest problem was not technical architecture — it was developer experience. When an engineer needs to run 5 remotes locally to test an integration, the architecture has failed them. We invested heavily in:

- A local dev harness that mocked the host environment, letting engineers develop remotes in isolation
- Contract tests between host and remotes that caught integration issues before deployment
- A shared Storybook instance that served as both documentation and visual regression testing

The teams that adopted these tools shipped faster and with fewer production incidents. The teams that resisted spent their time debugging integration issues.

## What I would do differently

If I were starting over, I would invest in the developer experience tooling from day one — not as an afterthought. The architecture decisions are the easy part. Making it productive for 40+ engineers to work in the system every day is the real challenge.`,
  },
  {
    slug: 'accessibility-is-not-a-feature',
    title: 'Accessibility Is Not a Feature: Building Inclusive Interfaces in Financial Services',
    date: '2024-01-20',
    summary:
      'How building accessibility into the foundation of a component library eliminated 90% of accessibility bugs and changed how our team thought about UI development.',
    tags: ['accessibility', 'testing', 'architecture'],
    content: `Most teams treat accessibility as a checklist item — something you audit before launch and fix with a burst of ARIA attributes. After spending a year building financial services interfaces that required WCAG 2.1 AA compliance, I am convinced this approach fundamentally does not work.

## The audit-and-fix cycle is broken

Here is the pattern I have seen at multiple companies: the team builds a feature, it goes through an accessibility audit (if you are lucky), a list of issues comes back, and engineers spend a sprint bolting on fixes. The fixes are often superficial — adding aria-labels without understanding the interaction model, or slapping role attributes on divs instead of using semantic HTML.

The result is technically compliant but practically unusable. A screen reader user can technically navigate the form, but the experience is confusing, verbose, and fragile.

## Baking it into the component library

At Toyota Financial Services, we took a different approach. Every component in our shared library was built accessibility-first:

- **Form controls** included built-in label association, error message announcement via aria-describedby, and required field indication that worked for both visual and screen reader users
- **Modal dialogs** had focus trapping, escape-to-close, and proper focus restoration on close — all handled by the component, not by the consumer
- **Navigation patterns** used proper landmark roles and skip links by default

The key insight was making the accessible path the easy path. When a developer used our DatePicker component, they got keyboard navigation, screen reader announcements, and proper ARIA attributes without writing a single line of accessibility code.

## Custom hooks that scaled the knowledge

Not everything could be solved at the component level. For page-level patterns, we created hooks:

- \`useAriaLive\` — announced dynamic content changes to screen readers
- \`useFocusTrap\` — managed focus within modal contexts
- \`useReducedMotion\` — respected the user's motion preferences

These hooks encoded accessibility knowledge that most developers on the team did not have. Instead of expecting every engineer to be an accessibility expert, we made the tools smart enough to handle the common patterns correctly.

## The results speak for themselves

After the component library was adopted across the dealer portal, accessibility-related bug reports dropped by 90%. Not because we found and fixed more bugs, but because the architecture made it difficult to create them in the first place.

The financial services context made this investment easy to justify — regulatory compliance is a hard requirement. But every team should think this way. The cost of building accessibility in from the start is a fraction of the cost of retrofitting it later.`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
