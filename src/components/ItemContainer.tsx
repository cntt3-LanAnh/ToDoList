import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { CSSProperties } from 'react';
import { AiOutlineMessage, AiOutlinePlus, AiOutlinePlusCircle, AiOutlineSmallDash } from 'react-icons/ai';

export type ItemProp = {
  type?: string;
  containerStyle?: CSSProperties;
  title?: string;
};

export const Item: React.FC<ItemProp> = (props) => {
  const { containerStyle, title } = props;

  return (
    <div style={containerStyle} className="w-1/4">
      <div className="flex mb-6 justify-between">
        {title}
        <div className="w-[30px] h-[30px] relative bg-purple-600 rounded-full">
          <AiOutlinePlus className="absolute top-[20%] left-1/4" />
        </div>
      </div>

      <div className="shadow-lg rounded-xl p-3">
        <div className="flex justify-between items-center">
          <button className="w-auto px-4 bg-slate-200 font-bold text-blue-600 border-none rounded-3xl h-10">eee</button>
          <AiOutlineSmallDash />
        </div>
        <p className="text-sm my-3">danh cho dien yeu lan anh</p>

        <p className="text-right">50</p>
        <ProgressBar completed="50" />

        <div className="flex justify-between mt-3">
          <p>danh chos dien yeu</p>
          <div className="flex ">
            <AiOutlinePlusCircle className="mr-3" />
            <AiOutlineMessage />
          </div>
        </div>
      </div>
    </div>
  );
};
