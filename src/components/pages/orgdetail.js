  import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
  import AddressBaseUrl from '../../utils/BaseUrl';
  import { RxDotFilled } from 'react-icons/rx';
  import { viewOrganization } from '../../actions/orgAction';
  import { useNavigate } from 'react-router-dom';
  import {dataVacancy} from '../vacaData';
   function Orgdetail() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { org } = useSelector(
    (state) => state.org )
    const [data, setData] =useState(dataVacancy || '');
    console.log("organization yibeee list : ", org?.promotedOrgs);
  // console.log("organization logo name : ", org?.promotedOrgs && org?.promotedOrgs?.name);
  useEffect(() =>{
    dispatch(viewOrganization());
  },[])
  useEffect(() => {
    setData(dataVacancy);
  }, [dataVacancy])
 //console.log("organization list : ", org)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count,setCount]=useState(0) 
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? org?.promotedOrgs?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
   //console.log("organization length : ", org?.promotedOrgs?.length);
  const nextSlide = () => {
    const isLastSlide = currentIndex === org?.promotedOrgs?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //console.log("newIndex : ", newIndex);
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const orgHandler = (id) =>{
    navigate("org/"+id)
    //  navigate("org")
  }
  return (
   <div className='bg-[#E3E6E6] md:mt-0 mt-20'>
    <div className="hidden md:flex items-center py-3 mb-4 ">
      <button
        className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
        <span className="mr-2 ml-7 underline decoration-pink-800 decoration-4 underline-offset-8">ድርጅቶች</span>
      </button>
    </div>
    <div className='relative bg-white w-full ml-5 h-full md:flex lg:flex pb-8'>    
       <div className='relative m-8 md:w-6/12'>
         <h1 className='md:text-3xl text-lg italic'>{`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}</h1>
         <h1 className='md:flex pt-0 md:pt-6 lg:pt-6'  onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}>
         {`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description}`}
         </h1>
        <div className='pt-0 md:pt-4 lg:pt-4'>
          <a>
            <button className='bg-[#0397FF] text-white font-semibold md:py-1 lg:py-1 lg:px-12 md:px-12 px-2 h-full'  onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}>ዝርዝር መረጃ</button>
          </a>           
          {/* <a>
            <button className='bg-[#0397FF] text-white font-semibold md:py-1 lg:py-1 lg:px-12 md:px-12 px-2 h-full'  onClick={() => orgHandler()}>ዝርዝር መረጃ</button>
          </a>   */}
        </div>
       </div>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='md:w-5/12 h-full rounded-2xl bg-center bg-cover duration-500 pt-4'
      >
    <img src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`} className='h-52 md:h-96 lg:h-96 w-full' alt='images not found'
        onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}
        /> 
    <div className='flex mb-0 justify-center py-2 pb-8 ml-8'>
      {
      (org?.promotedOrgs?.length)>0
        ?(
         org?.promotedOrgs?.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
          {(org?.promotedOrgs?.length)<=6
          ?(
            <button className=' bg-white border-2 w-9 h-9 rounded-xl pb-3 m-1'>
          {slideIndex+1}
            {/* <RxDotFilled/> */}
          </button>
          ):""
        }
       </div>
        ))):(null)
        }
      {/* Left Arrow */}

       {(org?.promotedOrgs?.length)>6
          ?(
         <> 
        <button className=' bg-white border-2 w-9 h-9 rounded-xl font-semibold  m-1'>
         1
        </button>
          <button className=' bg-white border-2 w-9 h-9 rounded-2xl font-semibold m-1'>
          2 
          </button>
          <button className=' bg-white border-2 w-9 h-9 font-semibold rounded-xl m-1'>
          3
          </button>
          <button className='flex pt-3'>
          <RxDotFilled className=' font-bold'/> 
          <RxDotFilled className=' font-bold'/> 
          <RxDotFilled className=' font-bold'/> 
          </button>
          <button className=' bg-white border-2 w-9 h-9 rounded-xl pb-3 m-1'>
           {org?.promotedOrgs?.length}
           </button>
           </>
          ):""
        }
    </div>
    <div className='flex mb-0 justify-center -mt-6 pb-8'>
      <div className='hover:bg-zinc-950 text-2xl p-0 lg:p-2 bg-blackl text-black hover:text-white cursor-pointer border-2 border-zinc-950 duration-700'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
       {/* Right Arrow */}
      <div className='hover:bg-zinc-950  md:left-12 lg:left-12 left-8 text-2xl p-0 md:p-2 lg:p-2 text-black cursor-pointer hover:text-white border-2 border-zinc-950 duration-700'>
         <BsChevronCompactRight onClick={nextSlide} size={30} />
     </div>
   </div>
     {
      (org?.promotedOrgs?.length)>0
        ?(
          <>
       <p className=" float-right p-3 -mt-10 md:ml-0 ml-14 md:mr-28">ጠቅላላ <span className='font-bold -mt-4'>
         {org?.promotedOrgs?.length} </span>
         ድርጅቶች ብቻ ይገኛሉ::  
        </p>
        </>):("ምንም ድርጅት የለም")}
    </div>
  </div>
</div>
  );}
export default Orgdetail;