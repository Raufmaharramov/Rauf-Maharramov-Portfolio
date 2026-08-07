import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { FadeIn } from '@/components/ui/fade-in';
import {
  ZapIcon,
  AccessibilityIcon,
  CodeIcon,
  ShieldIcon,
  ArrowRightIcon,
  MapPinIcon,
  DownloadIcon,
  MailIcon,
  LinkedInIcon,
} from '@/components/ui/icons';
import { SITE_CONFIG, TECH_STACK, OPTIMIZATION_AREAS, COMPANIES } from '@/lib/constants';
import { getFlagshipStudies } from '@/content/case-studies';
import { aiProjects } from '@/content/ai-projects';
import { ToptalBadge } from '@/components/toptal-badge';

const iconMap: Record<string, React.FC<{ className?: string; size?: number }>> = {
  zap: ZapIcon,
  accessibility: AccessibilityIcon,
  code: CodeIcon,
  shield: ShieldIcon,
};

export default function HomePage() {
  const flagshipStudies = getFlagshipStudies();

  return (
    <>
      <Section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <FadeIn>
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
              <MapPinIcon size={16} />
              <span>{SITE_CONFIG.location}</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-white md:text-6xl lg:text-7xl">
              <span className="gradient-text">{SITE_CONFIG.name}</span>
            </h1>
            <p className="mt-4 text-2xl text-neutral-600 dark:text-neutral-300 md:text-3xl font-medium">
              {SITE_CONFIG.title}
            </p>
            <p className="mt-8 text-xl leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-3xl">
              I architect and scale AI-orchestrated systems and frontend platforms for products used by millions. Specializing in conversational AI, data-driven analytics, microfrontend architecture, and performance optimization at Fortune 500 companies.
            </p>
            <div className="mt-6 flex justify-start">
              <ToptalBadge />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/work" className="gradient-bg text-white border-0 hover:shadow-glow transition-all duration-300">
                View Projects
                <ArrowRightIcon size={16} />
              </Button>
              <Button href="/contact" variant="secondary" className="hover:border-accent-400 hover:text-accent-600 transition-all duration-300">
                <MailIcon size={16} />
                Get in Touch
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <div className="border-y border-neutral-200 bg-gradient-to-r from-white to-neutral-50 dark:border-neutral-800 dark:from-neutral-950 dark:to-neutral-900">
        <div className="mx-auto max-w-content px-6 py-12">
          <FadeIn>
            <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              Enterprise Engineering Experience
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {COMPANIES.map((company, i) => (
                <FadeIn key={company.name} delay={i * 100}>
                  <div className="group p-4 rounded-xl border border-neutral-200 bg-white hover:border-accent-400 hover:shadow-glow transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {company.name}
                    </div>
                    <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {company.period}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <Section>
        <FadeIn>
          <SectionHeader
            title="Featured Enterprise Projects"
            subtitle="Architecture ownership, technical decisions, and measurable outcomes at scale."
          />
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {flagshipStudies.map((study, i) => (
            <FadeIn key={study.slug} delay={100 + i * 100}>
              <Card
                title={study.title}
                subtitle={`${study.company} · ${study.period}`}
                description={study.summary}
                tags={study.tags}
                href={`/work/${study.slug}`}
                metrics={study.metrics.slice(0, 2)}
                image={study.image}
                featured
              />
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}>
          <div className="mt-8">
            <Button href="/work" variant="secondary">
              View All Projects
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-neutral-200 dark:border-neutral-800">
        <FadeIn>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
            Applied AI Engineering
          </div>
          <SectionHeader
            title="AI Engineering & Applied AI Systems"
            subtitle="Production-grade AI systems — not demos."
          />
        </FadeIn>
        {aiProjects.slice(0, 1).map((project, i) => (
          <FadeIn key={project.slug} delay={100}>
            <Link
              href={`/work/ai/${project.slug}`}
              className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card-hover dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-700"
            >
              <div className="p-6 md:p-8">
                <div className="mb-2 text-sm font-medium text-accent-600 dark:text-accent-400">
                  {project.subtitle}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-white dark:group-hover:text-neutral-200 md:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-4 max-w-2xl text-neutral-600 dark:text-neutral-400">
                  {project.summary}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors group-hover:text-accent-500 dark:text-accent-400">
                  View Details
                  <ArrowRightIcon size={14} />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </Section>

      <Section className="bg-white dark:bg-neutral-925">
        <FadeIn>
          <SectionHeader
            title="What I Optimize"
            subtitle="The engineering qualities I focus on across every project."
          />
        </FadeIn>
        <div className="grid gap-8 md:grid-cols-2">
          {OPTIMIZATION_AREAS.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <FadeIn key={area.title} delay={100 + i * 75}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
                    {Icon && <Icon size={20} />}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 dark:text-white">{area.title}</h3>
                    <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                      {area.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeader
            title="Tech I Ship With"
            subtitle="The tools and technologies I use daily to build production systems."
          />
        </FadeIn>
        <FadeIn delay={100}>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="gradient-bg">
        <FadeIn>
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white animate-fade-in">
              Let&apos;s Build Something Great Together
            </h2>
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
              Open to senior/staff-level roles. Ready to bring AI-orchestrated systems and data-driven solutions to your team.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/resume" className="bg-white text-accent-600 border-0 hover:bg-neutral-100 hover:scale-105 transition-all duration-300 shadow-lg">
                <DownloadIcon size={16} />
                Download Resume
              </Button>
              <Button
                href={`mailto:${SITE_CONFIG.email}`}
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                variant="secondary"
              >
                <MailIcon size={16} />
                Email Me
              </Button>
              <Button
                href={SITE_CONFIG.linkedin}
                variant="secondary"
                external
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
