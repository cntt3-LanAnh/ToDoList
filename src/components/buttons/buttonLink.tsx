import clsx from 'clsx';
import React from 'react';

enum ButtonType {
  'primary' = 'primary',
  'secondary' = 'primary',
  'outline' = 'primary',
}

type Props = {
  href: string;
  className?: string;
  children?: React.ReactNode;
  type?: ButtonType;
  target?: React.HTMLAttributeAnchorTarget;
};

export const ButtonLink = ({ href, children, className, type = ButtonType.primary, target }: Props) => {
  return (
    <a
      target={target}
      className={clsx(
        'min-h-[48px] flex items-center justify-center px-5 rounded-[4px] font-medium',
        { 'hover:bg-primary-hover bg-primary text-white hover:text-white active:': type == ButtonType.primary },
        className
      )}
      href={href}
      rel="noreferrer"
    >
      {children}
    </a>
  );
};
