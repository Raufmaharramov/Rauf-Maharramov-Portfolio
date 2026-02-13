'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { MailIcon, LinkedInIcon, GitHubIcon, CopyIcon, CheckIcon, MapPinIcon } from '@/components/ui/icons';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this email address:', SITE_CONFIG.email);
    }
  };

  return (
    <Section className="pt-24 md:pt-32">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
          I am open to senior/staff-level frontend or full-stack roles aligned with EU/UK
          timezones. Feel free to reach out for opportunities, collaborations, or just to connect.
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <MapPinIcon size={16} />
          <span>{SITE_CONFIG.location} &middot; {SITE_CONFIG.timezone}</span>
        </div>

        <div className="mt-12 space-y-6">
          <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                <MailIcon size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  Email
                </div>
                <div className="font-medium text-neutral-900 dark:text-white">
                  {SITE_CONFIG.email}
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <Button href={`mailto:${SITE_CONFIG.email}`}>
                <MailIcon size={16} />
                Send Email
              </Button>
              <Button variant="secondary" onClick={copyEmail}>
                {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
                {copied ? 'Copied!' : 'Copy Address'}
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-neutral-200 p-6 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                <LinkedInIcon size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  LinkedIn
                </div>
                <div className="font-medium text-neutral-900 dark:text-white">
                  Connect with me
                </div>
              </div>
            </a>

            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-neutral-200 p-6 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400">
                <GitHubIcon size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  GitHub
                </div>
                <div className="font-medium text-neutral-900 dark:text-white">
                  View my code
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-neutral-50 p-6 dark:bg-neutral-900">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            What I am looking for
          </h2>
          <ul className="mt-3 space-y-2 text-neutral-600 dark:text-neutral-400">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Senior or Staff-level Frontend / Full-Stack Engineering roles
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Remote or hybrid positions aligned with EU/UK timezones
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Teams working on complex frontend architecture, performance, or developer experience
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Product companies with real engineering challenges at scale
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
