import React, {useEffect, useState} from "react";
import Layout from "../layout/layout";
import Contact from "./contactus";
import Loading from "./loading";
import defualtImg from '../../img/img1.jpg'
import  { dataProducts } from "./data";
import Fristpage from "./fristpage";
import logos from '../../img/img1.jpg'
import education from '../../img/sun_icon3.jpg';
import healthcare from '../../img/hero.jpeg';
import { RiMenuLine } from "react-icons/ri";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import AddressBaseUrl from "../../utils/BaseUrl";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrganization } from "../../actions/orgAction";
import { addToDetail } from "../../actions/detail";
import { HiOutlineX } from "react-icons/hi";
import smartPhone from '../../img/computerimge/smartPc.jpg';
import smartDesktop from '../../img/computerimge/desctops.jpg';
import { NavLink, useLocation } from "react-router-dom";

const Manufacture = () =>{
 // window.scrollTo(0, 0);
 const dispatch = useDispatch();
 const [data, setData] =useState(dataProducts || '');
 const [open, setOpen] = useState(true);
 const [vacancieDel, setVacancieDel] = useState(false);

//menu bar
const [menu, setMenu] = useState(true);
const setmenu = () =>{
  if(menu){
    setMenu(false);
  }else{
    setMenu(true);
  }
}
const {id} = useParams();

const { org } = useSelector(
  (state) => state.org
)
// console.log("organization detail now : ", org);

useEffect(() => {
   dispatch(getOrganization(id));
},[]);

const VacancieDetail = (data) =>{
  dispatch(addToDetail(data));
  setVacancieDel(true);
}
const detailInfo = localStorage.getItem("detailInfo")
? JSON.parse(localStorage.getItem("detailInfo"))
: null;
 const slides = [
  {url: healthcare},
  {url: logos},
  {url: education},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // styles
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#F3AE33" :  "#2b2b2b" ,
    };
  };
    return(
        <Layout>
   <div className="bg-[#E3E6E6]">
        {/*defualt home page image */}
        <div className="relative overflow-hidden bg-no-repeat bg-contain  max-h-80">
          <img
            className="w-full h-screen object-cover"
            src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
            alt="eplus img"
          />
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.40)" }}
          >
            <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto xl:mt-40 md:mt-32 mt-20">
              <div className="flex  justify-center items-center h-full">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-4xl xl:text-5xl text-[#F49F08] font-bold font-display tracking-tight leading-tight italic">
                    {org?.org?.name}
                  </h1>
                  <p className="text-2xl md:text-2xl xl:text-3xl text-[#F49F08] font-bold font-display tracking-tight leading-tight">
                    {org?.org?.businessSector}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
 {/* home page end */}

{/* menuBar */}
  <div className='fixed top-3 -translate-x-0 translate-y-[50%] left-2 text-2xl bg-white/20 hover:bg-white/40 text-black cursor-pointer duration-300'>
      <RiMenuLine size={24} onClick={setmenu}/>
  </div>
  {menu && (
    <>
    <div className='fixed bg-[#E4E4E4] w-52 h-48 top-10 -translate-x-2 translate-y-[10%] left-2 opacity-100 duration-300 inset-0 text-xl text-[#F49F08] font-semibold italic space-y-2 z-10'>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button>ድርጅቶች</button>
     </div>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button>ምርቶች</button>
     </div>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button>የስራ ማስታዎቂያ</button>
     </div>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button>የጨረታ ማስታዎቂያ</button>
     </div>
   </div>
  </>
)}

<div className="w-11/12 xl:w-11/12 mx-auto md:mt-6 lg:mt-6 mt-2 mb-2">
    <section className="mb-12 text-gray-800 text-center ">
    {/* job_vacancies */}
    { 
     (org?.job_vacancies?.length)>0
      ?(
        <div className="items-center py-3 mb-4">
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የስራ ማስታዎቂያ</span>
         </button>
        </div>
      ):(null)
    }
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4">
      {
        (org?.job_vacancies?.length)>0
          ?(
            org?.job_vacancies?.slice(0, 3).map((job, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                      // src={smartPhone} 
                      src={`${AddressBaseUrl}/images/${job.image}`}
                      alt="product img not found"
                      onClick={() => VacancieDetail(job) }
                    />
                  </div>
                </div>
            <div className="m-auto">
              <p className="text-sm font-bold">{job?.name}</p>
              <p className="mb-2 text-sm ">{job?.description.substring(0, 30) + " ..."}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
     </div>
 {/* product list */}
     { 
     (org?.promotedProducts?.length)>0
      ?(
        <div className="items-center py-3 mb-4">
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8"> ምርቶች </span>
         </button>
        </div>
      ):(null)
    }
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4">
      {
        (org?.promotedProducts?.length)>0
          ?(
            org?.promotedProducts?.slice(0, 3).map((products, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                     // src={defualtImg} 
                      src={`${AddressBaseUrl}/images/${products.image}`}
                      alt="product img not found"
                    />
                  </div>
                </div>
            <div className="bg-[#E3E6E6] m-auto">
              <p className="text-sm font-bold">{products?.title}</p>
              <p className="mb-2 text-sm ">{products?.description.substring(0, 30) + " ..."}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
     </div>
 {/* bids */}
 { 
     (org?.bids?.length)>0
      ?(
        <div className="items-center py-3 mb-4">
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የጨረታ ማስታዎቂያ </span>
         </button>
        </div>
      ):(null)
    }
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4">
      {
        (org?.bids?.length)>0
          ?(
            org?.bids?.slice(0, 3).map((bid, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                     // src={smartDesktop} 
                      src={`${AddressBaseUrl}/images/${bid.image}`}
                      alt="product img not found"
                    />
                  </div>
                </div>
            <div className="bg-[#E3E6E6] m-auto">
              <p className="text-sm font-bold">{bid?.title}</p>
              <p className="mb-2 text-sm ">{bid?.description.substring(0, 30) + " ..."}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
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
                      className="w-48 h-48 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${detailInfo.image}`}
                     // src={smartPhone} 
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                    <p className="text-lg font-bold">{detailInfo?.name}</p> 
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p> 
                    {/*  <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p>
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p>  */}
                   </div>
                  </div>
                 </div>
                </div>
               </div>
            </>
          )} 

    </section>
  </div>

      <div className="w-11/12 mx-auto">
       <div class="grid lg:grid-cols-2 xl:gap-10 md:gap-6 xl:gap-x-4">
        <div className="flex items-center justify-center md:justify-start">
         <NavLink onClick={() => setOpen(true)} className="text-xl text-[#F49F08]" style={navLinkStyles}> ለበለጠ መረጃ </NavLink>
         </div>
          <div>
           <button onClick={() => setOpen(false)} className="text-xl text-black"> {org?.org?.name} ok </button>
          </div>
        </div>
      </div>
      { open ? (
          <>
           <div className="md:mt-2 lg:mt-2 mt-2">
            <Contact/>
           </div>
          </>
      ):(
        <>
        <div className="w-11/12 mx-auto">
          <div className="flex flex-wrap items-center rounded-lg mx-auto">
            <div data-aos="fade-up-right" className="grow-0 shrink-0 basis-auto w-full  md:w-4/12 xl:w-4/12 h-[401px]">
              <img
                //src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
                src={smartDesktop}
                alt="img of eplus img"
                className="w-full rounded-lg h-[350px] mt-6"
              />
            </div>
            <div data-aos="fade-up" className="grow-0 shrink-0 basis-auto w-full  md:w-6/12 xl:w-6/12">
              <div className="pl-5 xl:pl-10 mt-4 select-none">
                <p className="text-textColor font-display xl:text-lg md:text-lg leading-8 text-left tracking-tight pb-2">
                {org?.promotedOrgs?.name}
                </p>
                <p className="text-textColor font-display xl:text-lg md:text-lg leading-8 text-left tracking-tight pb-2">
                  ኢጵላሣጵ ንግድ ስራዎች አክሲዮን ማህበር በኢትዮጵያ አዲሱ የንግድ ፈቃድ መስጫ መደብ መሠረት ረቂቅ
                  መረጃ ወይም ሶፍትዌር ፍብርክ (ንድፍ፣ ምርት፣ ብልጽግ፣ ትግብር፣ ድር ንድፍና ዝርግት አካቶ) እና
                  መረጃ የማቀነባበርና የመረጃ ቋት የማደራጀት ስራዎች ረቂቅ የመረጃ ምጥቀቶችን ማዘጋጀት፣ የመረጃ
                  ቋት ማዘጋጀት፣ በቀላሉ እንዲፈለጉ ማድረግ፣ ወቅቱን ጠብቆ የማሻሻል፣ የሶፍትዌር ዲዛይን፣ ልማት፣
                </p>
              </div>
            </div>
          </div>
         </div>
        </>
      )
    }
    </div>
    </Layout>
    );
}
export default Manufacture;