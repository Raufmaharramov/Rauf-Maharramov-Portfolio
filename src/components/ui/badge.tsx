interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
  onClick?: () => void;
  active?: boolean;
}

export function Badge({
  children,
  variant = 'default',
  className = '',
  onClick,
  active,
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors duration-150';

  const variants = {
    default: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300',
    outline: 'border border-neutral-200 text-neutral-600 dark:border-neutral-700 dark:text-neutral-400',
  };

  const activeStyles = active
    ? 'bg-accent-600 text-white dark:bg-accent-500 dark:text-white'
    : variants[variant];

  const clickableStyles = onClick
    ? 'cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700'
    : '';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${baseStyles} ${activeStyles} ${clickableStyles} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <span className={`${baseStyles} ${activeStyles} ${className}`}>
      {children}
    </span>
  );
}
