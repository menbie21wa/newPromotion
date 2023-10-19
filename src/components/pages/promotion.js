import React, {useEffect, useState, useRef} from "react";
import Layout from "../layout/layout";
import Allproducts from "./allproducts";
import Fristpage from "./fristpage";
import Vacancie from "./vacancie";
import LouberWork from "./louberWork";
import {getProduct, viewProducts} from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import { button, useNavigate } from "react-router-dom";
import  { dataProducts } from "../data";
import { viewOrganization } from "../../actions/orgAction";
import { viewVacancie2 } from "../../actions/vacanciesAction";
import Orgdetail from "./orgdetail";
import Bidding from "./bidding";
import { RiMenuLine } from "react-icons/ri";
import BackTotop from "./backTOtop";
import Logue from '../../img/logobg2.png';
import '../../App.css';
import img1 from "../../icons/office.png";
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

  const scrollToAll = (elmRef) =>{
    window.scrollTo({
        top : elmRef.current.offsetTop,
        behavior: "smooth"
    })
  }
 return(
  <Layout>
   <div className="bg-[#E3E6E6]">

{/* <div className='fixed top-3 mt-24 lg:flex hidden  -translate-x-0 translate-y-[50%] left-2 text-2xl bg-white/20 hover:bg-white/40 text-black cursor-pointer duration-300 z-10'>
      <RiMenuLine size={24} onClick={setmenu}/>
  </div> */}
  {/* {menu && (
    <>
    <div className='fixed bg-[#E4E4E4] w-52 h-48 top-10 mt-28 -translate-x-2 translate-y-[10%] left-2 opacity-100 duration-300 inset-0 text-xl text-[#F49F08] font-semibold italic space-y-2 z-10'>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button onClick={()=>scrollToAll(orgSection)}>ድርጅቶች</button>
     </div>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button onClick={() => scrollToAll(productSection)}>ምርቶች</button>
     </div>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button onClick={()=> scrollToAll(vacancieSection)}>የስራ ማስታዎቂያ</button>
     </div>
     <div className='motion-safe:hover:translate-x-2 duration-700'>
      <button onClick={()=> scrollToAll(biddingSection)}>የጨረታ ማስታዎቂያ</button>
     </div>
    </div>
   </>
  )} */}
   <div className="md:pt-0 lg:pt-0 ">
   <>
  {/* <div className='w-full h-10 text-center bg-slate-400 mt-2 text-white p-2'>
   This is my try from nave bar
  </div> */}
<nav className=' z-50 fixed top-0 overflow-hidden justify-between list-none font-serif uppercase font-medium xl:text-xl 
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
<li className='mx-6'><button  onClick={()=> scrollToAll(firstSection)}
className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
to ="/">ስለ ኢጵላሣጵ</button></li>
<li className='mx-6'><button onClick={()=> scrollToAll(orgSection)}
className='  transition duration-700 transform hover:-translate-y-1 hover:scale-110' 
    > ድርጅቶች </button></li>
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
 <li className='mx-8'><button onClick={()=> scrollToAll(firstSection)}
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
                <button onClick={()=> scrollToAll(firstSection)}
                 className='transition duration-700 transform hover:-translate-y-1 hover:scale-110  flex'
                to ="/"> <img className=' w-6 h-5 mx-4 ' src={img1} alt='Noicon'/> ስለ ኢጵላሣጵ</button></li>
 <li className='mx-6 py-3 font-serif uppercase font-medium text-xl '>
      <button onClick={()=> scrollToAll(orgSection)}
       className='transition duration-700 transform hover:-translate-y-1 hover:scale-110 flex' 
        > <img className=' w-6 h-5 mx-4 ' src={building} alt='Noicon'/> ድርጅቶች </button></li>
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
       <button onClick={()=> scrollToAll(firstSection)}
        className='transition duration-700 bg-red-400 rounded py-1 px-3 transform hover:-translate-y-1 hover:scale-110 flex'
     to ="/About"> ውጥት</button></li>
    </ul>
   </>    
  </div>
     <div className="md:pt-24 lg:pt-24  pt-18 -ml-8 border-b mb-10 border-t border-gray-400" ref={firstSection}>
        <Fristpage />
     </div>
     <div className="md:pt-6 lg:pt-6 pt-2 pb-10 ml-5 mr-7 mb-10 bg-white" ref={vacancieSection}>
        <Vacancie />
      </div>
      <div className="md:pt-6 lg:pt-6 pt-2  ml-3 border-t border-gray-400 mb-7 pb-10" ref={dayworkSection}>
       <LouberWork />
     </div>
      <div className="-ml-8 border-t border-gray-400 mb-7 p-5" ref={orgSection}>
        <Orgdetail />
      </div>
      <div className="pt-10 ml-3 border-t border-gray-400 mb-7 p-5" ref= {productSection}>
       <Allproducts />
     </div>
     <div className="pt-10 -ml-6 border-t border-gray-400 m-7 p-5" ref= {biddingSection}>
       <Bidding />
     </div>
     <div>
       <BackTotop />
    </div>
    </div>
    </Layout>
 )
}
export default Promotion;