import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@/components/ui/icons';
import { ProjectImage } from '@/components/ui/project-image';
import { FadeIn } from '@/components/ui/fade-in';
import { aiProjects, getAIProject } from '@/content/ai-projects';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return aiProjects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getAIProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Applied AI Engineering`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${SITE_CONFIG.name}`,
      description: project.summary,
    },
  };
}

export default function AIProjectPage({ params }: PageProps) {
  const project = getAIProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <Section className="pt-24 pb-8 md:pt-32">
        <FadeIn>
          <Link
            href="/work"
            className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            &larr; All Work
          </Link>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
            Applied AI Engineering
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-sm font-medium text-accent-600 dark:text-accent-400">
            {project.subtitle} &middot; {project.role}
          </p>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            {project.summary}
          </p>
        </FadeIn>
      </Section>

      <div className="mx-auto max-w-content px-6">
        <FadeIn delay={100}>
          <ProjectImage variant="ai-studio" className="w-full" />
        </FadeIn>
      </div>

      <div className="border-y border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-925">
        <div className="mx-auto max-w-content px-6 py-10">
          <FadeIn>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-2xl font-semibold text-neutral-900 dark:text-white md:text-3xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      <Section className="py-12">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="prose-custom">
              <h2>Overview</h2>
              {project.description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="prose-custom mt-12">
              <h2>Advanced System Features</h2>
              <ul>
                {project.advancedFeatures.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-12">
              <h2 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-white">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-content px-6 py-12">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Explore Enterprise Work
              </h2>
              <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                View case studies from Fortune 500 production systems.
              </p>
              <div className="mt-6">
                <Button href="/work">
                  View All Projects
                  <ArrowRightIcon size={16} />
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
