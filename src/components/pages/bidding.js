import React, {useState } from 'react';
import {useEffect} from "react";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { RiMenuLine } from "react-icons/ri";
import { viewOrganization } from '../../actions/orgAction';
import  AddressBaseUrl from "../../utils/BaseUrl";
import Loading1 from './loading';
import { RxDotFilled } from 'react-icons/rx';
import { viewVacancie2 } from '../../actions/biddingAction';
import { addToDetail } from '../../actions/detail';
import Loading from './loading'; 
import { HiOutlineX } from "react-icons/hi";
import { dataProducts } from '../data';
import samrtPc from '../../img/computerimge/mouse.jpg';

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

    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? org.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
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
        // dispatch(searchVacancies(term));
        console.log("term : ",term);
        //setTerm("");
      };
      const likeProduct =()=>{
       alert("Thank you") 
      }

 return(
<>
   <div className="w-11/12 xl:w-11/12 mx-auto pb-6">
     <div className="hidden md:flex items-center py-3 mb-4 ">
       <button
        className=" text-lg font-display text-black font-medium hover:text-[#0397FF]"
       >
        <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የጨረታ</span>ማስታዎቂያ
       </button>
       <form onSubmit={submitHandler}>
         <div class=" mb-4 flex flex-wrap items-stretch absolute right-5">
          <input className="bg-[#E3E6E6]" 
             type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>
             <button
        class="relative -mt-2 z-50 flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium
         uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 
         hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 
         active:shadow-lg"
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
    <div className='relative p-10 bg-white md:flex lg:flex'>    
     <div className='relative m-8 md:w-7/12'>
     <div class="grid lg:grid-cols-2 xl:gap-20 md:gap-6 xl:gap-x-6">
        {
          (bidding?.vacancies?.length)>0
            ?(
              bidding?.vacancies?.slice(0, 4).map((bidding,index) =>{
             return(
               <>
                <div key={index} className="products mb-6 lg:mb-0">
                 <div className="products__single relative border-gray-600 
                   shadow-lg shadow-neutral-900 bg-cover bg-no-repeat" key={bidding.id}> 
                 <div className="flex justify-center items-center h-full">
                  <img
                   onClick={() => VacancieDetail(bidding)}
                   src={`${AddressBaseUrl}/images/${bidding.image}`} 
                   className="transition cursor-pointer duration-700 rounded-xl border-2 border-b-2 border-gray-600"
                    alt='images not found'/> 
                </div>
                {/* <div className="flex justify-center items-center h-full"> */}
                <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl 
                    justify-center overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600
                    to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                    onClick={() => VacancieDetail(bidding) }>
                    <button className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
                    bg-blue-950">View Detail</button>
                    </div>
                    <div className="mt-4 float-left flex">
                    <ul className=' mt-4 flex'>
                        <img className=' w-7 h-6 rounded-2xl' 
                        src={`${AddressBaseUrl}/images/${bidding.image}`} 
                        alt='Noimage'/>
                    </ul>
                    <span className="mt-3 w-64">{bidding.name}<br /><p className=" font-thin  text-sm">{bidding.type}</p></span>
                  </div>
                  <div className="mt-4 float-right w-7.5 flex">
                  <span onClick={() => likeProduct(bidding) }>Like</span>
                </div>
                  {/* </div> */}
                </div>
              </div>
                  </>
                )})):(<><div><Loading/></div></>) }
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
     </div>
    </div>
      <div
        // style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='md:w-5/12 h-full rounded-2xl bg-center bg-cover duration-500 pt-4'>
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
      </div>
     </div>
    </div>
  </>
 )
}
export default Bidding;