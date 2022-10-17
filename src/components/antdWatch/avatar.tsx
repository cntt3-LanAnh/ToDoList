import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from 'react';

export const App: React.FC = () => (
  <div className="space-y-4">
    <div className="space-x-2">
      <Avatar size={64} icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="small" icon={<UserOutlined />} />
    </div>
    <div className="space-x-2">
      <Avatar shape="square" size={64} icon={<UserOutlined />} />
      <Avatar shape="square" size="large" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </div>
  </div>
);
