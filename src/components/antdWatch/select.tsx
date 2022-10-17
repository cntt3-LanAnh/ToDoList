import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

const children: React.ReactNode[] = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

const handleChange = (value: string | string[]) => {
  // eslint-disable-next-line no-console
  console.log(`Selected: ${value}`);
};

export const App: React.FC = () => {
  return (
    <>
      <Select defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
        {children}
      </Select>
      <br />
      <br />
      <Select mode="multiple" placeholder="Please select" defaultValue={['a10', 'c12']} onChange={handleChange} style={{ width: '100%' }}>
        {children}
      </Select>
      <br />
      <br />
      <Select mode="tags" placeholder="Please select" defaultValue={['a10', 'c12']} onChange={handleChange} style={{ width: '100%' }}>
        {children}
      </Select>
    </>
  );
};
