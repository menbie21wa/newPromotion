import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
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
  const [product, setData] =useState(dataProducts || '');
  const dispatch = useDispatch();
  useEffect(() => {
    setData(dataProducts);
  }, [dataProducts])

  // const {product} = useSelector(
  //   (state)=> state.product
  // );
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
   <div className="bg-[#E3E6E6]">
    <div className="w-11/12 xl:w-11/12">
     <section className="mb-6 text-gray-800 text-center ">
     <div style={{
            }} className=" md:flex flex-wrap justify-between items-center ml-20">
        <button
          className="text-lg font-display text-black font-medium hover:text-[#0397FF] ">
          <span className=" underline decoration-pink-800 decoration-4 underline-offset-8">ሁሉም</span> ምርቶች
        </button>
      </div>
    <div className="grid lg:grid-cols-4 xl:gap-5 md:gap-6 xl:gap-x-14">
      {
      (product?.length)>0
        ?(
          product?.slice(0, 4).map((item, index) => (
           <div className=" md:ml-0 ml-5">
            {/* <div  className="  lg:mb-0 md:pt-4 lg:pt-4 pt-2 flex bg-slate-600"> */}
              <div key={index} className=" products lg:ml-14 md:ml-12 ml-6 relative  ">
                  <div className=" products__single  relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                       data-mdb-ripple="true"
                       data-mdb-ripple-color="light"
                        >
                  {/* src={`${AddressBaseUrl}/images/${item.featureImage}`}  */}
                    <img
                      className="w-full h-full transition cursor-pointer duration-700 rounded-lg hover:scale-125"
                      src={`/img/${item.featureImage}`} 
                      onClick={ () => VacancieDetail(item)}
                     // src={smartPhone}
                      alt="product img not found"
                    />
                 </div>
                </div>
       {/* <div className="mt-[1%] ml-7 float-left">
        <div className="float-left">
          <p className="text-sm">{item.name.substring(0,6)}</p>  
         </div>
         <div className="float-left ml-3">
          <p className="text-sm">{item.description.substring(0,48)+"..."}</p>
         </div>
        </div> */}
         <div className="flex">         
           <div className="mt-3 md:ml-12 md-4  float-left flex">
          <ul className='  mt-3 md:ml-0 ml-7 md:mb-0 mb-5 flex'>
              <img className=' w-12 h-6 rounded-2xl' 
              src={`${AddressBaseUrl}/images/${item.image}`} 
              alt='Noimage'/> 
          </ul>
          <p className=" float-left  text-sm w-60">{item.name.substring(0,6)}<br />
          {item.description.substring(0,48)+"..."}</p>
        </div>
         <div className="mt-4  md:ml-16  right-3 flex w-7">
         {/* <span onClick={() => likeProduct(item) } className=" cursor-pointer"> <img className=' w-4 h-4 cursor-pointer mx-[-3] ' 
         src={like} alt='Noicon'/></span> */}
         <span onClick={() => likeProduct(item) }>
         <img className=' w-4 h-4 md:ml-80 ml-5  cursor-pointer' src={like} alt='Noicon'/></span>
      </div>
    </div>
    </div>
  ))):(<></>)}
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
                      {/* src={`${AddressBaseUrl}/images/${detailInfo.featureImage}`} */}
                    <img
                    className="w-48 h-32 transition cursor-pointer duration-700"
                    src={`${AddressBaseUrl}/images/${detailInfo.featureImage}`}
                      //src={smartPhone} 
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   <p className="text-lg font-bold">{detailInfo?.name}</p> 
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.description}</p>
                    <p className="text-sm font-bold  mt-4 text-center">{detailInfo?.price} ብር</p>     
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </>
          )}
    { seeMore && (
      <>
        {
          (product?.length)>0
            ?(
            product?.slice(3, 100).map((item,index) =>{
             return(
              <div className=" ">
            {/* <div  className="  lg:mb-0 md:pt-4 lg:pt-4 pt-2 flex bg-slate-600"> */}
              <div key={index} className=" products lg:ml-14 md:ml-12 ml-6 relative group block ">
                  <div className=" products__single p-2 relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                       data-mdb-ripple="true"
                       data-mdb-ripple-color="light"
                        >
                  {/* src={`${AddressBaseUrl}/images/${item.featureImage}`}  */}
                    <img
                      className="w-full h-full transition cursor-pointer duration-700 rounded-lg hover:scale-125"
                       src={`/img/${item.featureImage}`} 
                      onClick={ () => VacancieDetail(item)}
                     // src={smartPhone}
                      alt="product img not found"
                    />
                 </div>
                </div>
       {/* <div className="mt-[1%] ml-7 float-left">
        <div className="float-left">
          <p className="text-sm">{item.name.substring(0,6)}</p>  
         </div>
         <div className="float-left ml-3">
          <p className="text-sm">{item.description.substring(0,48)+"..."}</p>
         </div>
        </div> */}

          <div className="mt-3 m-16 float-left flex">
          <ul className='  mt-3 flex'>
              <img className=' w-8 h-6 rounded-2xl' 
              src={`/img/${item.featureImage}`}
               alt='Noimage'/>
          </ul>
          <p className=" float-left w-60 text-sm">{item.name.substring(0,6)}<br />
          {item.description.substring(0,48)+"..."}</p>
        </div>
       <div className="mt-4 -ml-32 float-right flex w-7">
        <span onClick={() => likeProduct(item) }>
        <img className=' w-4 h-4 cursor-pointer' src={like} alt='Noicon'/></span>
      </div>
    </div>
         )
        }
      )
     ):(<><div><Loading/></div></>) 
    }  
  </>
 )}
</div>
      { seeMore? (
      <button
        className=" text-lg font-display text-[#F49F08] font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(false)}
      >
        ዝግት
      </button>
   ):(
      <button
        className=" text-lg font-display text-[#F49F08] font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(true)}
      >
        ሁሉም ምርቶች
      </button>
    )}
      </section>
      </div>
      </div>
    </>
  );
}

export default Allproducts;