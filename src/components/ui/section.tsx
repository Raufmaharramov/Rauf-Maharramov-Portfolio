interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="mx-auto max-w-content px-6">{children}</div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-neutral-500 dark:text-neutral-400">{subtitle}</p>
      )}
    </div>
  );
}
