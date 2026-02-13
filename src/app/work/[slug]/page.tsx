import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, ExternalLinkIcon } from '@/components/ui/icons';
import { ProjectImage } from '@/components/ui/project-image';
import { FadeIn } from '@/components/ui/fade-in';
import { CopyLinkButton } from '@/components/ui/copy-link-button';
import { caseStudies, getCaseStudy } from '@/content/case-studies';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return {
    title: `${study.title} — ${study.company}`,
    description: study.summary,
    openGraph: {
      title: `${study.title} — ${study.company} | ${SITE_CONFIG.name}`,
      description: study.summary,
    },
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();

  const currentIndex = caseStudies.findIndex((cs) => cs.slug === params.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <>
      <Section className="pt-24 pb-8 md:pt-32">
        <FadeIn>
          <div className="max-w-3xl">
            <Link
              href="/work"
              className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              &larr; All Work
            </Link>
            <div className="mb-4 flex items-center gap-3">
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {study.company} &middot; {study.period}
              </span>
              {study.category === 'flagship' && (
                <span className="rounded-full bg-accent-500/10 px-2.5 py-0.5 text-xs font-semibold text-accent-600 dark:bg-accent-400/10 dark:text-accent-400">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
              {study.title}
            </h1>
            <p className="mt-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">
              {study.role}
            </p>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{study.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            {study.liveUrl && (
              <div className="mt-6">
                <div className="flex items-center gap-2">
                  {study.liveUrl.startsWith('http') ? (
                    <Button href={study.liveUrl} external>
                      View live
                      <ExternalLinkIcon size={14} />
                    </Button>
                  ) : (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-150 hover:bg-accent-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
                    >
                      View SEO Core Web Vitals Dashboard Demo
                      <ExternalLinkIcon size={14} />
                    </a>
                  )}
                  <CopyLinkButton url={study.liveUrl.startsWith('http') ? study.liveUrl : `${typeof window !== 'undefined' ? window.location.origin : ''}${study.liveUrl}`} />
                </div>
                {study.liveUrlNote && (
                  <p className="mt-2 text-xs text-neutral-400 dark:text-neutral-500">
                    {study.liveUrlNote}
                  </p>
                )}
              </div>
            )}
          </div>
        </FadeIn>
      </Section>

      {study.image && (
        <div className="mx-auto max-w-content px-6 pb-8">
          <FadeIn delay={100}>
            <ProjectImage
              variant={study.image as 'subscription' | 'checkout' | 'migration' | 'fintech' | 'ai-studio' | 'architecture' | 'address' | 'cwv-dashboard'}
              className="w-full"
            />
          </FadeIn>
        </div>
      )}

      {study.metrics.length > 0 && (
        <div className="border-y border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-925">
          <div className="mx-auto max-w-content px-6 py-10">
            <FadeIn>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
                {study.metrics.map((metric) => (
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
      )}

      <Section className="py-12">
        <div className="prose-custom max-w-3xl">
          {study.detailedDescription && study.detailedDescription.length > 0 && (
            <FadeIn>
              <h2>Overview</h2>
              {study.detailedDescription.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </FadeIn>
          )}

          <FadeIn delay={50}>
            <h2>Context</h2>
            <p>{study.context}</p>
          </FadeIn>

          <FadeIn delay={100}>
            <h2>Constraints</h2>
            <ul>
              {study.constraints.map((constraint, i) => (
                <li key={i}>{constraint}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={150}>
            <h2>Role &amp; Ownership</h2>
            <p>{study.ownership}</p>
          </FadeIn>

          <FadeIn delay={200}>
            <h2>Key Technical Decisions</h2>
            {study.technicalDecisions.map((decision, i) => (
              <div key={i} className="mb-6">
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={250}>
            <h2>Testing &amp; Quality</h2>
            <p>{study.testingApproach}</p>
          </FadeIn>

          <FadeIn delay={300}>
            <h2>Outcomes &amp; Impact</h2>
            <ul>
              {study.outcomes.map((outcome, i) => (
                <li key={i}>{outcome}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={350}>
            <h2>Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      <div className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-content px-6 py-12">
          <FadeIn>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
              Next Case Study
            </p>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {nextStudy.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {nextStudy.company} &middot; {nextStudy.period}
                </p>
              </div>
              <Button href={`/work/${nextStudy.slug}`} variant="secondary">
                Read
                <ArrowRightIcon size={16} />
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
