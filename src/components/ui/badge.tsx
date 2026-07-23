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
  const baseStyles = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-all duration-300 hover:scale-105';

  const variants = {
    default: 'bg-gradient-to-r from-accent-500 to-indigo-500 text-white dark:from-accent-400 dark:to-indigo-400',
    outline: 'border border-accent-200 text-accent-700 hover:border-accent-400 hover:bg-accent-50 dark:border-accent-800 dark:text-accent-300 dark:hover:border-accent-600 dark:hover:bg-accent-900/30',
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
