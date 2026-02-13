import Link from 'next/link';
import { Badge } from './badge';
import { ProjectImage } from './project-image';

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  href: string;
  metrics?: { value: string; label: string }[];
  image?: string;
  featured?: boolean;
}

export function Card({ title, subtitle, description, tags, href, metrics, image, featured }: CardProps) {
  if (featured && image) {
    return (
      <Link
        href={href}
        className="group block overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card-hover dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-700"
      >
        <div className="aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-800/50">
          <ProjectImage
            variant={image as 'subscription' | 'checkout' | 'migration' | 'fintech' | 'ai-studio' | 'architecture' | 'address' | 'cwv-dashboard'}
            className="border-0 transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center gap-3">
            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </span>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-white dark:group-hover:text-neutral-200">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-neutral-600 dark:text-neutral-400">{description}</p>
          {metrics && metrics.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-6">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block rounded-xl border border-neutral-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-300 hover:shadow-card-hover dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-700"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-neutral-700 dark:text-white dark:group-hover:text-neutral-200">
        {title}
      </h3>
      <p className="mb-4 line-clamp-2 text-neutral-600 dark:text-neutral-400">{description}</p>
      {metrics && metrics.length > 0 && (
        <div className="mb-4 flex gap-6">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <div className="text-lg font-semibold text-neutral-900 dark:text-white">
                {metric.value}
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{metric.label}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
