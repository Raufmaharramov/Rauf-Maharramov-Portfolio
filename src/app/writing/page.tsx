import type { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon } from '@/components/ui/icons';
import { articles } from '@/content/articles';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Writing',
  description: `Technical writing by ${SITE_CONFIG.name} on frontend architecture, accessibility, and engineering at scale.`,
};

export default function WritingPage() {
  return (
    <Section className="pt-24 md:pt-32">
      <SectionHeader
        title="Writing"
        subtitle="Thoughts on frontend architecture, accessibility, and engineering at scale."
      />

      <div className="max-w-3xl space-y-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/writing/${article.slug}`}
            className="group block rounded-xl border border-neutral-200 p-6 transition-all duration-200 hover:border-neutral-300 hover:shadow-sm dark:border-neutral-800 dark:hover:border-neutral-700"
          >
            <div className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
              {new Date(article.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <h2 className="text-xl font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-white dark:group-hover:text-neutral-200">
              {article.title}
            </h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">{article.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
              <span className="ml-auto inline-flex items-center gap-1 text-sm font-medium text-neutral-500 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
                Read
                <ArrowRightIcon size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
