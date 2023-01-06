import { NextPageWithLayout } from 'containers/layout';

import { Menu } from './menu';

export const index = ({ children }: { children: NextPageWithLayout & React.ReactNode }) => {
  return (
    <div className="flex bg-background min-h-screen flex-col">
      <Menu />
      <div className="flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
};
