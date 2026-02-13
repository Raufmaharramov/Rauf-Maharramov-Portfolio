import { Section } from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from '@/components/ui/icons';

export default function NotFound() {
  return (
    <Section className="pt-24 md:pt-32">
      <div className="text-center">
        <p className="text-6xl font-semibold text-neutral-300 dark:text-neutral-700">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-neutral-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Button href="/">
            Go Home
            <ArrowRightIcon size={16} />
          </Button>
        </div>
      </div>
    </Section>
  );
}
