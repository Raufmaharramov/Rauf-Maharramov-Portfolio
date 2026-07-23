import Link from 'next/link';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent-500 to-indigo-500 text-white hover:from-accent-600 hover:to-indigo-600 dark:from-accent-400 dark:to-indigo-400 dark:hover:from-accent-500 dark:hover:to-indigo-500 shadow-md hover:shadow-lg',
  secondary:
    'border border-neutral-300 text-neutral-700 hover:bg-white hover:border-accent-400 hover:text-accent-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:border-accent-500 dark:hover:text-accent-400',
  ghost:
    'text-neutral-600 hover:text-accent-600 hover:bg-accent-50 dark:text-neutral-400 dark:hover:text-accent-400 dark:hover:bg-accent-900/30',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', className = '', children } = props;

  const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600 dark:focus-visible:outline-accent-400 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if ('href' in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = 'button', onClick, disabled } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
