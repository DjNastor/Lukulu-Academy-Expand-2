import type { HTMLAttributes, ReactNode } from 'react';

export type CardTone = 'default' | 'raised' | 'warm';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  tone?: CardTone;
  flush?: boolean;
}

export function Card({
  header,
  children,
  footer,
  tone = 'default',
  flush = false,
  className = '',
  ...props
}: CardProps) {
  const toneClasses: Record<CardTone, string> = {
    default: 'bg-surface shadow-[1.25rem_1.25rem_0_rgba(240,122,79,0.06)]',
    raised: 'bg-surface-2 shadow-[0_1.25rem_3rem_rgba(0,0,0,0.42)]',
    warm: 'bg-[#2a201a] shadow-[1.25rem_1.25rem_0_rgba(243,180,63,0.06)]',
  };

  return (
    <section className={`overflow-hidden border border-border ${toneClasses[tone]} ${className}`.trim()} {...props}>
      {header ? <header className="border-b border-[#332a24] px-5 py-4 sm:px-6">{header}</header> : null}
      <div className={flush ? undefined : 'px-5 py-5 sm:px-6 sm:py-6'}>{children}</div>
      {footer ? <footer className="border-t border-[#332a24] px-5 py-4 sm:px-6">{footer}</footer> : null}
    </section>
  );
}
