'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons';

interface CopyLinkButtonProps {
  url: string;
  className?: string;
}

export function CopyLinkButton({ url, className = '' }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Link copied' : 'Copy link to clipboard'}
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all duration-150 hover:border-neutral-300 hover:bg-neutral-50 hover:text-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus-visible:outline-white ${className}`}
      >
        {copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
      </button>
      {copied && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 animate-fade-in whitespace-nowrap rounded-md bg-neutral-900 px-3 py-1.5 text-xs font-medium text-white shadow-lg dark:bg-white dark:text-neutral-900">
          Copied!
          <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-neutral-900 dark:bg-white" />
        </div>
      )}
    </div>
  );
}
