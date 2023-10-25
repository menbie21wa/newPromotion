import React, {useState } from 'react';
import {useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { viewOrganization } from '../../actions/orgAction';
import  AddressBaseUrl from "../../utils/BaseUrl";
import Loading1 from './loading';
import { RxDotFilled } from 'react-icons/rx';
import {dataVacancy} from '../vacaData';
import { useNavigate } from 'react-router-dom';
const Fristpage = (props) =>{
  const navigate=useNavigate()
const orgHandler =(id)=>{
  navigate("org/"+id)
  // navigate("org")
}
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
  const [descrip, setDescrip] = useState("");
  useEffect(() =>{
    setDescrip(`መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።
    `)
  },[]);
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
     <div className="bg-[#E3E6E6] mt-24">
        <div className=" md:flex-row flex-col md:pt-24 lg:pt-24 md:mb-2 mb-44 pt-24 h-screen md:h-screen w-full border-b  group">
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl hover:border-2 py-2 md:py-12 lg:py-12 bg-white/40 rounded-sm hover:bg-black/20 border-black text-black cursor-pointer z-10'>
           <BsChevronCompactRight onClick={nextSlide} className='h-12 w-12' />
         </div>
          <div className='h-11/12 md:flex block md:h-screen w-full -mt-40 rounded p-5'> 
          <div
            className=" md:w-1/2 w-full md:mb-0 mb-16  md:mr-36 h-full md:-mt-28 mt-5  flex md:ml-5 ml-2 flex-col md:p-20 p-3 justify-center items-center">
               <h1 className="text-4xl md:text-4xl xl:text-5xl text-[#F49F08] font-bold font-display tracking-tight leading-tight italic">
                  {`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}
                  </h1>
                  <p className="text-2xl md:text-2xl mt-4 xl:text-3xl text-[#F49F08] font-bold font-display tracking-tight leading-tight">
                  {`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.businessSector}`}</p>
                  <p className='mt-7'>
                  {/* { org?.promotedOrgs[currentIndex]?.description?.substring(0,300)} . . . */}
                  </p>
         </div>
        <div
          // style={{ backgroundImage: `url(${org && org[currentIndex]?.url})` }}
          className=' md:-ml-2 ml-5 md:-mt-0 -mt-20 mr-5 rounded-2xl md:w-2/3 w-40 md:h-screen h-60 bg-center duration-700 relative bg-cover bg-no-repeat'
          >
          <img 
          className="w-full h-5/6 rounded-lg "
         // src={`/img/Eplusapp1.png`} 
          src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
          alt=""
          />
        </div>
       </div>
      <div className=' md:text-lg text-xs md:ml-20 ml-9 -mt-16 z-30 '>
        <a ><button 
       onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}
      className='animate-pulse font-semibold text-sky-500'>
        {/* <i>{ org?.promotedOrgs[currentIndex]?.description?.substring(0,100)} .  .  .</i> */}
        {/* {descrip} */}
          </button></a>
       </div>
     </div>
   </div>
 </>
)}
export default Fristpage;