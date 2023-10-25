import React, {useState } from 'react';
import {useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RiMenuLine } from "react-icons/ri";
import { viewOrganization } from '../../actions/orgAction';
import  AddressBaseUrl from "../../utils/BaseUrl";
import Loading1 from './loading';
import { RxDotFilled } from 'react-icons/rx';
import { viewVacancie2,searchVacancies} from '../../actions/biddingAction';
import { addToDetail } from '../../actions/detail';
import Loading from './loading'; 
import { HiOutlineX } from "react-icons/hi";
import { dataProducts } from '../data';
import show from '../../icons/show.png';
import { useNavigate } from 'react-router-dom';
const Bidding = (props) =>{
    const [data, setData] =useState(dataProducts || '');
  const dispatch = useDispatch();
  const [vacancieDel, setVacancieDel] = useState(false);

  const { org } = useSelector(
   (state)=> state.org
 );

 // dispatch(getProduct(id));
 useEffect(()=>{
   dispatch(viewOrganization());
    },[]);
    useEffect(()=>{
      setData(dataProducts);
       },[dataProducts]);
    const VacancieDetail = (data) =>{
        dispatch(addToDetail(data));
        setVacancieDel(true);
      }
    const detailInfo = localStorage.getItem("detailInfo")
    ? JSON.parse(localStorage.getItem("detailInfo"))
    : null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate()
  const orgHandler=()=>{
    // navigate("org/"+id)
    navigate("org")
}
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? org.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
    const [currentPage, setPage] = useState(1)

  const selectPageHandler = (selectedPage) => {

    // alert(data.length+","+selectedPage)
    console.log("next button cliked : ",selectedPage);
    if (selectedPage >= 1 && (selectedPage * 10)-10 <= bidding?.vacancies?.length  && selectedPage !== currentPage) {
      setPage(selectedPage)
    }
  }

    const nextSlide = () => {
      const isLastSlide = currentIndex === org.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
    useEffect(() =>{
        dispatch(viewVacancie2());
    },[]);
  
      const {bidding} = useSelector(
          (state) => state.bidding
          );
      console.log("all bidding vacancies : ", bidding);
      const [term, setTerm] = useState("");
      // const dispatch = useDispatch();
      const submitHandler = (e) => {
        e.preventDefault();
         if (term === "") return alert("Please enter search term!");
         dispatch(searchVacancies(term));
        console.log("term : ",term);
        //setTerm("");
      };
      const likeProduct =()=>{
       alert("Thank you") 
      }

 return(
<>
<div className=" w-full bg-[#E3E6E6] md:ml-0 -ml-3  ">
  <div className=" mx-auto h-4/5">
   <section className="mb-6 text-gray-800 text-center group">
    <div className=" md:flex block flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
      <div className="flex items-center py-3 mb-4 md:ml-0 ml-3">
       <button
          className=" text-lg font-display text-black bg-[#E3E6E6] h-10 pl-3 pb-5 pr-3 ml-1 rounded-md font-medium hover:text-[#0397FF]"
         >
         <span className=" mt-10 md:-ml-3  underline decoration-pink-800 decoration-4 underline-offset-8">የጫራታ</span>ማስታዎቂያ
         </button>
         <form onSubmit={submitHandler}>
         <div class=" mb-4 flex flex-wrap items-stretch absolute md:mt-0 mt-6 md:ml-0 ml-5 md:right-16 right-10">
         <input className="bg-[#E3E6E6] p-3 rounded-md md:-mt-5 ml mt-0 z-20 " 
             type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>

      {/* <input
        type="search"
        class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200 z-50"
        
        aria-label="Search"
        aria-describedby="button-addon1" 
        value={term}
        onChange={(e) => setTerm(e.target.value)}/> */}
      <button
        class="relative bg-[#E3E6E6] rounded-md md:-mt-5 mt-0 z-20 flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="submit"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
       </button>
      </div>
     </form>
    </div>
  </div>
  <div className=' bg-white  md:flex lg:flex pb-20 md:-mt-1 mt-3 md:pl-5 pl-0 md:ml-5 md:mr-0 ml-10 mr-5'>    
    <div class="relative grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:gap-20 md:gap-20 gap-12 my-3 xl:gap-x-10 md:gap-x-7 gap-x-5">
      {
       (bidding?.vacancies?.length)>0
         ?(
          bidding?.vacancies?.slice(currentPage * 10 - 10, currentPage * 10).map((bidding,index) =>{
           return(
              <>
              <div key={index} className=" h-40 md:h-56 xl:h-s6 xl:w-96 md:w-80 sm:w-60 relative md:ml-2 ml-2 mr-2 my-10 mb-24 md:mb-0">
                <div className="w-full h-full relative border-gray-600 
                 shadow-lg shadow-neutral-900 bg-cover bg-no-repeat "> 
                 <div className="relative flex justify-center items-center h-full">
                  <img
                   onClick={() => VacancieDetail(bidding)}
                   src={`img/${bidding.featureImage}`} 
                  // src={`${AddressBaseUrl}/images/${bidding.image}`} 
                   className="transition relative w-full h-full cursor-pointer duration-700 rounded-xl border-2 border-b-2 border-gray-600"
                    alt='images not found'/> 
                </div>
                {/* <div className="flex justify-center items-center h-full"> */}
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl 
                    justify-center overflow-hidden bg-gradient-to-r from-green-500 via-amber-300
                    to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                    onClick={() => VacancieDetail(bidding) }>
                    <button className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
                    bg-black">View Detail</button>
                    </div>
                    <div className="mt-4 float-left flex">
                    <ul className=' mt-1 flex'>
                        <img className=' w-7 h-6 rounded-2xl' 
                       // src={`/img/${bidding.featureImage}`} 
                      // src={`${AddressBaseUrl}/images/${bidding.image}`} 
                      src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
                        alt='Noimage'/>
                    </ul>                 
                    <a>
            <button 
             onClick={() => orgHandler()}
            // onClick={() => orgHandler(`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.id}`)}
             >
             <span className="mt-1 ml-2">
              <p className=" float-left  text-sm ">{bidding.title.substring(0,6)}<br />
             {bidding.description.substring(0,48)+"..."}</p><br />
             <p className=" font-thin text-sm">{`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}</p>             
             </span><br />
             </button>
            </a>  
           </div>
          </div>
         </div>
        </>
       )})):(<><div><Loading/></div></>) 
        }
       </div>
      </div>
      <br /> <br />
      <div>
     {bidding?.vacancies?.length > 0 && 
     <div className=" justify-center md:ml-10 ml-10 md:mt-10 -mt-9">       
      {(bidding?.vacancies?.length >=currentPage * 10)?(
          <p className='text-sm text-gray-700 mb-7'>
            ክጠቅላላ <span className='font-medium ml-2 mr-2'> {bidding?.vacancies?.length} </span>
            የጫራታ ማስታወቂያዎች  ዝርዝር ውስጥ ከቁጥር <span className='font-medium ml-2 mr-2'>{currentPage * 10 - 10}</span>
             እስከ ቁጥር <span className='font-medium ml-2 mr-2'> {currentPage * 10} </span> የሚገኙ የጫራታ ማስታወቂያዎች  ዝርዝር  
             </p>
           ):<p className='text-sm text-gray-700 mb-7'>
               <p className="mr-2">(መጨረሻው ነው)</p> ጠቅላላ <span className='font-medium ml-2 mr-2'> {bidding?.vacancies?.length} </span>
               የጫራታ ማስታወቂያዎች ብቻ ይገኛሉ::  
              </p>
            }
          <nav
           className='relative z-0  inline-flex rounded-md shadow-sm -space-x-px'
           aria-label='Pagination'
          >
           <button
            onClick={() => selectPageHandler(currentPage - 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border
             bg-slate-700 border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
            >
            <span className="font-bold">ምልስ</span>
           </button>
          <button
          onClick={() => selectPageHandler(currentPage + 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border
             border-gray-300 bg-slate-700 text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
          <span className=" font-bold">ቅጣይ</span>
            </button>
           </nav>
         </div>}
       </div>
     {vacancieDel && (
      <> 
       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
         <div className="relative w-auto my-6 mx-auto max-w-2xl">
           {/*content*/}
             <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               {/*header*/}
                <div className="flex justify-end p-1">
                  <button
                     onClick={() => setVacancieDel(false) }
                      type="button"
                      className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg text-lg p-1 ml-auto inline-flex items-center"
                      data-modal-toggle="log-in-model"
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="w-full flex">
                    <div className="p-4">
                    <img
                      className="w-48 h-32 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${detailInfo.image}`}
                     // src={samrtPc} 
                      alt="product img not found"
                      /> 
                      </div>
                     <div className="m-4">
                     <p className="text-lg font-bold">{detailInfo?.title}</p> 
                     <div class="pt-2">
                     <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p>  
                     </div>
                     <h3 class="border-t mb-2 pt-3 font-semibold underline">phone: <span class="font-thin">0984008445</span>
                     <br />
                     Email: <span class="font-thin">EplusApp88@gmail.com</span>
                    </h3> 
                   </div>
                  </div>
                 </div>
                </div>
               </div>
            </>
          )} 
      {/* <div
        className='md:w-1/4 ml-10 h-full rounded-2xl bg-center bg-cover duration-500 pt-2'>
        <div className="flex justify-center items-center h-full">
        <img src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`} className='h-32 md:h-48 lg:h-52 w-32 md:w-48 lg:w-52 rounded-lg' alt='images not found'
        /> 
        </div>
       <div className="flex justify-center items-center h-full">
        <div className="text-center text-black">
          <h1 className="text-2xl md:text-2xl xl:text-3xl text-[#F49F08] font-bold font-display tracking-tight leading-tight">
            {`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}
          </h1>
          <p className="text-sm md:text-md xl:text-lg  font-display tracking-tight leading-tight">
             ኢጵላሣጵ አድራሻ ዘመናዊ የሆኑ የካርታ ላይ አድራሻዎችን ልዩ ቦታዎችን መንገዶችን እና የአደባባዮችን 
             ስያሜ በመጠቀም የእያንዳንዱን ቦታ በቀላሉ በተሰጠው መለያ ካርታን መሰርት አድርጎ በተሰራው ገጽ ላይ ፍልግ ነው። ኢጵላሣጵ አድራሻ ልዩ እና ትክክለኛ የሆነ የግለሰብ 
             የመንግስት መስሪያ ቤቶችን የንግድ ተቋማትን፡እንዲሁም የተለያዪ በከተማው ውስጥ የሚገኙ የግለሰብ ቦታወችን መገኛ
           </p>
        </div>
       </div>
      </div> */}
    </section>
     </div>
   </div> 
  </>
 )
}
export default Bidding;