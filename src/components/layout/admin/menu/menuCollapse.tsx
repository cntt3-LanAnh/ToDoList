import { Button } from 'antd';
import { ArrowDown } from 'components/icons/arrowDown';
import React from 'react';

import { MenuObj } from './index';

export const MenuCollapse = ({ menu, setMenuChildren, isActive }: { menu: MenuObj; setMenuChildren: any; isActive: boolean }) => {
  return (
    <div className="flex flex-col relative">
      <Button className="!text-inherit p-0 h-auto flex-1" type="text" onClick={() => setMenuChildren(menu.children)}>
        <div className="h-full flex items-center">
          {menu.icon && <div className="text-lg leading-none mr-2">{menu.icon}</div>}
          <span>{menu.title}</span>
          <div className="ml-2 text-lg leading-none">
            <ArrowDown />
          </div>
        </div>
      </Button>
      {isActive && (
        <div className="absolute left-1/2 border-b-0 border-solid bottom-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[8px] border-background-sidebar -mb-[8px]" />
      )}
    </div>
  );
};
