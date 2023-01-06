import { Button } from 'antd';
import { ArrowDown } from 'components/icons/arrowDown';
import React from 'react';

import { MenuObj } from './index';

export const MenuCollapse = ({ menu, setMenuChildren }: { menu: MenuObj; setMenuChildren: any }) => {
  return (
    <Button className="!text-inherit p-0 h-auto" type="text" onClick={() => setMenuChildren(menu.children)}>
      <div className="h-full flex items-center">
        {menu.icon && <div className="text-lg leading-none mr-2">{menu.icon}</div>}
        <span>{menu.title}</span>
        <div className="ml-2 text-lg leading-none">
          <ArrowDown />
        </div>
      </div>
    </Button>
  );
};
