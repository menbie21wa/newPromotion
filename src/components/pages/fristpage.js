import React, {useState } from 'react';
import {useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { viewOrganization } from '../../actions/orgAction';
import  AddressBaseUrl from "../../utils/BaseUrl";
import Loading1 from './loading';
import { RxDotFilled } from 'react-icons/rx';
import {dataVacancy} from '../vacaData';
const Fristpage = (props) =>{
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(viewOrganization());
     },[]);
  const { org } = useSelector(
   (state)=> state.org);
//  console.log("all organizations are : ", org);
const [data, setData] =useState(dataVacancy || '');
useEffect(() => {
  setData(dataVacancy);
}, [dataVacancy])

  const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? org.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === org?.promotedOrgs?.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

 return(

    <>
{/* bg-[#E3E6E6] */}
    <div className="h-52 md:h-screen w-full ">
       <div className='h-full w-full m-auto relative group'>

{/* Left Arrow */}
  {/* <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl py-2 md:py-12 lg:py-12 hover:border-2 border-black bg-white/20 hover:bg-black/20 text-black cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide}  className='h-12 w-12'/>
  </div> */}
     {/* <div class="flex md:hidden lg:hidden opacity-100 duration-300 absolute inset-0  flex justify-center items-center text-3xl text-white font-semibold italic">ኢጵላሣጵ</div> */}

{/* Right Arrow */}
         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl hover:border-2 py-2 md:py-12 lg:py-12 bg-white/40 rounded-sm hover:bg-black/20 border-black text-black cursor-pointer z-10'>
           <BsChevronCompactRight onClick={nextSlide} className='h-12 w-12' />
         </div>

        <div
          // style={{ backgroundImage: `url(${org && org[currentIndex]?.url})` }}
          className=' float-right mt-20 md:mr-20 ml-16 rounded-2xl w-1/3 h-5/6 bg-center duration-700 relative overflow-hidden bg-cover bg-no-repeat'
          >
          <img 
          //src={`/img/telegramecomerece.jpg`}
          src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}

          />
            {/* <img src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}  className='w-full h-full'/> */}
         </div>
                 {/* <div className="mb-6 lg:mb-0">
                  <div className='lg:w-6/12 md:w-5/12 opacity-100 duration-300 absolute inset-0 left-[30%] top-[30%] justify-center items-center text-3xl text-black font-semibold italic m-2 mx-2 mb-4'>
                  <h1 className=' text-[#1390D0]'>{`${org?.[currentIndex]?.name}`}</h1>
                   <h1 className='py-2 pl-4 text-[#F49F08]'>{`${org?.[currentIndex]?.businessSector}`}</h1>
                  </div>    
                 </div> */}
          <div
            className="absolute top-0 right-0 bottom-0 left-0  md:ml-0 ml-20  w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0,0,0)" }}
          >
            <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto xl:mt-40 md:mt-32 mt-20">
              <div className="flex  justify-center items-center h-full">
                <div className="text-center md:-ml-80 ml-5 text-white">
                  <h1 className="text-4xl md:text-4xl xl:text-5xl -ml-80 text-[#F49F08] font-bold font-display tracking-tight leading-tight italic">
                  {`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}
                  </h1>
                  <p className="text-2xl md:text-2xl xl:text-3xl -ml-40 mt-5 text-[#F49F08] font-bold font-display tracking-tight leading-tight">
                  {`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.businessSector}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
   </div>
  </>
 )}
export default Fristpage;