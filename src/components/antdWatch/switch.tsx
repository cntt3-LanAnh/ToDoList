import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import React from 'react';

export const App: React.FC = () => (
  <div className="space-y-2">
    <Switch checkedChildren="accept" unCheckedChildren="cancel" defaultChecked />
    <br />
    <Switch checkedChildren="1" unCheckedChildren="0" />
    <br />
    <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
  </div>
);
