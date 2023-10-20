import React, {useEffect,useRef, useState} from "react";
import Layout from "../layout/layout";
import Contact from "./contactus";
import Loading from "./loading";
import defualtImg from '../../img/img1.jpg'
import  { organizationdata } from "../organizationdata";
import Fristpage from "./fristpage";
import logos from '../../img/img1.jpg'
import education from '../../img/sun_icon3.jpeg';
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
import Logue from '../../img/logobg2.png';
import img1 from "../../icons/office.png";
import vacancy from "../../icons/vacancy.png";
import building from "../../icons/office-building.png";
import producticon from "../../icons/new-product.png";
import bidding from "../../icons/bidding.png";
import { louberDetail} from "../../actions/louberDetail";
const Manufacture = () =>{
 // window.scrollTo(0, 0);
 const dispatch = useDispatch();
 const [data, setData] =useState(organizationdata || '');
 useEffect(() => {
  setData(organizationdata);
},[organizationdata]);
//  console.log("yyyyyyyyyy",data[0].logo)
 const [open, setOpen] = useState(true);
 const [vacancieDel, setVacancieDel] = useState(false);
 const [louberDel, setLouberDel] = useState(false);
 const [BiddingDel, setbiddingDel] = useState(false);
 const [productDel, setProductDel] = useState(false);
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
//Products
 console.log("yibe",org?.Products?.length)
console.log("organization detail now : ", org);
const productSection = useRef();
const vacancieSection = useRef();
const dayworkSection = useRef();
const biddingSection = useRef();
// const [start, setStart] = useState(false);
// const secRef = useRef();
 const getHome=()=>{
  window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
const scrollToAll = (elmRef) =>{
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
  })
}
useEffect(() => {
   dispatch(getOrganization(id));
},[]);

const louberWorkDetail = localStorage.getItem("louberWorkDetail")
? JSON.parse(localStorage.getItem("louberWorkDetail"))
: null;


const VacancieDetail = (data) =>{
  dispatch(addToDetail(data));
  setVacancieDel(true);
}
const LouberDetail = (data) =>{
  dispatch(louberDetail(data));
  setLouberDel(true);
}
const BiddingDetail = (data) =>{
  dispatch(addToDetail(data));
  setbiddingDel(true);
}
const ProductsDetail = (data) =>{
  dispatch(addToDetail(data));
  setProductDel(true);
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
             <div className="md:pt-0 lg:pt-0 ">
   <>
  {/* <div className='w-full h-10 text-center bg-slate-400 mt-2 text-white p-2'>
   This is my try from nave bar
  </div> */}
<nav className=' z-50 fixed  top-0 overflow-hidden justify-between list-none font-serif uppercase font-medium xl:text-xl 
md:text-xl xs:text-xs text-justify-center w-full lg:h-24 md:h-28 sm:h-20 shadow-xl sm:flex bg-white items-center '>
<div>
<button className='ml-1 w-96 p-5 md:flex block '  
to ="/"> 
<img className=' md:w-32 md:h-20 w-20 h-10  -mt-3 lg:ml-12 sm:ml-5 rounded-2xl' src={Logue} alt='Noimage'/>
<h2 className="md:-ml-1 -ml-32 ">EplusApp Promotion website</h2>
</button>
</div>
<div className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
          <RiMenuLine size={24} onClick={setmenu}/>
          {/* <ion-icon name={!menu?'close':'menu'}></ion-icon> */}
</div>

<ul className=' mt-3 lg:flex md:flex bg-white  left-0 w-full md:w-auto
 sm:hidden absolute md:static justify-end items-center flex-1 list-none z-20 '>
<li className='mx-6'><button  onClick={()=> getHome()}
className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
to ="/">ስለ ድርጅቱ</button></li>
<li className='mx-6'><button onClick={()=> scrollToAll(productSection)}
className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
ምርቶች</button></li>
 <li className='mx-6'><button onClick={()=> scrollToAll(vacancieSection)}
 className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
 የስራ ማስታዎቂያ</button></li>
 <li className='mx-6'><button onClick={()=> scrollToAll(biddingSection)}
  className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex' 
    >   
    የጨረታ ማስታዎቂያ </button></li>
 {/* <li><button className=' transition duration-700 transform hover:-translate-y-1 hover:scale-110 ml-12 flex' 
    >  ግብት </button></li> */}
 <li className='mx-8'><button onClick={()=> getHome()}
   className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
  to ="/About"> ውጥት</button></li>
</ul>
</nav>
{/* Mobile Navigation */}
<ul className={` ${!menu ? "left-0 opacity-100" :"left-[-750px] md:opacity-0"}
                    sm:flex lg:hidden flex-1  list-none flex flex-col
                    p-6 bg-black-gradient fixed w-full right-0  ml-0 my-2 top-14
                    sidebar bg-white transition-all duration-500 ease-in z-50
                    `}>
  <li className='mx-6 font-serif uppercase font-medium text-xl'>
                <button onClick={()=> getHome()}
                 className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
                to ="/"> <img className=' w-6 h-5 mx-4 ' src={img1} alt='Noicon'/>ስለድርጅቱ</button></li>
 <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
      <button onClick={()=> scrollToAll(productSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
      <img className=' w-6 h-5 mx-4 ' src={producticon} alt='Noicon'/> ምርቶች</button></li>
 <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
      <button onClick={()=> scrollToAll(vacancieSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
      <img className=' w-6 h-5 mx-4 ' src={vacancy} alt='Noicon'/>  የስራ ማስታዎቂያ</button></li>
<li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
     <button onClick={()=> scrollToAll(biddingSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex' 
        >   
        <img className=' w-6 h-5 mx-4 ' src={bidding} alt='Noicon'/> የጨረታ ማስታዎቂያ </button></li>
    {/* <li><button className=' transition duration-700 transform hover:-translate-y-1 hover:scale-110 ml-12 flex' 
        >  ግብት </button></li> */}
   <li className='mx-6 py-2 font-serif uppercase font-medium  text-xl '>
       <button onClick={()=> getHome()}
        className='transition duration-700 bg-red-400 rounded py-1 px-3 transform hover:-translate-y-1 hover:scale-110 flex'
     to ="/About"> ውጥት</button></li>
    </ul>
   </>    
  </div>
          
   <div className="bg-[#E3E6E6] mt-24">
        {/*defualt home page image */}
        <div className="relative overflow-hidden bg-no-repeat bg-contain">
          <img
            className="w-full h-screen object-cover"featureImage
            //src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
            src={`/img/${data[0].logo}`}
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
  {/* <div className='fixed top-3 -translate-x-0 translate-y-[50%] left-2 text-2xl bg-white/20 hover:bg-white/40 text-black cursor-pointer duration-300'>
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
)} */}

<div className="w-11/12 xl:w-11/12 mx-auto md:mt-10 lg:mt-20 border-t border-gray-500 ">
    <section className="mb-12 text-gray-800 text-center ">
    {/* job_vacancies */}
    {/* (org?.job_vacancies?.length)>0 */}
    {/* { 
     (data[0]?.job_vacancies?.length)>0
      ?(
        <div className="items-center py-3 mb-4">
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የስራ ማስታዎቂያ</span>
         </button>
        </div>
      ):(null)
    } */}
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4" ref={vacancieSection}>
      {
        (data[0].job_vacancies.length)>0
          ?(
            data[0].job_vacancies?.slice(0, 3).map((job, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                  {/*      src={`${AddressBaseUrl}/images/${job.image}`} */}
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                      // src={smartPhone} 
                      src={`/img/${job.featureImage}`}
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
     {/* day-work */}
    {/* (org?.job_vacancies?.length)>0 */}
    { 
     (data[0]?.day_work?.length)>0
      ?(
        <div className="items-center py-3 mb-4 pt-6 mt-5 border-t border-gray-500 ">
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የቀን ስራ ማስታዎቂያ</span>
         </button>
        </div>
       ):(null)
     }

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
                    {/* src={`/img/${detailInfo.featureImage}`} */}
                    <img
                    className="w-48 h-32 transition cursor-pointer duration-700"
                     
                      //src={`${AddressBaseUrl}/images/${detailInfo.image}`}
                      src={`/img/${detailInfo.featureImage}`}
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">የድርጅቱ ስም: <span >EplusApp/ኢጵላሣጵ</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው መጠሪያ: </h3> <span >{detailInfo?.title}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">ደሞዝ: </h3><span> {detailInfo?.price}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምዝገባ ማብቂያ ቀን: </h3><span >{detailInfo?.closingDate?.split('T')[0]}-{detailInfo?.closingDate?.split('T')[0]}</span></h3>
                    <div class="pt-2">
                    <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                    <p class=" mt-2">{detailInfo?.description}</p>
                    </div>
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">phone: <span class="font-thin">0984008445</span></h3> 
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">EplusApp88@gmail.com</span></h3> 
                    </div>
                    </div>
                  </div>
                 </div>
                </div>
               </div>
              </>
             )} 

    <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4" ref={dayworkSection}>
       {
         (data[0].day_work.length)>0
           ?(
            data[0].day_work?.slice(0, 3).map((job, index) => (
         <div key={index} className="mb-6 lg:mb-0">
         <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
         <div className="flex pb-2">
        <div
            className="p-2 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
                  {/*      src={`${AddressBaseUrl}/images/${job.image}`} */}
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                      // src={smartPhone} 
                      src={`/img/${job.featureImage}`}
                      alt="product img not found"
                      onClick={() => LouberDetail(job) }
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

     {louberDel && (
          <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-end p-1">
                    <button
                       onClick={() => setLouberDel(false) }
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
                      //src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                      src={`/img/${louberWorkDetail.featureImage}`}
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">Name: <span >{org?.org?.name}</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው መጠሪያ: </h3> <span >{louberWorkDetail?.title}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው አይነት:</h3> <span >{louberWorkDetail?.type}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራ ቀን/ስአት:</h3><span >ሙሉ ቀን</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የቀን ክፍያ: </h3><span> {louberWorkDetail?.price}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምዝገባ ማብቂያ ቀን: </h3><span >{louberWorkDetail?.closingDate?.split('T')[0]}-{louberWorkDetail?.closingDate?.split('T')[0]}</span></h3>
                        <div class="pt-2">
                          <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                            <p class=" mt-2">{louberWorkDetail?.description}</p>
                        </div>
                        <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">EplusApp88@gmail.com</span></h3> 
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
            </>
          )} 

 {/* product list */}
     { 
     (data[0]?.Products?.length)>0
      ?(
        <div className="items-center py-3 mb-4 border-t border-gray-500 mt-7" ref={productSection}>
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8"> ምርቶች </span>
         </button>
        </div>
      ):(null)
    }
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4">
      {
        (data[0]?.Products?.length)>0
          ?(
            data[0]?.Products?.slice(0, 3).map((products, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                     //  src={`${AddressBaseUrl}/images/${products.featureImage}`}
                     
                     onClick={() => ProductsDetail(products) }
                      src={`/img/${products.featureImage}`}
                      alt="product img not found"
                    />
                  </div>
                </div>
            <div className="bg-[#E3E6E6] m-auto">
              <p className="text-sm font-bold">{products.title}</p>
              <p className="mb-2 text-sm ">{products.description.substring(0, 30) + " ..."}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
     </div>
     {productDel && (
          <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-end p-1">
                    <button
                       onClick={() => setProductDel(false) }
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
                      //src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                      src={`/img/${louberWorkDetail.featureImage}`}
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">የድርጅቱ ስም: <span >{org?.org?.name}</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምርቱ መጠሪያ: </h3> <span >{louberWorkDetail?.title} ግልጽ ጨረታ ማስታወቂያ</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምርቱ አይነት:</h3> <span >{louberWorkDetail?.type} </span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምርቱ የተናጠል ዋጋ:</h3><span >200 </span>የምርቱ የጀምላ ዋጋ:</h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">ቦታ: </h3><span>BD</span></h3>
                        <div class="pt-2">
                          <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                            <p class=" mt-2">{louberWorkDetail?.description}</p>
                        </div>
                        <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">EplusApp88@gmail.com</span></h3> 
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
            </>
          )} 

 {/* bids */}
 { 
     (data[0]?.bids?.length)>0
      ?(
        <div className="items-center py-3 mb-4 mt-6 border-t border-gray-500" ref= {biddingSection}>
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የጨረታ ማስታዎቂያ </span>
         </button>
        </div>
      ):(null)
    }
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4">
      {
        (data[0]?.bids?.length)>0
          ?(
            data[0]?.bids?.slice(0, 3).map((bid, index) => (
       <div key={index} className="mb-6 lg:mb-0">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2  relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                     // src={`${AddressBaseUrl}/images/${bid.image}`}
                      src={`/img/${bid.featureImage}`}
                      alt="product img not found"
                      onClick={() => BiddingDetail(bid) }
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

     {BiddingDel && (
          <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex justify-end p-1">
                    <button
                       onClick={() => setbiddingDel(false) }
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
                      //src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                      src={`/img/${louberWorkDetail.featureImage}`}
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">የድርጅቱ ስም: <span >{org?.org?.name}</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የጨረታ መጠሪያ: </h3> <span >{louberWorkDetail?.title} ግልጽ ጨረታ ማስታወቂያ</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የጨረታ አይነት:</h3> <span >{louberWorkDetail?.type} </span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የጨረታ ቁጥር:</h3> <span >{louberWorkDetail?.No}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">ቦታ: ማብቂያ ቀን: </h3><span>BD</span><h3 class="mb-1 ml-3 font-semibold underline"> ማብቂያ ቀን: </h3> <span >{louberWorkDetail?.closingDate?.split('T')[0]}-{louberWorkDetail?.closingDate?.split('T')[0]}</span></h3>
                        <div class="pt-2">
                          <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                            <p class=" mt-2">{louberWorkDetail?.description}</p>
                        </div>
                        <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">EplusApp88@gmail.com</span></h3> 
                     </div>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
            </>
          )} 
   </section>
  </div>
      <div className="w-11/12 mx-auto border-t border-gray-500">
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
      )}
    </div>
    </Layout>
    );}
export default Manufacture;