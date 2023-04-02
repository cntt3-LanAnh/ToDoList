import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { CiClock2, CiHome, CiSettings, CiSquareCheck, CiUser, CiViewList } from 'react-icons/ci';

export const Sidebar = () => {
  return (
    <div className="min-h-screen bg-purple-700 w-[90px] sticky">
      <div className="flex flex-col items-center justify-between">
        <div className="mt-10 mb-32 font-bold text-purple-200 text-2xl">LOGO</div>
        <div className="flex flex-col">
          <CiHome className="text-xl" />
          <CiUser className="text-xl mt-8" />
          <CiSquareCheck className="text-xl mt-8" />
          <CiClock2 className="text-xl mt-8" />
          <CiViewList className="text-xl mt-8" />
          <CiSettings className="text-xl mt-8" />
        </div>
        <div className="mt-32">
          <AiOutlineLogout className="text-xl " />
        </div>
      </div>
    </div>
  );
};
