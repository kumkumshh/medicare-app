import { formateDate } from '../../utils/formateDate';

const DoctorAbout = () => {
  return (
    <div className="px-20 mt-16 mb-16"> {/* Increased padding and margin */}
      <div>
        <h3 className='text-[22px] leading-[32px] text-headingColor font-semibold flex items-center gap-2'>
          About of
          <span className='text-irisBlueColor font-bold text-[26px] leading-9'>
            Muhibur Rahman
          </span>
        </h3>
        <p className="text__para mt-6"> {/* Added top margin for spacing */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, cupiditate molestias architecto cum eveniet quia, odio eum pariatur ab voluptatem nisi sunt dolores rem neque, repellat cumque adipisci dolorem? Provident sed eos, fuga dolore rerum officiis laudantium molestiae quod voluptatum? Delectus consectetur laborum reiciendis asperiores suscipit rerum eligendi consequuntur nobis!
        </p>
      </div>

      <div className="mt-16"> {/* Increased top margin */}
        <h3 className='text-[22px] leading-[32px] text-headingColor font-semibold'>
          Education
        </h3>

        <ul className='pt-6 mb-8'> {/* Increased top padding and margin */}
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-8 mb-[40px]"> {/* Increased gap and bottom margin */}
            <div>
              <span className='text-irisBlueColor text-[18px] leading-6 font-semibold'>
                {formateDate('02-12-2008')} - {formateDate('12-04-2010')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
            </div>
            <p className='text-[16px] leading-5 font-medium text-textColor'>
              New Apollo Hospital, New York
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-8 mb-[40px]"> {/* Increased gap and bottom margin */}
            <div>
              <span className='text-irisBlueColor text-[18px] leading-6 font-semibold'>
                {formateDate('12-04-2010')} - {formateDate('12-04-2014')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
            </div>
            <p className='text-[16px] leading-5 font-medium text-textColor'>
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>

      <div className='mt-16'> {/* Increased top margin */}
        <h3 className='text-[22px] leading-[32px] text-headingColor font-semibold'>
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[40px] pt-6 md:p-6"> {/* Increased grid gap and padding */}
          <li className="p-6 rounded bg-[#fff9ea]"> {/* Increased padding */}
            <span className="text-yellowColor text-[17px] leading-6 font-semibold">
              {formateDate('02-12-2008')} - {formateDate('12-04-2010')}
            </span>
            <p className="text-[18px] leading-6 font-medium text-textColor mt-2"> {/* Added margin-top */}
              PHD in Surgeon
            </p>
            <p className='text-[16px] leading-5 font-medium text-textColor mt-1'>
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="p-6 rounded bg-[#fff9ea]"> {/* Increased padding */}
            <span className="text-yellowColor text-[17px] leading-6 font-semibold">
              {formateDate('02-12-2008')} - {formateDate('12-04-2010')}
            </span>
            <p className="text-[18px] leading-6 font-medium text-textColor mt-2"> {/* Added margin-top */}
              PHD in Surgeon
            </p>
            <p className='text-[16px] leading-5 font-medium text-textColor mt-1'>
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DoctorAbout;
