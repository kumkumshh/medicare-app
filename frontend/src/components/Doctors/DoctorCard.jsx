import React from 'react';
// import {doctors} from './../../assets/data/doctors';
import starIcon from '../../assets/images/Star.png';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const DoctorCard = ({ doctor }) => {

    const { name, avgRating, totalRating, photo, specialization, totalPatients, hospital } = doctor
    return (
        <div className='p-5 lg:p-8'>
            <div>
                <img src={photo} className='w-full' alt="" />
            </div>

            <h2 className='text-[18px] leading-[30px] lg:text-[20px] lg:leading-9 text-headingColor font-[700] lg:mt-1'>
                {name}
            </h2>

            <div className='mt-1 lg:mt-1 flex items-center justify-between'>
                <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-1 lg:px-2 text-[10px] rounded leading-4 lg:text-[13px] lg:leading-7 font-semibold'>{specialization}</span>

                <div className='flex items-center gap-[10px]'>
                    <span className='flex item-center gap-[6px] text-[12px] leading-6 lg:text-[14px] lg:leading-7 font-semibold text-headingColor'><img src={starIcon} alt="" />{avgRating} </span>
                    <span className='text-[12px] leading-6 lg:text-[14px] lg:leading-7 font-[400] text-textColor'>({totalRating})</span>
                </div>
            </div>

            <div className='mt-[15px] lg:mt-2 flex items-center justify-between'>
                <div>
                    <h3 className='text-[14px] leading-7 lg:text-[16px] lg:leading-[30px] font-semibold text-heading'>+{totalPatients} patients</h3>
                    <p className='text-[12px] leading-6 font-[400] text-textColor'>At {hospital}</p>
                </div>

                <Link to='/doctors' className='w-[40px] h-[40px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
            </div>
        </div>
    );
};

export default DoctorCard;