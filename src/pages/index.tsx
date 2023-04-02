import { Item } from 'components/ItemContainer';
import { Layout } from 'components/Layout';
import React from 'react';
import { AiOutlineCheckSquare, AiOutlineClockCircle, AiOutlineDown, AiOutlineEdit, AiOutlineSmallDash } from 'react-icons/ai';

import { GChart } from '../components/GChart';

export default function HomePage() {
  const activeUsers = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7],
  ];
  const options = {
    title: 'My Daily Activities',
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <div>
      <Layout>
        <div className="flex justify-between mx-6">
          <div className="bg-white rounded-[30px] min-h-screen w-[72%] p-6">
            <div className="flex justify-between">
              <h1>Project</h1>
              <div className="flex items-center">
                <AiOutlineSmallDash />
                <button className="bg-purple-500 text-white rounded-3xl w-auto px-4 ml-6 border-none h-11">Creacte Project</button>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Item title="Started" />
              <Item title="On Going" />
              <Item title="Completed" />
            </div>
          </div>
          <div className="min-h-screen w-[25%] ">
            <div className="bg-white rounded-[30px] p-6" style={{ minHeight: '70vh' }}>
              <div className="rounded-2xl bg-purple-600 p-3 flex justify-between">
                <div>
                  <p>Select</p>
                  <h3>Design Team</h3>
                </div>
                <div>
                  <img
                    src="https://ben.com.vn/tin-tuc/wp-content/uploads/2021/12/anh-che-cho-hai-huoc-cho-dien-thoai-1.jpg"
                    alt="Avatar"
                    className="w-[50px] h-[50px] align-middle rounded-full mr-2"
                  />
                </div>
              </div>
              <GChart chartType="PieChart" width="100%" height="400px" data={activeUsers} options={options} />

              <div>
                <h3>Project</h3>
                <div className="grid grid-cols-2 grid-rows-2 gap-5">
                  <div className="bg-purple-600 rounded-2xl p-3">
                    <p>TOTAL</p>
                    <div className="flex mt-2  ">
                      <div style={{ border: '2px solid blue' }} />
                      <p className="font-normal ml-1">114</p>
                    </div>
                  </div>
                  <div className="bg-orange-200 rounded-2xl p-3">
                    <p>COMPLETED</p>
                    <div className="flex mt-2 ">
                      <div style={{ border: '2px solid orange' }} />
                      <p className="font-normal ml-1">114</p>
                    </div>
                  </div>
                  <div className="bg-pink-200 rounded-2xl p-3">
                    <p>IN PROGRESS</p>
                    <div className="flex mt-2 ">
                      <div style={{ border: '2px solid pink' }} />
                      <p className="font-normal ml-1">114</p>
                    </div>
                  </div>
                  <div className="bg-purple-100 rounded-2xl p-3">
                    <p>WAITING</p>
                    <div className="flex mt-2 ">
                      <div style={{ border: '2px solid purple' }} />
                      <p className="font-normal ml-1">114</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[30px] mt-6 p-6 " style={{ minHeight: '30vh' }}>
              <div className="flex justify-between items-center">
                <div className="flex items-end">
                  <div className="bg-purple-500 w-12 h-11 relative rounded-md ">
                    <AiOutlineClockCircle className="absolute left-[30%] top-[32%]" />
                  </div>
                  <div className="ml-6">
                    <p>Sunday,20 December</p>
                    <p className="font-bold"> 08:00-11:00 AM</p>
                  </div>
                </div>

                <div>
                  <AiOutlineEdit />
                </div>
              </div>
              <div style={{ borderTop: '1px solid ' }} className="my-6" />
              <div className="flex justify-between items-center">
                <div className="flex items-end">
                  <div className="bg-blue-600 w-12 h-11 relative rounded-md ">
                    <AiOutlineCheckSquare className="absolute left-[30%] top-[32%]" />
                  </div>
                  <div className="ml-6">
                    <p>Delaration centre</p>
                    <p className="font-bold"> Internal Messages</p>
                  </div>
                </div>

                <div>
                  <AiOutlineDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
