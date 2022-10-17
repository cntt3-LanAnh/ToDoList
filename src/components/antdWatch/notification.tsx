import { SmileOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';
import React from 'react';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
};

export const App: React.FC = () => (
  <Button type="primary" onClick={openNotification}>
    Open the notification box
  </Button>
);
