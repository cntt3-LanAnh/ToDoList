import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { CSSProperties } from 'react';
import { AiOutlineMessage, AiOutlinePlus, AiOutlinePlusCircle, AiOutlineSmallDash } from 'react-icons/ai';

interface subData {
  description: string;
  avatar: string;
  tag: string;
}
export type ItemProp = {
  type?: string;
  containerStyle?: CSSProperties;
  title?: string;
  subData: Array<subData>;
};

export const Item: React.FC<ItemProp> = (props) => {
  const { containerStyle, title, subData } = props;

  return (
    <div className="grid grid-cols-1 gap-4">
      <div style={containerStyle} className="max-w-[280px]">
        <div className="flex mb-6 justify-between">
          <h3> {title}</h3>
          <div className="w-[30px] h-[30px] flex items-center bg-purple-600 rounded-full">
            <AiOutlinePlus className="w-full" />
          </div>
        </div>

        {subData.map((item: subData, index: number) => {
          return (
            <div className="shadow-md rounded-xl p-3 mt-6" key={index}>
              <div className="flex justify-between items-center">
                <button className="w-auto px-4 bg-slate-200 font-bold text-blue-600 border-none rounded-3xl h-10">{item.tag}</button>
                <AiOutlineSmallDash />
              </div>
              <div className="text-sm my-3 max-h-[40px] overflow-hidden text-ellipsis whitespace-normal">{item.description}</div>

              <p className="text-right">50</p>
              <ProgressBar completed="50" />

              <div className="flex justify-between mt-3">
                <img src={item.avatar} alt="" className="w-[30px] h-[30px] align-middle rounded-full mr-2" />

                <div className="flex ">
                  <AiOutlinePlusCircle className="mr-3" />
                  <AiOutlineMessage />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
