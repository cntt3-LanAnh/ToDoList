import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { CiBellOn, CiCalendar, CiCircleList, CiSearch } from 'react-icons/ci';

export const TheHeading = () => {
  return (
    <div className="flex justify-between items-center h-24 mx-6">
      <div className="flex items-center">
        <CiCircleList className="text-xl mr-9" />
        <div className="relative">
          <CiSearch className="absolute z-10 mx-[14px] top-[50%] translate-y-[-50%] text-xl" />
          <input
            placeholder="Search"
            className="bg-white outline-none border-none rounded-[30px] py-[12px] pl-[38px]  text-[16px] w-[400px] pr-[10px]"
          />
        </div>
      </div>
      <div className="flex items-center ">
        <CiBellOn className="text-xl mr-6" />
        <CiCalendar className="text-xl mr-6" />
        <div className="mr-6" style={{ border: '1px solid #c1bec1', height: '40px' }} />

        <img
          src="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg"
          alt="Avatar"
          className="w-[50px] h-[50px] align-middle rounded-full mr-2"
        />

        <span className="mr-6">Danh cho</span>
        <AiOutlineDown className="text-xl mr-6" />
      </div>
    </div>
  );
};
