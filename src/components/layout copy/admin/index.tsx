import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h1>{'layout admin'}</h1>
      <main className="h-full w-full pt-[120px]">{children}</main>
    </>
  );
}
