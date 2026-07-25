import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'neutral' | 'gold' | 'orange' | 'magenta';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  showDot?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'border-border bg-surface-2 text-text-muted',
  gold: 'border-gold bg-[#2a201a] text-gold',
  orange: 'border-orange bg-[#2a201a] text-orange',
  magenta: 'border-magenta bg-[#2a201a] text-magenta',
};

const dotClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-text-muted',
  gold: 'bg-gold',
  orange: 'bg-orange',
  magenta: 'bg-magenta',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'gap-1.5 px-2 py-1 text-[0.625rem]',
  md: 'gap-2 px-2.5 py-1.5 text-xs',
};

export function Badge({
  children,
  className = '',
  variant = 'neutral',
  size = 'sm',
  showDot = false,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex w-fit items-center border font-heading font-medium uppercase leading-none tracking-[0.12em] ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim()}
      {...props}
    >
      {showDot ? <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${dotClasses[variant]}`} /> : null}
      {children}
    </span>
  );
}
