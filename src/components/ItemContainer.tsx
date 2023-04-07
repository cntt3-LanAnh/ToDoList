import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { CSSProperties } from 'react';
import { AiOutlineMessage, AiOutlinePlusCircle, AiOutlineSmallDash } from 'react-icons/ai';

export interface List {
  id: string;
  uuid: string;
  title: string;
  subtitle: string;
  updatedAt: string;
  tag: string;
  avatar?: string;
  totalProgress: number;
  statusTask: string;
}
export type ItemProp = {
  type?: string;

  containerStyle?: CSSProperties;
  title?: string;
  subData: List;
};

export const Item: React.FC<ItemProp> = (props) => {
  const { subData } = props;

  return (
    <div className="shadow-md rounded-xl p-3 mt-6 ">
      <div className="flex justify-between items-center my-2">
        <button className="w-auto px-4 bg-slate-200 font-bold text-blue-600 border-none rounded-3xl h-10">{subData.tag}</button>
        <AiOutlineSmallDash />
      </div>
      <h1 className="font-bold text-xl">{subData.title}</h1>
      <div className="text-sm my-3 max-h-[40px] overflow-hidden text-ellipsis whitespace-normal">{subData.subtitle}</div>

      <p className="text-right">{subData.totalProgress}%</p>
      <ProgressBar completed={subData.totalProgress} />
      <span className="flex flex-row justify-between my-2">
        <h5 className="uppercase font-normal">{subData.subtitle}</h5>
        <p>{subData.updatedAt}</p>
      </span>

      <div className="flex justify-between mt-3">
        <img src={subData.avatar} alt="" className="w-[30px] h-[30px] align-middle rounded-full mr-2" />

        <div className="flex ">
          <AiOutlinePlusCircle className="mr-3" />
          <AiOutlineMessage />
        </div>
      </div>
    </div>
  );
};
