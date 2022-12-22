import { Checkbox, TextField } from '@mui/material';

export const Component = () => {
  return (
    <div className="h-screen flex w-full overflow-hidden">
      <div className="flex w-[40rem] relative justify-center">
        <div className="absolute inset-0 bg-primary-main rounded-[100%] rotate-12 -ml-[25%] -mt-[20%] -mb-[20%]" />
        <div className="z-10 self-center text-white flex flex-col ">
          <img src="/images/cloud_network.png" alt="cloud_network" className="w-96 h-auto  " />
          <h1 className="text-5xl mt-3">CMS</h1>
          <p className="mt-1">Manage all your e-commerce accounts in one place</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <form className="self-center min-w-[30rem]">
          <h1 className="font-bold text-3xl">Sign In</h1>
          <TextField className="mt-14" placeholder="Email" fullWidth />
          <TextField className="mt-5" placeholder="Password" fullWidth />
          <div className="flex items-center mt-5">
            <Checkbox />
            <p>Remember me</p>
          </div>
          <p className="mt-24">By signin up, you agree to our Terms and Conditions & Privacy Policy</p>
        </form>
      </div>
    </div>
  );
};
