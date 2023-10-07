import React, {useEffect, useState, useRef} from "react";
import Layout from "../layout/layout";
import Allproducts from "./allproducts";
import Fristpage from "./fristpage";
import Vacancie from "./vacancie";
import LouberWork from "./louberWork";
import {getProduct, viewProducts} from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import { NavLink, useNavigate } from "react-router-dom";
import  { dataProducts } from "./data";
import { viewOrganization } from "../../actions/orgAction";
import { viewVacancie2 } from "../../actions/vacanciesAction";
import Orgdetail from "./orgdetail";
import Bidding from "./bidding";
import { RiMenuLine } from "react-icons/ri";
import BackTotop from "./backTOtop";

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

  const productSection = useRef();
  const orgSection = useRef();
  const vacancieSection = useRef();
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
{/* menuBar */}
<div className='fixed top-3 -translate-x-0 translate-y-[50%] left-2 text-2xl bg-white/20 hover:bg-white/40 text-black cursor-pointer duration-300 z-10'>
      <RiMenuLine size={24} onClick={setmenu}/>
  </div>
  {menu && (
    <>
    <div className='fixed bg-[#E4E4E4] w-52 h-48 top-10 -translate-x-2 translate-y-[10%] left-2 opacity-100 duration-300 inset-0 text-xl text-[#F49F08] font-semibold italic space-y-2 z-10'>
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
  )}

      <div className="md:pt-0 lg:pt-0 pt-12">
        <Fristpage />
     </div>
      <div className="md:pt-6 lg:pt-6 pt-2 pb-2" ref={vacancieSection}>
        <Vacancie />
      </div>
      <div className="pt-10" ref= {biddingSection}>
       <LouberWork />
     </div>
      <div className="" ref={orgSection}>
        <Orgdetail />
      </div>
      <div className="pt-10" ref= {productSection}>
       <Allproducts />
     </div>
     <div className="pt-10" ref= {biddingSection}>
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