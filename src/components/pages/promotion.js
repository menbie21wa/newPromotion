import React, {useEffect, useState, useRef} from "react";
import Layout from "../layout/layout";
import Allproducts from "./allproducts";
import { BsChevronCompactLeft, BsChevronCompactRight, } from 'react-icons/bs';
import { Alert } from "@material-tailwind/react";
import Vacancie from "./vacancie";
import LouberWork from "./louberWork";
import Fristpage from "./fristpage"
import {getProduct, viewProducts} from "../../actions/productAction";
import classNames from 'classnames';
import { useDispatch, useSelector } from "react-redux";
import  AddressBaseUrl from "../../utils/BaseUrl";
import { button, useNavigate } from "react-router-dom";
import  { dataProducts } from "../data";
import { viewOrganization } from "../../actions/orgAction";
import { viewVacancie2 } from "../../actions/vacanciesAction";
import Orgdetail from "./orgdetail";
import Bidding from "./bidding";
import { RiMenuLine } from "react-icons/ri";
import BackTotop from "./backTOtop";
import Logue from '../../img/Promotion.jpg';
import '../../App.css';
import Notifi from "../../icons/notifi.png";
import vacancy from "../../icons/vacancy.png";
import building from "../../icons/office-building.png";
import producticon from "../../icons/new-product.png";
import bidding from "../../icons/bidding.png";
const Promotion = () =>{

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const { loading, product } = useSelector(
      (state) => state.product
   );
   const { org } = useSelector(
    (state) => state.org
   )
   const { vacancies } = useSelector(
    (state) => state.vacancies
   )
   useEffect(()=>{
       dispatch(viewProducts());
        },[]);
  useEffect(()=>{
    dispatch(viewOrganization());
  },[]);
  useEffect(() =>{
    dispatch(viewVacancie2())
  },[]);
  //console.log("all vacancies are : ", vacancies);
    const [data, setData] =useState(dataProducts || '');
//menu bar
const [menu, setMenu] = useState(false);
const setmenu = () =>{
  if(menu == false){
    // console.log("setMenu : ", menu)
    setMenu(true);
  }else{
    setMenu(false);
  }
}

// get user
const user = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
  const firstSection = useRef();
  const productSection = useRef();
  const orgSection = useRef();
  const vacancieSection = useRef();
  const dayworkSection = useRef();
  const biddingSection = useRef();

  // const scrollToAll = (elmRef) =>{
  //   window.scrollTo({
  //       top : elmRef.current.offsetTop,
  //       behavior: "smooth"
  //   })
  // }
const [isActive,setIsActive]=useState('b0')
const scrollToAllOrg = (elmRef,btn0) =>{
  // if(org?.org?.length >0)
  // {
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
   })
  //}
   setIsActive(btn0)
  }
const scrollToAllProduct = (elmRef,btn2) =>{
  // if((org?.promotedProducts?.promotedProducts?.length)>0)
  // {
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
    })
  //}
    setIsActive(btn2)
  }
const scrollToAllBids = (elmRef,btn3) =>{
  // if(org?.bids?.bids?.length>0)
  // {
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
   })
  //}
   setIsActive(btn3)
  }

const scrollToAllVacancy = (elmRef,btn4) =>{
  // if((org?.job_vacancies?.job_vacancies.length )>0||(org?.daily_works?.daily_works?.length)>0)
  // {
  window.scrollTo({
      top : elmRef.current.offsetTop,
      behavior: "smooth"
    })
  //}
    setIsActive(btn4)
  }

const orgHandler =(id)=>{
  navigate("org/"+id)
  // navigate("org")
}

  useEffect(()=>{
    dispatch(viewOrganization());
     },[]);

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
  const scrollToTop=()=>{
    window.scroll({
      top : 0,
      behavior: "auto"
  })
  }

      //stiky header
      const [isScrolled, setIsScrolled] = useState(true);
      const [prevScrollPos, setPrevScrollPos] = useState(0);
    
      useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setIsScrolled(currentScrollPos < prevScrollPos);
          setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);
      const navbarClasses = classNames('fixed', 'top-0', 'w-full', {
        'opacity-0': !isScrolled,
        'opacity-100': isScrolled,
        'transition-transform duration-700 ease-in-out': true,
      });   
      
      const [isSticky, setIsSticky] = useState(false);
      const scrollDistance = 100; // Adjust this value to define the scroll distance threshold
    
      useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.pageYOffset;
          setIsSticky(currentScrollPos > scrollDistance);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
 return(
  <Layout>
    <div className="bg-[white]">
     <div className="md:pt-0 lg:pt-0 ">
      <>
  <div className='w-full flex flex-row h-16 text-center pl-20 bg-white  text-white '>
    {/* <div>
      <button className='ml-1 w-96 p-5 md:flex block ' 
      onClick={scrollToTop} 
     > 
      <img className=' md:w-32 md:h-24 w-20 h-10 -mt-7 lg:ml-12 sm:ml-5 rounded-2xl' 
      src={Logue} 
      //src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
      alt="NoLogue"
      />
      <h2 className="md:ml-0 -ml-28 text-black ">All Promotions </h2>
      </button>
      </div> */}
     {/* Organization */}
    <div id="toast-notification" className="w-full m-2 max-w-xs pll-2 pr-2 h-10/12 text-center text-gray-900 bg-lime-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex items-center mb-3">
    <button type="button" className=" left-1 -mt-0 font-semibold bg-orange-400   text-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  max-w-80 overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
        1999
      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ የጫራታ ማስታወቂያዎች በቀርብ ቀን ተለቃዋል</span>
        <button type="button" className="ml-auto font-semibold text-orange-400 -mx-1 -my-1.5 bg-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
              !
        </button>
    </div>
    </div>
        {/* product */}
    <div id="toast-notification" className="w-full m-2 h-10/12 max-w-xs pl-2 pr-2  text-center text-gray-900 bg-lime-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex items-center mb-3">
    <button type="button" className=" left-1 -mt-0 font-semibold bg-orange-400   text-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  max-w-80 overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
        1999
      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ የጫራታ ማስታወቂያዎች በቀርብ ቀን ተለቃዋል</span>
        <button type="button" className="ml-auto font-semibold text-orange-400 -mx-1 -my-1.5 bg-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
              !
        </button>
    </div>
    </div>
            {/* product */}
    <div id="toast-notification" className="w-full m-2  h-10/12 max-w-xs pl-2 pr-2 text-center text-gray-900 bg-lime-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex items-center mb-3">
    <button type="button" className=" left-1 -mt-0 font-semibold bg-orange-400   text-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  max-w-80 overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
        1999
      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ የጫራታ ማስታወቂያዎች በቀርብ ቀን ተለቃዋል</span>
        <button type="button" className="ml-auto font-semibold text-orange-400 -mx-1 -my-1.5 bg-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
              !
        </button>
    </div>
    </div>
            {/* product */}
    <div id="toast-notification" className="w-full m-2 h-10/12 max-w-xs pl-2 pr-2 text-center text-gray-900 bg-lime-500 rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
    <div className="flex items-center mb-3">
    <button type="button" className=" left-1 -mt-0 font-semibold bg-orange-400   text-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-full focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex  max-w-80 overflow-x-auto dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
        1999
      </button>
        <span className="mb-1 text-sm mt-1 font-semibold text-gray-900 ">አዲስ የጫራታ ማስታወቂያዎች በቀርብ ቀን ተለቃዋል</span>
        <button type="button" className="ml-auto font-semibold text-orange-400 -mx-1 -my-1.5 bg-white justify-center items-center flex-shrink-0 hover:text-gray-900
                   rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-notification" aria-label="Close">
              !
        </button>
    </div>
    </div>
   </div> 
       <nav className={`navbar ${isSticky ? 'sticky' : ''} z-50 pl-5 top-0 pr-20 overflow-hidden justify-between list-none font-serif uppercase font-medium xl:text-xl 
         md:text-xl xs:text-xs text-justify-center w-full md:h-24 sm:h-20 shadow-xl sm:flex bg-white items-center`}>
      <button className='ml-1 w-96 -mt-1 md:flex block ' 
              onClick={scrollToTop} > 
      <img className=' md:w-28 md:h-24 -mt-2 w-20 h-10 lg:ml-18 sm:ml-5 rounded-2xl' 
      src={Logue} 
      //src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
      alt="NoLogue"
      />
      <h2 className="md:ml-0 -ml-24 mt-7 text-black ">All Promotions </h2>
      </button>
      <div className='text-3xl absolute right-8 top-3 cursor-pointer md:hidden'>
              <RiMenuLine size={24} onClick={setmenu}/>
              {/* <ion-icon name={!menu?'close':'menu'}></ion-icon> */}
      </div>

      <ul className=' lg:flex md:flex bg-white  left-0 w-full md:w-auto
      sm:hidden absolute md:static justify-end flex-1 list-none z-20 '>
      <li className='mx-8'><button className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${isActive === 'b0' ? 'text-[#0099ff]' : ''}`}
                                    onClick={()=> scrollToAllOrg(orgSection,'b0')}
                                    > ድርጅቶች </button></li>
      <li className='mx-8'><button className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${isActive === 'b1' ? 'text-[#0099ff]' : ''}`}
                                    onClick={()=> scrollToAllProduct(productSection,'b1')}>
                                    ምርቶች</button></li>
      <li className='mx-8'><button className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${isActive === 'b2' ? 'text-[#0099ff]' : ''}`}
                                    onClick={()=> scrollToAllBids(biddingSection,'b2')}>   
                                      የጨረታ ማስታዎቂያ </button></li>
      <li className='mx-8'><button  className={`transition duration-700 transform hover:-translate-y-1 hover:scale-110 hover:text-[#0099ff]
                                    ${isActive === 'b3' ? 'text-[#0099ff]' : ''}`}
                                    onClick={()=> scrollToAllVacancy(vacancieSection,'b3')}>
                                    የስራ ማስታዎቂያ</button></li>
       </ul>
      </nav>
      {/* <div className='sticky top-0 w-full h-7 text-center  bg-green-800 text-white p-2 z-50'>
     <i> General Promotion for several services </i>
    </div>  */}
      {/* Mobile Navigation */}
      <ul className={`${menu ? "left-0 opacity-100" :"left-[-750px] md:opacity-0"}
                    sm:flex lg:hidden flex-1  list-none flex flex-col
                    p-6 bg-black-gradient fixed w-full right-0  ml-0 my-2 top-14
                    sidebar bg-white transition-all duration-500 ease-in z-50
                    `}>
    <li className='mx-6 py-3 font-serif uppercase font-medium text-xl '>
          <button onClick={()=> scrollToAllOrg(orgSection)}
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110 flex' 
            > <img className=' w-6 h-5 mx-4 ' src={building} alt='Noicon'/> ድርጅቶች </button></li>
    <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
          <button onClick={()=> scrollToAllProduct(productSection)}
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'>
          <img className=' w-6 h-5 mx-4 ' src={producticon} alt='Noicon'/> ምርቶች</button></li>
          <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
        <button onClick={()=> scrollToAllBids(biddingSection)}
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex' 
            >   
          <img className=' w-6 h-5 mx-4 ' src={bidding} alt='Noicon'/> የጨረታ ማስታዎቂያ </button></li>
    <li className='mx-6 py-2 font-serif uppercase font-medium text-xl '>
          <button onClick={()=> scrollToAllVacancy(vacancieSection)}
          className='transition duration-700 transform hover:-translate-y-1 hover:text-[#0099ff] hover:scale-110  flex'>
          <img className=' w-6 h-5 mx-4' src={vacancy} alt='Noicon'/>  የስራ ማስታዎቂያ</button></li>
    </ul>
   </>    
  </div> 
     <div className="md:pt-24 lg:pt-24  pt-18 -ml-7  mb-10 border-gray-400" ref={firstSection}>
     <Fristpage />
     </div>
     <div className="mb-7 md:pl-8 pl-0 p-5 md:mt-5 -mt-10 mr-2" ref={orgSection}>
        <Orgdetail />
     </div>
     <div className="pt-2  md:pl-8 pl-0 border-t mr-2 border-b border-gray-400 mb-7 p-5" ref= {productSection}>
       <Allproducts />
     </div>
     <div className="md:pt-6  md:pl-7 pl-0 lg:pt-6 md:mr-7 mr-0" ref= {biddingSection}>
       <Bidding />
     </div>
      <div className="md:pt-6  md:pl-7 pl-0 pt-7 md:mr-7 mr-0 md:mt-5 mt-10 pb-10 border-t border-gray-400 mb-1 " ref={vacancieSection}>
        <Vacancie />
      </div>
      <div className="md:pt-6 pt-2 md:pl-8 pl-0 md:mr-7 mr-0 md:mt-5 mt-10 border-t border-b border-gray-400 pb-10" ref={dayworkSection}>
       <LouberWork />
      </div>
      <div>
       <BackTotop />
     </div>
    </div>
    </Layout>
 )}
export default Promotion;