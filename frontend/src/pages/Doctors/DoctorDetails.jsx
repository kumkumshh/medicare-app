import React, { useState } from 'react';
import doctorImg from '../../assets/images/doctor-img02.png';
import starIcon from '../../assets/images/Star.png';
import DoctorAbout from './DoctorAbout';
import Feedback from './Feedback';
import SidePanel from './SidePanel';

const DoctorDetails = () => {
  const [tab, setTab] = useState('about');

  return (
    <section className="py-10"> {/* Optional background color for contrast */}
      {/* Add padding/margin to the entire content */}
      <div className="max-w-[1170px] px-6 md:px-10 py-10 mx-auto bg-white rounded-lg"> 
        {/* Main Grid: Image, Doctor Info, Tabs, and SidePanel */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
          {/* Left Section: Doctor Image, Details, and Tabs */}
          <div className="lg:col-span-6">
            {/* Doctor Image and Info */}
            <div className="flex lg:flex-row flex-col items-start gap-6">
              {/* Doctor Image */}
              <figure className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-lg overflow-hidden">
                <img src={doctorImg} alt="Doctor" className="w-full h-full object-cover" />
              </figure>

              {/* Doctor Info */}
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-3 text-[14px] rounded-md inline-block font-semibold">
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] mt-3 font-bold">Muhibur Rahman</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex items-center gap-1 text-[16px] text-headingColor font-semibold">
                    <img src={starIcon} alt="Star" className="w-[14px] h-[14px]" /> 4.8
                  </span>
                  <span className="text-[16px] text-textColor">(272)</span>
                </div>
                <p className="text-[14px] mt-3 text-textColor">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias!
                </p>
              </div>
            </div>

            {/* Tabs Section: Below Image and Info */}
            <div className="mt-8">
              {/* Tabs Buttons */}
              <div className="flex border-b border-gray-200">
                <button
                  onClick={() => setTab('about')}
                  className={`py-2 px-5 text-[16px] font-semibold ${tab === 'about' ? 'border-b-2 border-primaryColor text-primaryColor' : 'text-gray-600'
                    }`}
                >
                  About
                </button>
                <button
                  onClick={() => setTab('feedback')}
                  className={`py-2 px-5 text-[16px] font-semibold ${tab === 'feedback' ? 'border-b-2 border-primaryColor text-primaryColor' : 'text-gray-600'
                    }`}
                >
                  Feedback
                </button>
              </div>

              {/* Tab Content */}
              <div className="mt-5">
                {tab === 'about' && <DoctorAbout />}
                {tab === 'feedback' && <Feedback />}
              </div>
            </div>
          </div>

          {/* Side Panel: Spans 3 Columns on Large Screens */}
          <div className="lg:col-span-3">
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
