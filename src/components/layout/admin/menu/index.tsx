import { HomeIcon } from 'components/icons/home';
import Link from 'next/link';
import React, { useState } from 'react';

import { MenuCollapse } from './menuCollapse';

export interface MenuObj {
  title: string;
  icon?: JSX.Element;
  children?: MenuObj[];
}

const menuList: MenuObj[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon />,
    children: [
      {
        title: 'Dashboard 1',
      },
      {
        title: 'Dashboard 1',
      },
      {
        title: 'Dashboard 1',
      },
    ],
  },
  {
    title: 'User',
    icon: <HomeIcon />,
  },
  {
    title: 'User',
  },
  {
    title: 'User',
  },
  {
    title: 'User',
  },
];

export const Menu = () => {
  const [menuChildren, setMenuChildren] = useState<MenuObj[]>([]);

  const handleSetMenuChildren = (newMenuChildren: MenuObj[]) => {
    if (menuChildren?.length) {
      setMenuChildren([]);

      return;
    }

    setMenuChildren(newMenuChildren);
  };

  return (
    <div className="bg-background-sidebar w-full text-[#9db4cb]">
      <div className="app-container">
        <ul className="flex list-none h-14 ">
          {menuList.map((menu, index) =>
            menu.children ? (
              <MenuCollapse menu={menu} key={index} setMenuChildren={handleSetMenuChildren} />
            ) : (
              <li key={index}>
                <Link href="#" className="block h-full no-underline text-inherit">
                  <div className="px-10 h-full flex items-center">
                    {menu.icon && <div className="text-lg leading-none mr-2">{menu.icon}</div>}
                    <span>{menu.title}</span>
                  </div>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      {menuChildren?.length ? (
        <div className="">
          <div className="h-1 bg-background" />
          <div className="bg-white border-l-0 border-r-0 border-t border-b border-solid border-gray-300 px-4">
            <ul className="app-container flex list-none h-10">
              {menuChildren.map((menu, index) => (
                <li key={index}>
                  <Link href="#" className="block h-full no-underline text-inherit">
                    <div className="px-10 h-full flex items-center">
                      {menu.icon && <div className="text-lg leading-none mr-2">{menu.icon}</div>}
                      <span>{menu.title}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};
