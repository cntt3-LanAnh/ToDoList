import { Button, message } from 'antd';
import React from 'react';

const key = 'updatable';

const openMessage = () => {
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

export const App: React.FC = () => (
  <Button type="primary" onClick={openMessage}>
    Open the message box
  </Button>
);
