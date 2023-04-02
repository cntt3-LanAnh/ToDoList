import { CSSProperties } from 'react';

import { TheHeading } from './TheHeading';
import { Sidebar } from './TheSideBar';

export type LayoutProps = {
  type?: string;
  children: JSX.Element;
  containerStyle?: CSSProperties;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, containerStyle } = props;

  return (
    <main className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 aspect-square md:p-5" style={containerStyle}>
      <div className="min-h-screen flex flex-nowrap w-full md:static relative">
        <Sidebar />
        <div className="min-w-0 overflow-auto1 md:w-5/6 p-4 md:pb-0 md:w-aotu w-full">
          <TheHeading />
          {children}
        </div>
      </div>
    </main>
  );
};
