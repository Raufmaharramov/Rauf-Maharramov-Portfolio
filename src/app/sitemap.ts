import type { MetadataRoute } from 'next';
import { caseStudies } from '@/content/case-studies';
import { articles } from '@/content/articles';
import { SITE_CONFIG } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), priority: 1 },
    { url: `${baseUrl}/work`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/resume`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/writing`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
  ];

  const caseStudyPages = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  const articlePages = articles.map((a) => ({
    url: `${baseUrl}/writing/${a.slug}`,
    lastModified: new Date(a.date),
    priority: 0.6,
  }));

  return [...staticPages, ...caseStudyPages, ...articlePages];
}
