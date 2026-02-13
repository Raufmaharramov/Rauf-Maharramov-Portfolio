import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';
import { GitHubIcon, LinkedInIcon, MailIcon } from './ui/icons';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-925">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="text-lg font-semibold text-neutral-900 dark:text-white">
              {SITE_CONFIG.name}
            </div>
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {SITE_CONFIG.title}
            </p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {SITE_CONFIG.location}
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Pages
            </div>
            <div className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Connect
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <MailIcon size={16} />
                Email
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
          <p className="text-sm text-neutral-400 dark:text-neutral-500">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
