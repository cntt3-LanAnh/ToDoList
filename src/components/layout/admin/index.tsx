import { NextPageWithLayout } from 'containers/layout';

import { Header } from './header';
import { Sidebar } from './sidebar';

export const index = ({ children }: { children: NextPageWithLayout & React.ReactNode }) => {
  return (
    <div className="flex bg-primary-main min-h-screen">
      <Sidebar />
      <div className="bg-[#f1f5f9] flex-1 rounded-tl-2xl">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};
