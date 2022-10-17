import { Cascader } from 'antd';
import type { DefaultOptionType } from 'antd/es/cascader';
import React from 'react';

interface Option {
  value: string;
  label: string;
  children?: Option[];
  disabled?: boolean;
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
          {
            value: 'xiasha',
            label: 'Xia Sha',
            disabled: true,
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua men',
          },
        ],
      },
    ],
  },
];

const filter = (inputValue: string, path: DefaultOptionType[]) =>
  path.some((option) => (option.label as string).toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

export const App: React.FC = () => (
  // eslint-disable-next-line no-console
  <Cascader options={options} placeholder="Please select" showSearch={{ filter }} onSearch={(value) => console.log(value)} />
);
