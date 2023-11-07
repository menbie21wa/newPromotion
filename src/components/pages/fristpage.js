import React, {useState } from 'react';
import {useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { viewOrganization } from '../../actions/orgAction';
import Loading from "./loading";
import  AddressBaseUrl from "../../utils/BaseUrl";
import { RxDotFilled } from 'react-icons/rx';
import {dataVacancy} from '../vacaData';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import icon1 from '../../img/download.jpeg'
import icon2 from '../../img/download (1).png'
import icon3 from '../../img/download.png'
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
const [isUp, setIsUp] = useState(false);
// const handleClick = () => {
//   setIsUp(!isUp);
// };
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsUp(scrollPosition > 0);
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  const [currentIndex, setCurrentIndex] = useState(0);
  const [descrip, setDescrip] = useState(
    `መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።
    መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።
  
    መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።
    መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ የመንግስት 
    መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ በቀላሉ ካርታ ላይ ለይቶ ለማወቅ:
    ይህ ኢጵላሣጵ ዌብ ሳይት ነው ኢጵላሣጵ የራሱ የሆነ ዌብሳይት አልምቶ አሁን ደሞ ለግለሰቦች እና ለድርጅቶች የየራሳቸው የሆነ ዌብሳይት ለማልማት 
    ሙሉ ዝግጅቱን ጨርሷል። እርሶም እድሉን ይጠቀሙ። ኢኮሜርስ ዌብ ሳይት በበይነመረቡ ላይ የእርስዎ ዲጂታል የመደብር ፊት ነው። በገዢ እና በሻጭ መካከል ያለውን ግብይት ያመቻቻል ያፋጥናል. 
    የመስመር ላይ ደንበኞችዎ ምርጫቸውን አድርገው መጠቀም ይችላሉ።`);
    const [expanded, setExpanded] = useState(false); 
    const toggleExpanded = () => { 
      setExpanded(!expanded); 
    }; 
    const paragraphClass = classNames('line-clamp-5', { 
      'line-clamp-none': expanded, 
    }); 

    // const [description, setDescription] = useState(descrip.substring(0,700)+'   . . .');
  
    // var hidden=''
    // if (descrip.length > 700 ) {
    //   hidden='visible'
    // }
    // else{
    //   hidden='hidden' 
    // }
    // const [background, setBackground] = useState('');
  
    // const getDescription=()=>{
    //   setDescription(descrip)
    //   setBackground('bg-[#E3E6E6] text-[#E3E6E6]')

    // }
  // const shorten = descrip ? descrip.substring(0, 100) : ''
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
<div className=" md:mt-20 -mt-10 h-full  bg-[white] ">
        <div className="  bg-[white] md:flex-row p-2  pb-32 flex-col md:pt-0 lg:pt-0 md:mb-2 mb-20 pt-24 h-full md:h-full w-full border-b  group">
          <div className='h-full -mb-36 md:flex block md:h-full w-full md:-mt-40 -mt-0 rounded p-3'>           
          <div
            className=" md:w-11/12 md:mb-0 mb-16 h-full md:-mt-16 mt-16  flex md:ml-5 ml-2 flex-col md:p-14 p-3 justify-center items-center">
                
           {/* <button onClick={handleClick}>Toggle</button>
            <div className={`transition-transform duration-300 ease-in-out transform ${isUp ? 'translate-y-[-100px]' : 'translate-y-0'}`}>
            <button>hfhfhfh</button>
            </div> */}
              {/* <div className={`transition-transform duration-300 ease-in-out transform ${isUp ? 'translate-y-[-100px]' : 'translate-y-0'}`}>
              <button>hfhfhfh</button>
              </div> */}

        
               <h1 className="text-4xl md:text-4xl xl:text-5xl text-[#F49F08] font-bold font-display tracking-tight leading-tight italic">
                  {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}
                  </h1>
                  <p className="text-2xl md:text-2xl mt-4 xl:text-3xl text-[#F49F08] font-bold font-display tracking-tight leading-tight">
                  {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.businessSector}</p>

                  <div className=' '> 
          {/* Description Page */}
      <p className=" h-11/12 w-11/12 mt-5 shadow-lg bg-slate-200 p-5 justify-center rounded-md max-h-72 overflow-y-auto scrollbar-thumb-indigo-500 scrollbar-track-gray-200 "> 
      {/* {descrip} */}
       {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description}
      </p> 
      {/* {!expanded && ( 
            <button 
          className="text-blue-500 hover:underline w-32 pl-2 rounded-lg h-10 bg-[#fe9900] " 
          onClick={toggleExpanded} 
        >  Read More 
        <img className='w-6 h-6 -ml-1 -mt-6 rounded-full' alt='' src={icon3}/> 
         </button> 
                )} 
        {expanded && ( 
          <button 
          className="text-blue-500 hover:underline w-32 pl-2 rounded-lg h-10 bg-[#fe9900]" 
          onClick={toggleExpanded} 
        >  Read less
        <img className='w-6 h-6 -ml-1 -mt-6 rounded-full' alt='' src={icon3}/> 
         </button>
         )}  */}
       </div> 
    
      {/* <button onClick={getDescription} className={`${hidden} ${background} -mt-1 ml-0 text-sky-600 font-semibold`}>
          More
      </button> */}
      </div>
      <div
          // style={{ backgroundImage: `url(${org && org[currentIndex]?.url})` }}
          className='md:ml-2 ml-5 md:mt-2 bg-slate-200 border p-2 md:mr-7 -mt-20 mr-2 rounded-2xl md:w-2/3 w-40 md:h-full h-60 bg-center duration-700 relative bg-cover bg-no-repeat'
          >
          {(org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo)!==''
          ?(
          <img 
          className="md:w-full md:h-96 w-11/12 h-3/4 rounded-lg "
          src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
          alt=""
          />):("")
          }
        </div>
       </div>
       <div className='hidden mt-20 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl hover:border-2 py-2 md:py-12 lg:py-12 bg-white/40 rounded-sm hover:bg-black/20 border-black text-black cursor-pointer z-10'>
           <BsChevronCompactRight onClick={nextSlide} className='h-12 w-12' />
         </div>
      {/* <div className=' md:text-lg text-xs md:ml-20 ml-9 md:mt-32 mt-20 md:-mb-3 -mb-20 z-30 '>
        <a ><button 
       onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}
      className='animate-pulse font-semibold text-sky-500'>
        <i>{org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description?.substring(0,100)} .  .  .
        </i>
          </button></a>
       </div> */}
     </div>
   </div>  
 </>
)}
export default Fristpage;