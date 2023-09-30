import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgGirl from '../../img/ecommerce.jpg';
import { useDispatch, useSelector } from "react-redux";
import { dataProducts } from "./data";
import smartPhone from '../../img/computerimge/mouse.jpg';
import Loading from "./loading";
import { addToDetail } from "../../actions/detail";
import { HiOutlineX } from "react-icons/hi";
import AddressBaseUrl from "../../utils/BaseUrl";

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

  const dispatch = useDispatch();

  const {product} = useSelector(
    (state)=> state.product
  );
// console.log("all products are : ", product);
  const VacancieDetail = (data) =>{
    dispatch(addToDetail(data));
    setVacancieDel(true);
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
          className="text-lg font-display text-black font-medium hover:text-[#0397FF] "
         >
          <span className=" underline decoration-pink-800 decoration-4 underline-offset-8">ሁሉም</span> ምርቶች
        </button>
      </div>
    <div className="pt-5 pb-5 grid lg:grid-cols-3 xl:gap-5 md:gap-6 xl:gap-x-4">
      {
        (product?.length)>0
        ?(
          product?.slice(0, 3).map((item, index) => (
           <>
            <div key={index} className="lg:mb-0 md:pt-4 lg:pt-4 pt-2 flex">
              <div className="relative group block bg-white lg:ml-12 md:ml-12 ml-6">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-48 h-48 transition cursor-pointer duration-700 hover:scale-125"
                       src={`${AddressBaseUrl}/images/${item.featureImage}`} 
                      onClick={ () => VacancieDetail(item)}
                     // src={smartPhone}
                      alt="product img not found"
                    />
                  </div>
                 </div>
       <div className=" mt-[10%]">
        <div className="">
          <p className="text-sm">{item.name.substring(0,6)}</p>  
         </div>
         <div className="">
          <p className="text-lg font-bold">{item.price} ብር</p> 
          <p className="text-sm">{item.description.substring(0,48)+"..."}</p>
         </div>
        </div>
    </div> 
    </>
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
                    <img
                      className="w-48 h-48 transition cursor-pointer duration-700"
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
            product?.slice(3, 100).map((values,index) =>{
             return(
               <>
            <div key={index} className="lg:mb-0 md:pt-4 lg:pt-4 pt-2 flex">
              <div className="relative group block bg-white lg:ml-12 md:ml-12 ml-6">
                  <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-32 h-48 transition cursor-pointer duration-700"
                       src={`${AddressBaseUrl}/images/${values.featureImage}`} 
                     // src={smartPhone}
                      alt="product img not found"
                      onClick={ () => VacancieDetail(values)}
                    />
                  </div>
                 </div>
       <div className=" mt-[10%]">
        <div className="">
          <p className="text-sm">{values.name.substring(0,6)}</p>  
         </div>
         <div className="">
          <p className="text-lg font-bold">{values.price} ብር</p> 
          <p className="text-sm">{values.description.substring(0,48)+"..."}</p>
         </div>
        </div>
       </div> 
            </>
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