import { Button, Popconfirm } from 'antd';
import React, { useState } from 'react';

export const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    // eslint-disable-next-line no-console
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <Popconfirm title="Title" open={open} onConfirm={handleOk} okButtonProps={{ loading: confirmLoading }} onCancel={handleCancel}>
      <Button type="primary" onClick={showPopconfirm}>
        Open Popconfirm with async logic
      </Button>
    </Popconfirm>
  );
};
