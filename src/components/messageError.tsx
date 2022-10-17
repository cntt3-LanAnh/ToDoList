import clsx from 'clsx';
import React from 'react';

type Props = {
  message?: string;
  className?: string;
};

export const MessageError = ({ className, message }: Props) => {
  return (
    <div
      className={clsx(
        'p-3 transition-all duration-200 border border-solid rounded-md border-red-300 text-red-600 bg-red-100 w-full flex justify-items-center',
        className,
        { 'h-auto': message, 'h-0 p-0 border-0 mb-0': !message }
      )}
    >
      {<p className="text-xs">{message}</p>}
    </div>
  );
};
