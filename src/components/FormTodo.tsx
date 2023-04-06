import React from 'react';

type Props = {
  children: React.ReactNode;
  onSubmit: () => void;
};

export const FormTodo = ({ onSubmit, children }: Props) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} className=" max-w-full w-[500px] mx-auto flex flex-col items-center">
      {children}
    </form>
  );
};
