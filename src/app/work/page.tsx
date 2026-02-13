'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/ui/fade-in';
import { ProjectImage } from '@/components/ui/project-image';
import { ArrowRightIcon } from '@/components/ui/icons';
import { caseStudies, getAllTags, getFlagshipStudies, getSecondaryStudies } from '@/content/case-studies';
import { aiProjects } from '@/content/ai-projects';

const allTags = getAllTags();

export default function WorkPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const flagship = getFlagshipStudies();
  const secondary = getSecondaryStudies();

  const filteredFlagship = activeTag
    ? flagship.filter((cs) => cs.tags.includes(activeTag))
    : flagship;

  const filteredSecondary = activeTag
    ? secondary.filter((cs) => cs.tags.includes(activeTag))
    : secondary;

  const hasResults = filteredFlagship.length > 0 || filteredSecondary.length > 0;

  return (
    <>
      <Section className="pt-24 md:pt-32">
        <FadeIn>
          <SectionHeader
            title="Work"
            subtitle="Enterprise engineering across Fortune 500 products. Architecture ownership, technical decisions, and measurable outcomes."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-12 flex flex-wrap gap-2">
            <Badge
              active={activeTag === null}
              onClick={() => setActiveTag(null)}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag}
                active={activeTag === tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </FadeIn>

        {filteredFlagship.length > 0 && (
          <>
            <FadeIn delay={150}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                Featured Enterprise Projects
              </h3>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredFlagship.map((study, i) => (
                <FadeIn key={study.slug} delay={200 + i * 100}>
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
          </>
        )}
      </Section>

      {filteredSecondary.length > 0 && (
        <Section className="pt-0">
          <FadeIn>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Additional Projects
            </h3>
          </FadeIn>
          <div className="grid gap-6 md:grid-cols-2">
            {filteredSecondary.map((study, i) => (
              <FadeIn key={study.slug} delay={100 + i * 100}>
                <Card
                  title={study.title}
                  subtitle={`${study.company} · ${study.period}`}
                  description={study.summary}
                  tags={study.tags}
                  href={`/work/${study.slug}`}
                  metrics={study.metrics.slice(0, 2)}
                />
              </FadeIn>
            ))}
          </div>
        </Section>
      )}

      {!hasResults && (
        <Section className="pt-0">
          <p className="py-12 text-center text-neutral-500 dark:text-neutral-400">
            No projects match this filter.
          </p>
        </Section>
      )}

      <Section className="border-t border-neutral-200 dark:border-neutral-800">
        <FadeIn>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
            Applied AI Engineering
          </div>
          <SectionHeader
            title="AI Engineering & Applied AI Systems"
            subtitle="Independent engineering work in applied AI — production-grade systems, not demos."
          />
        </FadeIn>

        {aiProjects.map((project, i) => (
          <FadeIn key={project.slug} delay={100 + i * 100}>
            <Link
              href={`/work/ai/${project.slug}`}
              className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card-hover dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-700"
            >
              <div className="aspect-[21/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800/50">
                <ProjectImage
                  variant="ai-studio"
                  className="border-0 transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="mb-2 text-sm font-medium text-accent-600 dark:text-accent-400">
                  {project.subtitle}
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-white dark:group-hover:text-neutral-200">
                  {project.title}
                </h3>
                <p className="mb-6 max-w-2xl text-neutral-600 dark:text-neutral-400">
                  {project.summary}
                </p>
                <div className="mb-6 flex flex-wrap gap-6">
                  {project.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 5).map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent-600 transition-colors group-hover:text-accent-500 dark:text-accent-400">
                  View Project Details
                  <ArrowRightIcon size={14} />
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </Section>
    </>
  );
}
