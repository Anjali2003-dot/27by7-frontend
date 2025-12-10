import React from "react";
import HitachiLogo from '../assets/logos/Hitachi.png';
import SbiLogo from '../assets/logos/SBI.png';
import MuoroLogo from '../assets/logos/Muoro.png';
import EdurekaLogo from '../assets/logos/edureka.png';
import NvidiaLogo from '../assets/logos/nvidia.png';


const Stats = () => {
  return (
    <section className="py-20 bg-white">

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
        Impact That Accelerates Business Growth
      </h2>

      {/* Stats Cards */}
      {/* <div className="flex gap-6 flex-wrap"> */}
        <div className="max-w-[1748px] flex gap-10 flex-wrap px-6">

          {/* Card 1 */}
          <div className="w-[474.38px] h-[287px] border rounded-xl shadow-sm p-8 mx-auto">
            <h3 className="text-4xl font-bold text-blue-600">120+</h3>
            <p className="mt-3 text-gray-700 text-lg font-medium">Resources Available</p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Bench strength of 350+, ensuring scalability and flexibility for client needs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[474.38px] h-[287px] border rounded-xl shadow-sm p-8 mx-auto">
            <h3 className="text-4xl font-bold text-blue-600">200+</h3>
            <p className="mt-3 text-gray-700 text-lg font-medium">Projects Delivered</p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Successfully completed projects for clients across India and the U.S.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[474.38px] h-[287px] border rounded-xl shadow-sm p-8 mx-auto">
            <h3 className="text-4xl font-bold text-blue-600">30+</h3>
            <p className="mt-3 text-gray-700 text-lg font-medium">Strategic Partnerships</p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              Strong collaborations with industry leaders, enabling innovation and growth.
            </p>
          </div>

        </div>
      {/* </div> */}

      {/* Logos */}
      <div className="w-full flex flex-wrap justify-center items-center gap-10 mt-8 px-6">
         {/* div className="max-w-[1748px] h-[76px] flex justify-between items-center px-8" */}

          <img src={HitachiLogo} className="w-[272.71px] h-[60.64px] object-contain" />
          <img src={MuoroLogo} className="w-[234.87px] h-[71.03px] object-contain" />
          <img src={EdurekaLogo} className="w-[178.1px] h-[48.22px] object-contain" />
          <img src={SbiLogo} className="w-[128.01px] h-[55.04px] object-contain" />
          <img src={NvidiaLogo} className="w-[203.7px] h-[70.51px] object-contain" />

         {/* </div> */}
      </div>

    </section>
  );
};

export default Stats;
