import React from 'react';

export type Props = {
  title: string;
  name?: string;
  error?: string;
  children?: React.ReactNode;
};

export const FormItem = ({ title, name, children, error }: Props) => {
  return (
    <div className=" py-2 w-full">
      <label htmlFor={name} className="mr-8">
        {title}
      </label>
      <div>
        {children}
        <span>{error}</span>
      </div>
    </div>
  );
};
