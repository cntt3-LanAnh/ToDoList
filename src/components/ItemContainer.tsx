import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import { CSSProperties } from 'react';
import { AiOutlineMessage, AiOutlinePlus, AiOutlinePlusCircle, AiOutlineSmallDash } from 'react-icons/ai';

interface subData {
  description?: string;
  avata: string;
  tag?: string;
}
export type ItemProp = {
  type?: string;
  containerStyle?: CSSProperties;
  title?: string;
  subdata: Array<subData>;
};

export const Item: React.FC<ItemProp> = (props) => {
  const { containerStyle, title, subdata } = props;

  return (
    <div style={containerStyle} className="w-1/4">
      <div className="flex mb-6 justify-between">
        {title}
        <div className="w-[30px] h-[30px] relative bg-purple-600 rounded-full">
          <AiOutlinePlus className="absolute top-[20%] left-1/4" />
        </div>
      </div>

      {subdata.map((item: subData, index: number) => {
        return (
          <div className="shadow-lg rounded-xl p-3" key={index}>
            <div className="flex justify-between items-center">
              <button className="w-auto px-4 bg-slate-200 font-bold text-blue-600 border-none rounded-3xl h-10">{item.tag}</button>
              <AiOutlineSmallDash />
            </div>
            <p className="text-sm my-3">{item.description}</p>

            <p className="text-right">50</p>
            <ProgressBar completed="50" />

            <div className="flex justify-between mt-3">
              <img src={item.avata} alt="" className="w-[30px] h-[30px] align-middle rounded-full mr-2" />

              <div className="flex ">
                <AiOutlinePlusCircle className="mr-3" />
                <AiOutlineMessage />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
