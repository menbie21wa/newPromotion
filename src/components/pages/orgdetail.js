  import React, { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
  import AddressBaseUrl from '../../utils/BaseUrl';
  import { RxDotFilled } from 'react-icons/rx';
  import { getOrganization } from '../../actions/orgAction';
  import { useNavigate } from 'react-router-dom';
  import {dataVacancy} from '../vacaData';
   function Orgdetail() {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { org } = useSelector(
    (state) => state.org )

    const [data, setData] =useState(dataVacancy || '');
  //  console.log("organization yibe list : ", org?.promotedOrgs);
  // console.log("organization logo name : ", org?.promotedOrgs && org?.promotedOrgs?.name);
  useEffect(() =>{
    dispatch(getOrganization());
  },[])
  useEffect(() => {
    setData(dataVacancy);
  }, [dataVacancy])
 //console.log("organization list : ", org)
  const [currentIndex, setCurrentIndex] = useState(0);
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
  }
  return (
   <div className='w-11/12 xl:w-11/12 m-auto '>
      <div className="hidden md:flex items-center py-3 mb-4 ">
      <button
        className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
        <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">ድርጅቶች</span>
      </button>
    </div>
    <div className='relative bg-white md:flex lg:flex'>    
       <div className='relative m-8 md:w-6/12'>
         <h1 className='md:text-3xl text-lg italic'>{`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}</h1>
         <h1 className='md:flex pt-0 md:pt-6 lg:pt-6'  onClick={() => orgHandler(`${org && org[currentIndex]?.id}`)}>ኢጵላሣጵ አድራሻ ዘመናዊ የሆኑ የካርታ ላይ አድራሻዎችን ልዩ ቦታዎችን መንገዶችን እና የአደባባዮችን 
           ስያሜ በመጠቀም የእያንዳንዱን ቦታ በቀላሉ በተሰጠው መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ 
           የመንግስት መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ እና በእያንዳንዱን 
           ቦታ ልዩ መለያ የተለያዩ አገልግሎቶችን ቅርብ ነው፡ ኢጵላሣጵ ገበያን በመጠቀም የሚፈልጉትን እቃ በቀላሉ ኢጵላሣጵአድራሻን በማጋራት ከኢጵላሣጵ ገበያ የገዙትን እቃ ቅብል ነው</h1>
        <div className='pt-0 md:pt-4 lg:pt-4'>
          <a>
            <button className='bg-[#0397FF] text-white font-semibold md:py-1 lg:py-1 lg:px-12 md:px-12 px-2 h-full'  onClick={() => orgHandler(`${org && org[currentIndex]?.id}`)}>ዝርዝር መረጃ</button>
          </a>
        </div>
      {/* Left Arrow */}
      <div className='hover:bg-zinc-950 md:m-6 lg:m-6 m-1 absolute text-2xl p-0 md:p-2 lg:p-2 bg-blackl text-black hover:text-white cursor-pointer border-2 border-zinc-950 duration-700'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
       <div className='hover:bg-zinc-950 absolute md:left-12 lg:left-12 left-8 md:m-6 lg:m-6 m-1  text-2xl p-0 md:p-2 lg:p-2 text-black cursor-pointer hover:text-white border-2 border-zinc-950 duration-700'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
       </div>
       </div>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='md:w-5/12 h-full rounded-2xl bg-center bg-cover duration-500 pt-4'
      >
        <img src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`} className='h-52 md:h-96 lg:h-96 w-full' alt='images not found'
        onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}
        /> 
        <div className='flex mb-0 justify-center py-2'>
      {
        (org?.promotedOrgs?.length)>0
        ?(
        org?.promotedOrgs?.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled/>
          </div>
        ))):(null)
      }
     </div>
    </div>
  </div>
</div>
  );}
export default Orgdetail;