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
        className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-400 hover:shadow-card-hover hover:shadow-glow dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-500"
      >
        <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800/50 dark:to-neutral-900/50">
          <ProjectImage
            variant={image as 'subscription' | 'checkout' | 'migration' | 'fintech' | 'ai-studio' | 'architecture' | 'address' | 'cwv-dashboard' | 'purchase-agent'}
            className="border-0 transition-transform duration-700 group-hover:scale-[1.05]"
          />
        </div>
        <div className="p-6">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
              {subtitle}
            </span>
          </div>
          <h3 className="mb-3 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
            {title}
          </h3>
          <p className="mb-4 line-clamp-2 text-neutral-600 dark:text-neutral-400">{description}</p>
          {metrics && metrics.length > 0 && (
            <div className="mb-4 grid grid-cols-3 gap-3">
              {metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="metric-card rounded-lg bg-neutral-50 p-2 text-center dark:bg-neutral-800">
                  <div className="text-sm font-semibold text-accent-600 dark:text-accent-400">
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
      className="group block rounded-2xl border border-neutral-200 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent-400 hover:shadow-card-hover hover:shadow-glow dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-accent-500"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-sm font-medium text-accent-600 dark:text-accent-400">
          {subtitle}
        </span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-neutral-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
        {title}
      </h3>
      <p className="mb-4 line-clamp-2 text-neutral-600 dark:text-neutral-400">{description}</p>
      {metrics && metrics.length > 0 && (
        <div className="mb-4 grid grid-cols-2 gap-3">
          {metrics.slice(0, 2).map((metric) => (
            <div key={metric.label} className="metric-card rounded-lg bg-neutral-50 p-2 text-center dark:bg-neutral-800">
              <div className="text-sm font-semibold text-accent-600 dark:text-accent-400">
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
