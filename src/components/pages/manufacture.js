import React, {useEffect,useRef, useState} from "react";
import Layout from "../layout/layout";
import Contact from "./contactus";
import Loading from "./loading";
import { FaArrowLeft } from "react-icons/fa";
import defualtImg from '../../img/img1.jpg'
import  { organizationdata } from "../organizationdata";
import Fristpage from "./fristpage";
import logos from '../../img/img1.jpg'
import education from '../../img/sun_icon3.jpeg';
import healthcare from '../../img/hero.jpeg';
import { RiMenuLine } from "react-icons/ri";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { button, useNavigate } from "react-router-dom";
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
import classNames from 'classnames';
import icon1 from '../../img/download.jpeg'
import icon3 from '../../img/download.png'
const Manufacture = () =>{
 // window.scrollTo(0, 0);
 const dispatch = useDispatch();
 const navigate = useNavigate();
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

//Products
const {id} = useParams();
useEffect(() => {
   dispatch(getOrganization(id));
},[]);

const  {org}  = useSelector(
  (state) => state.org
)
 console.log("yibe",org?.job_vacancies
 )
console.log("organization detail now : ", org?.job_vacancies?.job_vacancies[0]?.title);
const firstSection = useRef();
const productSection = useRef();
const vacancieSection = useRef();
const dayworkSection = useRef();
const biddingSection = useRef();
// const [start, setStart] = useState(false);
// const secRef = useRef();
 const getHome=()=>{
  window.scrollTo({top: 0, 
    left: 0, 
    behavior: 'auto'
   // behavior: 'smooth'
  });
    }
    const getFooter=()=>{
      window.scrollTo({
        top: document.documentElement.scrollHeight,  
        left: 0,
        behavior: 'auto'
        //behavior: 'smooth'
         });
        }
const scrollToAll = (elmRef) =>{
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
  })
}
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

  const backNavigate =(id)=>{
    navigate("/")
    // navigate("org")
  }
  
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

  const [description, setDescription] = useState(descrip.substring(0,700)+'   . . .');

  var hidden=''
  if (descrip.length > 700 ) {
    hidden='visible'
  }
  else{
    hidden='hidden' 
  }
  const [background, setBackground] = useState('');

  const getDescription=()=>{
    setDescription(descrip)
    setBackground('bg-[#E3E6E6] text-[#E3E6E6]')
  }

    return(
        <Layout>
 <div className="md:pt-0 lg:pt-0 ">
   <>
  {/* <div className='w-full h-10 text-center bg-slate-400 mt-2 text-white p-2'>
   This is my try from nave bar
  </div> */}
 <nav className=' z-50 fixed pr-7  top-0 overflow-hidden justify-between list-none font-serif uppercase font-medium xl:text-xl 
 md:text-xl xs:text-xs text-justify-center w-full lg:h-24 md:h-28 sm:h-20 shadow-xl sm:flex bg-white items-center '>
<div className="flex">
<button className=" left mt-10 ml-5 -mr-3 h-6 w-6 z-100 bg-amber-400 items-center rounded-full"
onClick={() => backNavigate()}>
             {/* <button className="fixed bottom-10 right-5 h-6 w-6 z-100 bg-white text-2xl" onClick={scrollTop}>^</button> */}
             <FaArrowLeft className=" text-white items-center m-1"  />
</button>
<button className=' w-96 p-5 md:flex block '  
onClick={() => backNavigate()}> 
<img className=' md:w-32 md:h-20 w-20 h-10  -mt-3 lg:ml-5 sm:ml-5 rounded-2xl' 
//src={Logue} 
src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
alt="NoLogue"
/>
<h2 className="md:-ml-1 -ml-32 ">{org?.org?.name} </h2>
</button>
</div>
<div className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
          <RiMenuLine size={24} onClick={setmenu}/>
          {/* <ion-icon name={!menu?'close':'menu'}></ion-icon> */}
</div>
<ul className=' mr-8 mt-3 lg:flex md:flex bg-white  left-0 w-full md:w-auto
 sm:hidden absolute md:static justify-end items-center flex-1 list-none z-20 '>
<li className='mx-6'><button  onClick={()=> getHome()}
className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
to ="/">ስለ ድርጅቱ</button></li>
<li className='mx-6'><button  onClick={()=> scrollToAll(firstSection)}
className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
to ="/">አግኙን</button></li>
<li className='mx-6'><button onClick={()=> scrollToAll(productSection)}
className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
ምርቶች</button></li>
<li className='mx-6'><button onClick={()=> scrollToAll(biddingSection)}
  className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex' 
    >   
    የጨረታ ማስታዎቂያ </button></li>
 <li className='mx-6'><button onClick={()=> scrollToAll(vacancieSection)}
 className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
 የስራ ማስታዎቂያ</button></li>
 {/* <li><button className=' transition duration-700 transform hover:-translate-y-1 hover:scale-110 ml-12 flex' 
    >  ግብት </button></li> */}
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
                to ="/"> <img className=' w-6 h-5 mx-4 ' src={img1} alt='Noicon'/>ስለ ድርጅቱ</button></li>
                <li className='mx-6 font-serif uppercase font-medium text-xl'>
                <button onClick={()=> getFooter()}
                 className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
                to ="/"> <img className=' w-6 h-5 mx-4 ' src={img1} alt='Noicon'/>አግኙን</button></li>
 <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
      <button onClick={()=> scrollToAll(productSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
      <img className=' w-6 h-5 mx-4 ' src={producticon} alt='Noicon'/> ምርቶች</button></li>
      <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
     <button onClick={()=> scrollToAll(biddingSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex' 
        >   
        <img className=' w-6 h-5 mx-4 ' src={bidding} alt='Noicon'/> የጨረታ ማስታዎቂያ </button></li>
 <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
      <button onClick={()=> scrollToAll(vacancieSection)}
      className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'>
      <img className=' w-6 h-5 mx-4 ' src={vacancy} alt='Noicon'/>  የስራ ማስታዎቂያ</button></li>
    {/* <li><button className=' transition duration-700 transform hover:-translate-y-1 hover:scale-110 ml-12 flex' 
        >  ግብት </button></li> */}
    </ul>
   </>    
  </div>
  <div className=" mt-20 bg-[#E3E6E6] ">
        <div className=" bg-[#E3E6E6] md:flex-row pb-20 flex-col md:pt-0 lg:pt-0 md:mb-24 mb-44 pt-24 h-full md:h-full w-full border-b  group">
          <div className='h-full -mb-44 md:flex block md:h-full w-full md:mt-20 -mt-0 rounded p-2'> 
          <div
            className=" md:w-10/12 md:mb-0 mb-16  md:mr-8 h-full md:mt-5 -mt-10 flex md:ml-5 ml-2 flex-col md:p-2 p-3 justify-center items-center">
               <h1 className="text-4xl md:text-4xl xl:text-5xl text-[#F49F08] font-bold font-display tracking-tight leading-tight italic">
                  {`${org?.promotedOrgs && org?.org?.name}`}
                  </h1>
                  <p className="text-2xl md:text-2xl mt-4 xl:text-3xl text-[#F49F08] font-bold font-display tracking-tight leading-tight">
                  {`${ org?.promotedOrgs && org?.org?.businessSector}`}</p>
                  <p className='mt-7'>
                  {org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.description}



                  <div> 
          {/* Description Page */}
      <p className={paragraphClass}> 
      {descrip}
      </p> 
      {!expanded && ( 

            <button 
          className="text-blue-500 hover:underline w-32 pl-3 rounded-lg h-10 bg-amber-500 " 
          onClick={toggleExpanded} 
        >  Read More
        <img className='w-6 h-6 -ml-2 -mt-6 rounded-full' alt='' src={icon3}/> 
         </button> 
                )} 
        {expanded && ( 
          <button 
          className="text-blue-500 hover:underline w-32 pl-3 rounded-lg h-10 bg-amber-500 " 
          onClick={toggleExpanded} 
        >  Read less
        <img className='w-6 h-6 -ml-2 -mt-6 rounded-full' alt='' src={icon3}/> 
         </button>
         )} 
       </div> 
      </p>
         </div>
        <div
          // style={{ backgroundImage: `url(${org && org[currentIndex]?.url})` }}
          className=' md:-ml-5 ml-5 md:mt-7 -mt-16 md:pr-3 pr-0 rounded-2xl md:w-2/3 w-40 md:h-full h-60 bg-center duration-700 relative bg-cover bg-no-repeat'
          >
          <img 
          className="md:w-full md:h-96 w-11/12 h-3/4  rounded-lg"
         // src={`/img/Eplusapp1.png`} 
          src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
          alt=""
          />
        </div>
       </div>
     </div>
 {/* product list */}
 { 
     (org?.promotedProducts?.promotedProducts?.length)>0
      ?(
        <div className="items-center py-3 ml-16 mr-12 mb-4 border-t border-gray-500 mt-7" ref={productSection}>
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8"> ምርቶች </span>
         </button>
        </div>
      ):(null)
    }
    <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4 ml-16 mr-12">
      {
        (org?.promotedProducts?.promotedProducts?.length)>0
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
                      className="w-screen h-72 transition cursor-pointer duration-700"                     
                     onClick={() => ProductsDetail(products) }
                      //src={`/img/${products.featureImage}`}
                      src={`${AddressBaseUrl}/images/${products.image}`}
                      alt="product img not found"
                    />
                  </div>
                </div>
            <div className="ml-5 m-auto">
              <p className="text-sm font-bold">{products.name}</p>
              <p className="mb-2 text-sm ">{products.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {products?.createdAt.split('T')[0]}</p>
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
              <div className="relative w-auto my-6 mx-auto max-w-7xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
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
                  <div className="w-full flex bg-white">
                    <div className="p-3 w-1/2 border border-grey-100 shadow-lg">
                    <img
                    className="w-full h-96 transition cursor-pointer duration-700"
                      //src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                      src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
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
     (org?.bids?.bids?.length)>0
      ?(
        <div className="items-center py-3 mb-4 ml-16 mr-12 mt-6 border-t border-gray-500" ref= {biddingSection}>
         <button className="  text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የጨረታ ማስታዎቂያ </span>
         </button>
        </div>
       ):(null)
     }
     <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4 ml-16 mr-12">
      {
        (org?.bids?.bids?.length)>0
          ?(
            org?.bids?.bids?.slice(0, 3).map((bid, index) => (
       <div key={index} className="mb-6 lg:mb-0 ">
        <div class="relative group block bg-white rounded-lg shadow-inner shadow-blue-950/40 p-1">
            <div className="flex pb-2">
                  <div
                    className="p-2  relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-72 transition cursor-pointer duration-700"
                     // src={`${AddressBaseUrl}/images/${bid.image}`}
                     src={`${AddressBaseUrl}/images/${bid.image}`}
                      alt="product img not found"
                      onClick={() => BiddingDetail(bid) }
                    />
                  </div>
                </div>
            <div className=" ml-5 m-auto">
              <p className="text-sm font-bold">{bid?.title}</p>
              <p className="mb-2 text-sm ">{bid?.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {bid?.createdAt.split('T')[0]}</p>
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
         <div className="relative w-auto my-6 mx-auto max-w-7xl">
           {/*content*/}
             <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
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
                  <div className="w-full flex bg-white">
                    <div className="p-3 w-1/2 border border-grey-100 shadow-lg">
                    <img
                      className="w-full h-96 transition cursor-pointer duration-700"
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
                     {(org?.promotedOrgs?.length > 0)
                      ?(
                        org?.promotedOrgs?.map((orgs,index) => 
                      (
                        (orgs.id)==(detailInfo.orgId)?(
                            <>
                            <h3 class="border-t mb-2 pt-3 font-semibold underline">
                              phone: <span class="font-thin">{orgs?.phone}</span></h3>
                              <h3 class="border-t mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">{orgs?.email}</span></h3> 
                          </>)
                          :("")  
                      ))):("")} 
                   </div>
                  </div>
                 </div>
                </div>
               </div>
            </>
          )} 
          {/* Vacancy */}
<div className="w-11/12 xl:w-11/12 mx-auto md:mt-10 lg:mt-20 border-t border-gray-500 ">
    <section className="mb-12 text-gray-800 text-center ">
    {/* job_vacancies */}
    {/* (org?.job_vacancies?.length)>0 */}
    { 
     ((org?.job_vacancies?.job_vacancies.length )>0||(org?.daily_works?.daily_works?.length)>0)
      ?(
        <div className="items-center py-3 mb-4">
         <button className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የስራ ማስታዎቂያ</span>
         </button>
        </div>
      ):(null)
    }
      <div class="grid lg:grid-cols-3 xl:gap-10 md:gap-6 xl:gap-x-4" ref={vacancieSection}>
      {
        (org?.job_vacancies?.job_vacancies.length)>0
          ?(
            org?.job_vacancies?.job_vacancies?.slice(0, 7).map((job, index) => (
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
                      className="w-screen h-72 transition cursor-pointer duration-700"
                      //src={`/img/${job.featureImage}`}
                      src={`${AddressBaseUrl}/images/${job.image}`}
                      alt="product img not found"
                      onClick={() => VacancieDetail(job) }
                    />
                  </div>
                </div>
            <div className="m-auto">
              <p className="text-sm font-bold">{job?.title}</p>
              <p className="mb-2 text-sm ">{job?.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {job?.createdAt.split('T')[0]}</p>
             </div>
            </div>
           </div>
        )))
      :(null)  
      }
     </div>
     {vacancieDel && (
          <> 
          <div className="justify-center items-center  flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6  mx-auto max-w-7xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg bg-orange-400 relative flex flex-col w-full  outline-none focus:outline-none">
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
                  <div className="w-full flex bg-white">
                    <div className="p-2 w-1/2 border border-grey-100 shadow-lg">
                    {/* src={`/img/${detailInfo.featureImage}`} */}
                    <img
                    className="w-full h-96 rounded-md transition cursor-pointer duration-700"
                     
                      //src={`${AddressBaseUrl}/images/${detailInfo.image}`}
                      src={`${AddressBaseUrl}/images/${detailInfo.image}`}
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
         (org?.daily_works?.daily_works?.length)>0
           ?(
            org?.daily_works?.daily_works?.slice(0, 7).map((job, index) => (
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
                      className="w-screen h-72 transition cursor-pointer duration-700"
                      //src={`/img/${job.featureImage}`}
                      src={`${AddressBaseUrl}/images/${job.image}`}
                      alt="product img not found"
                      onClick={() => LouberDetail(job) }
                    />
                  </div>
                 </div>
                <div className="m-auto">
              <p className="text-sm font-bold">{job?.title}</p>
              <p className="mb-2 text-sm ">{job?.description.substring(0, 30) + " ..."}</p>
              <p className="mb-2 text-sm ">  {job?.createdAt.split('T')[0]}</p>
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
              <div className="relative w-auto my-6 mx-auto max-w-7xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
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
                  <div className="w-full flex bg-white">
                    <div className="p-3 w-1/2 border border-grey-100 shadow-lg">
                    <img
                    className="w-full h-96 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
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

   </section>
  </div>
      <div className="w-11/12 mx-auto border-t border-gray-500" ref={firstSection}>
       <div class="grid lg:grid-cols-2 xl:gap-10 md:gap-6 xl:gap-x-4">
        <div className="flex items-center justify-center md:justify-start">
         <NavLink onClick={() => setOpen(true)} className="text-xl text-[#F49F08]" style={navLinkStyles}> ለበለጠ መረጃ </NavLink>
         </div>
          <div>
           <button onClick={() => setOpen(false)} className="text-xl text-black"> {org?.org?.name}</button>
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
                src={`${AddressBaseUrl}/images/${org?.org?.logo}`}
                //src={smartDesktop}
                alt="img of eplus img"
                className="w-full rounded-lg h-[350px] mt-6"
              />
            </div>
            <div data-aos="fade-up" className="grow-0 shrink-0 basis-auto w-full  md:w-6/12 xl:w-6/12" >
              <div className="pl-5 xl:pl-10 mt-4 select-none">
                <p className="text-textColor font-display xl:text-lg md:text-lg leading-8 text-left tracking-tight pb-2">
                {org?.org?.name}
                </p>
                <p className="text-textColor font-display xl:text-lg md:text-lg leading-8 text-left tracking-tight pb-2">
                  {/* ኢጵላሣጵ ንግድ ስራዎች አክሲዮን ማህበር በኢትዮጵያ አዲሱ የንግድ ፈቃድ መስጫ መደብ መሠረት ረቂቅ
                  መረጃ ወይም ሶፍትዌር ፍብርክ (ንድፍ፣ ምርት፣ ብልጽግ፣ ትግብር፣ ድር ንድፍና ዝርግት አካቶ) እና
                  መረጃ የማቀነባበርና የመረጃ ቋት የማደራጀት ስራዎች ረቂቅ የመረጃ ምጥቀቶችን ማዘጋጀት፣ የመረጃ
                  ቋት ማዘጋጀት፣ በቀላሉ እንዲፈለጉ ማድረግ፣ ወቅቱን ጠብቆ የማሻሻል፣ የሶፍትዌር ዲዛይን፣ ልማት፣ */}
                  {org?.org?.description}

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