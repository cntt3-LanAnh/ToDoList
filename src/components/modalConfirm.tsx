import { Button, Modal } from 'antd';
import clsx from 'clsx';
import React from 'react';

export interface ModalProps {
  open: boolean;
  title?: string;
  btnOk?: string;
  btnCancel?: string;
  handleSubmit?: () => void;
  message?: string;
  setOpen: (isOpen: boolean) => void;
  closable?: boolean;
  body?: React.ReactNode;
}

export const ModalConfirm = ({ open, title, btnOk, btnCancel, handleSubmit, message, setOpen, closable = true, body }: ModalProps) => {
  return (
    <>
      <Modal
        centered
        open={open}
        bodyStyle={{ padding: '0px' }}
        className="width-unset"
        maskClosable={false}
        closable={closable}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <div className="font-['Roboto'] py-5 px-[26px] sm:px-2 sm:min-w-0 sm:max-w-[100vw] sm:overflow-hidden">
          <div className="flex flex-col w-full sm:min-w-full sm:px-5">
            {title && <p className="text-base font-bold mb-[34px]">{title}</p>}
            {message && <p className={clsx('whitespace-pre text-center text-lg sm:whitespace-normal', { 'mt-9': title })}>{message}</p>}
            {body}
            <div className={'flex self-center'}>
              {btnCancel && (
                <Button
                  className="w-64 font-bold text-[18px] hover:bg-primary-light-500 text-black-lighter-2 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {btnCancel}
                </Button>
              )}{' '}
              {btnOk && (
                <Button className="w-64 btn-primary ml-6 font-bold text-[18px]" onClick={handleSubmit}>
                  {btnOk}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
