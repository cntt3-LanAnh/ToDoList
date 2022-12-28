import { Button, Checkbox, Input } from 'antd';
import { FormControl } from 'components/formControl';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { FormHandler } from './useLogic';

export const Component = ({ formHandler }: { formHandler: FormHandler }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="h-screen flex w-full overflow-hidden">
        <div className="flex w-[40rem] relative justify-center">
          <div className="absolute inset-0 bg-primary rounded-[100%] rotate-12 -ml-[25%] -mt-[20%] -mb-[20%]" />
          <div className="z-10 self-center text-white flex flex-col ">
            <img src="/images/cloud_network.png" alt="cloud_network" className="w-96 h-auto  " />
            <h1 className="text-5xl mt-3">{t('common:hello')}</h1>
            <p className="mt-1">Manage all your contents accounts in one place</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <form className="self-center min-w-[30rem]">
            <h1 className="font-bold text-3xl">Sign In</h1>
            <FormControl label="Email" classes={{ root: 'mt-14' }} name="email" control={formHandler.control}>
              {() => <Input />}
            </FormControl>
            <FormControl label="Password" classes={{ root: 'mt-5' }} name="email" control={formHandler.control}>
              {() => <Input type="password" />}
            </FormControl>
            <div className="flex items-center mt-5 justify-between">
              <Checkbox {...formHandler.register('remember')}>Remember</Checkbox>
              <Link href="/">Forgot Password?</Link>
            </div>
            <div className="mt-7">
              <Button type="primary" className="px-10" onClick={formHandler.handleSubmit}>
                Login
              </Button>
              <Button className="ml-7 px-10">Register</Button>
            </div>
            <p className="mt-24">By signin up, you agree to our Terms and Conditions & Privacy Policy</p>
          </form>
        </div>
      </div>
    </>
  );
};
