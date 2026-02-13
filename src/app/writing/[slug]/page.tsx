import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { articles, getArticle } from '@/content/articles';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: `${article.title} | ${SITE_CONFIG.name}`,
      description: article.summary,
    },
  };
}

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="mb-4 mt-12 text-2xl font-semibold text-neutral-900 dark:text-white">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ')) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="mb-4 list-decimal space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
          {listItems.map((item, idx) => {
            const boldMatch = item.match(/^\*\*(.*?)\*\*:?\s*(.*)/);
            if (boldMatch) {
              return (
                <li key={idx} className="leading-relaxed">
                  <strong className="font-semibold text-neutral-900 dark:text-white">
                    {boldMatch[1]}
                  </strong>
                  {boldMatch[2] ? `: ${boldMatch[2]}` : ''}
                </li>
              );
            }
            return <li key={idx} className="leading-relaxed">{item}</li>;
          })}
        </ol>
      );
      continue;
    } else if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="mb-4 list-disc space-y-2 pl-6 text-neutral-600 dark:text-neutral-400">
          {listItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
      continue;
    } else if (line.trim() === '') {
      // skip empty lines
    } else {
      const rendered = line
        .replace(/`([^`]+)`/g, '<code class="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">$1</code>')
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-neutral-900 dark:text-white">$1</strong>');
      elements.push(
        <p
          key={i}
          className="mb-4 leading-relaxed text-neutral-600 dark:text-neutral-400"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  return (
    <Section className="pt-24 md:pt-32">
      <div className="max-w-3xl">
        <Link
          href="/writing"
          className="mb-6 inline-flex items-center gap-1 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          &larr; All Writing
        </Link>
        <div className="mb-2 text-sm text-neutral-500 dark:text-neutral-400">
          {new Date(article.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-4xl">
          {article.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-12">
          {renderContent(article.content)}
        </div>
      </div>
    </Section>
  );
}
