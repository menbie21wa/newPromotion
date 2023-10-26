import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import {useParams,useNavigate } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgGirl from '../../img/ecommerce.jpg';
import { useDispatch, useSelector } from "react-redux";
import { dataProducts } from "../data";
import smartPhone from '../../img/computerimge/mouse.jpg';
import Loading from "./loading";
import { addToDetail } from "../../actions/detail";
import { HiOutlineX } from "react-icons/hi";
import AddressBaseUrl from "../../utils/BaseUrl";
import like from '../../icons/like.png';
import {viewOrganization } from '../../actions/orgAction';
import { getProduct,searchProduct,viewProducts,productCategory} from "../../actions/productAction";
const Allproducts = () => {
  const [seeMore, setSeeMore] = useState(false);
  const [vacancieDel, setVacancieDel] = useState(false);
  const [productDel, setProductDel] = useState(false);
  const [defaultImage, setDefaultImage] = useState({});
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
//  const [product, setData] =useState(dataProducts || '');
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
     if (term === "") return alert("Please enter search term!");
    // dispatch(searchVacancies(term));
    console.log("term : ",term);
    //setTerm("");
  };
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setData(dataProducts);
  // }, [dataProducts])
  const { org } = useSelector(
    (state) => state.org )
  //console.log("all vacancies are : ", vacancies);
// const pages = 1;
const navigate =useNavigate()
const orgHandler=(id)=>{
   navigate("org/"+id)
}
useEffect(() =>{
  dispatch(viewOrganization());
},[]);
useEffect(() =>{
  dispatch(viewProducts());
},[]);

  const [currentIndex, setCurrentIndex] = useState(1);
  const {product} = useSelector(
    (state)=> state.product
  );
  console.log("qq==",product?.promotedProducts?.length  )
  const [page, setPage] = useState(1)
const selectPageHandler = (selectedPage) => {
  // alert(data.length+","+selectedPage)
  console.log("next button cliked : ",selectedPage);
  if (selectedPage >= 1 && (selectedPage * 12)-12 <= product?.length  && selectedPage !== page) {
    setPage(selectedPage)
  }
}
// console.log("all products are : ", product);
  const VacancieDetail = (data) =>{
    dispatch(addToDetail(data));
    setVacancieDel(true);
  }
  const likeProduct=()=>{
    alert("like")
   } 
  const detailInfo = localStorage.getItem("detailInfo")
  ? JSON.parse(localStorage.getItem("detailInfo"))
  : null;

  return (
    <>
   <div className=" w-full bg-[#E3E6E6] md:mt-0 mt-20 ">
  <div className=" mx-auto h-4/5">
   <section className="mb-6 text-gray-800 text-center group">
    <div className=" md:flex block flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
      <div className="flex items-center py-3 mb-4 md:ml-0 ml-3">
        <button
        className=" text-lg font-display text-black font-medium hover:text-[#0397FF]">
          <span className="mt-10 md:-ml-3  underline decoration-pink-800 decoration-4 underline-offset-8">ሁሉም</span> ምርቶች
        </button>
        <form onSubmit={submitHandler}>
        <div class=" mb-4 flex flex-wrap items-stretch absolute md:mt-0 mt-6 md:ml-0 ml-5 md:right-16 right-10">
         <input className="bg-[#E3E6E6] p-3 rounded-md md:-mt-5 ml mt-0 z-20 " 
             type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>
             <button
             class="relative bg-[#E3E6E6] rounded-md md:-mt-5 mt-0 z-20 flex items-center rounded-r bg-secondary px-6
              py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 
              ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none 
              focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
   <div className=' bg-white  md:flex lg:flex pb-20 md:-mt-1 mt-3 md:pl-16 pl-0 md:ml-3 md:mr-0 ml-10 mr-5'>    
    <div class="relative grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 xl:gap-20 md:gap-20 gap-12 my-3 xl:gap-x-10 md:gap-x-7 gap-x-5">
      {
      (product?.promotedProducts?.length)>0
        ?(
          product?.promotedProducts?.slice(page * 12 - 12, page * 12).map((item, index) => {
            return(
              <>
             <div key={index} className=" h-40 md:h-56 xl:h-s6 xl:w-96 md:w-80 sm:w-60 relative md:ml-2 ml-2 mr-2 my-10 mb-24 md:mb-0">
             <div className="w-full h-full relative border-gray-600 
                 shadow-lg shadow-neutral-900 bg-cover bg-no-repeat "> 
                 <div className="relative flex justify-center items-center h-full">
                    <img
                    className="relative transition hover:scale-125 w-full h-full cursor-pointer duration-700 rounded-xl border-2 border-b-2 border-gray-600"
                    //  src={`/img/${item.featureImage}`} 
                    src={`${AddressBaseUrl}/images/${item.featureImage}`}
                      onClick={ () => VacancieDetail(item)}
                     // src={smartPhone}
                      alt="product img not found"
                    />
             </div>
            </div>
            <div className="mt-4 float-left flex">
          <ul  className='  mt-3 flex'>
          {(org?.promotedOrgs?.length > 0)
         ?(
          org?.promotedOrgs?.map((orgs,index) => 
        (
          (orgs.id)==(item.orgId)?(
               <button 
             onClick={() => orgHandler(`${orgs.id}`)}
             >
             <img className=' w-7 h-6 rounded-2xl' 
               src={`${AddressBaseUrl}/images/${orgs?.logo}`}
               alt='Noimage'/>
             </button>)
            :("")))):("")}

          </ul>
           {/* src={`${AddressBaseUrl}/images/${vacancie.image}`}  */}
          <a>
        <span className="mt-1 ml-2">{item.name.substring(0,80)}<br />
       {(org?.promotedOrgs?.length > 0)
         ?(
          org?.promotedOrgs?.map((orgs,index) => 
        (
          (orgs.id)==(item.orgId)?(
            <button 
             className='ml-2 text-amber-400'
             onClick={() => orgHandler(`${orgs.id}`)}
             >
             {orgs.name.substring(0,75)}
             </button>
            ):(""))))
        :("")}
        </span><br />
          </a>  
         </div>
    </div>
   </>)})):(<><div className=" text-xl font-semibold flex justify-center mt-5 ml-32">
    ------ ምንም ምርት የለም ! ------</div></>)}
  </div>
  </div>
   <br /> <br />
      {(product?.promotedProducts?.length) > 0 && 
       <div className=" justify-center ml-10 mt-10">
        {(product?.promotedProducts?.length >=page * 12)?(
           <p className='text-sm text-gray-700 mb-7'>
            ክጠቅላላ <span className='font-medium ml-2 mr-2'> {product?.promotedProducts?.length} </span>
            ምርቶች  ዝርዝር ውስጥ ከቁጥር <span className='font-medium ml-2 mr-2'>{page * 12 - 12}</span>
             እስከ ቁጥር <span className='font-medium ml-2 mr-2'> {page * 12} </span> የሚገኙ ምርቶች  ዝርዝር  
             </p>
          ):<p className='text-sm text-gray-700 mb-7'>
              <p className="mr-2">(መጨረሻው ነው)</p> ጠቅላላ <span className='font-medium ml-2 mr-2'> {product?.promotedProducts?.length} </span>
              ምርቶች ብቻ ይገኛሉ::  
            </p>
          }
        <nav
          className='relative z-0  inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <button
          onClick={() => selectPageHandler(page - 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border
             bg-slate-700 border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className="font-bold">ምልስ</span>
          </button>
          <button
          onClick={() => selectPageHandler(page + 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border
             border-gray-300 bg-slate-700 text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
         <span className=" font-bold">ቅጣይ</span>
       </button>
       </nav>
       </div>
      }
        {vacancieDel && (
          <> 

          <div className="justify-center items-center flex overflow-x-hidden  border-grey-100 shadow-lg overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
         <div className="relative w-auto my-6 mx-auto bg-slate-500 max-w-7xl border border-grey-100 shadow-lg">
           {/*content*/}
             <div className="rounded-lg shadow-lg relative border border-grey-100 flex flex-col w-full bg-orange-400 outline-none focus:outline-none">
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
                  <div className=" bg-white w-full flex flex-row">
                    <div className="p-4 w-1/2">
                    <img
                      className="w-full h-96 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${detailInfo.featureImage}`}
                     // src={samrtPc} 
                      alt="product img not found"
                      /> 
                      </div>
                     <div className="m-4 w-1/2 border border-grey-100 shadow-lg">
                     <p className="text-lg font-bold">{detailInfo?.name}</p> 
                     <div class="pt-2">
                     <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p>
                     </div>
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.price} ብር</p>    
                    {(org?.promotedOrgs?.length > 0)
                      ?(
                        org?.promotedOrgs?.map((orgs,index) => 
                      (
                        (orgs.id)==(detailInfo.orgId)?(
                            <>
                            <h3 class="border-t mb-2 ml-8 mr-6 pt-3 font-semibold underline">
                              phone: <span class="font-thin">{orgs?.phone}</span></h3>
                              <h3 class="border-t ml-8 mr-6 mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">{orgs?.email}</span></h3> 

                          </>)
                          :("")  
                      ))):("")} 
                   </div>
                  </div>
                 </div>
                </div>
               </div>


            {/* <div className="  w-11/12 h-11/12 bg-orange-500 mr-2 items-center m-5 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  border border-gray-500">
                   <div className="flex p-3 float-right -mt-5 ">
                    <button
                       onClick={() => setVacancieDel(false) }
                      type="button"
                      className="text-red-600 bg-transparent hover:bg-gray-200 rounded-lg text-lg p-1 ml-auto inline-flex items-center"
                      data-modal-toggle="log-in-model"
                    >
                      <HiOutlineX className="w-6 h-6" />
                    </button>
                  </div>                  
                  <div className=" flex w-full bg-white h-full">
                  <img
                    className="  w-1/2 h-96 transition cursor-pointer duration-700"
                    src={`${AddressBaseUrl}/images/${detailInfo.featureImage}`}
                      //src={smartPhone} 
                      alt="product img not found"
                    /> 
                    <div className="w-1/2 h-8/9 ">
                    <div className="m-4 w-full h-full bg-white">
                   <p className="text-lg font-bold">{detailInfo?.name}</p> 
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p>
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.price} ብር</p>    
                    {(org?.promotedOrgs?.length > 0)
                      ?(
                        org?.promotedOrgs?.map((orgs,index) => 
                      (
                        (orgs.id)==(detailInfo.orgId)?(
                            <>
                            <h3 class="border-t mb-2 ml-8 mr-6 pt-3 font-semibold underline">
                              phone: <span class="font-thin">{orgs?.phone}</span></h3>
                              <h3 class="border-t ml-8 mr-6 mb-2 pt-3 font-semibold underline">Email: <span class="font-thin">{orgs?.email}</span></h3> 

                          </>)
                          :("")  
                      ))):("")} 
                   </div>
                    </div>
                   </div>  
                   </div> */}
 
              </>
          )}
     </section>
    </div>
   </div>
  </>
);}

export default Allproducts;