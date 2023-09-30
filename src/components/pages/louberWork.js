import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
// import { viewProducts } from "../../actions/productAction";
import { useForm } from "react-hook-form";
import  { dataProducts } from "./data";
import samrtPc from '../../img/promotion-lg.png';
import { HiOutlineX } from "react-icons/hi";
import { addToDetail} from "../../actions/detail";
import { Daily_Labourer } from "../../actions/louberWorkAction";
import  AddressBaseUrl from "../../utils/BaseUrl";
  const LouberWork = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [seeMore, setSeeMore] = useState(false);
    const [vacancieDel, setVacancieDel] = useState(false);
    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();
    const {loubers} = useSelector(
      (state) => state.loubers
  );
  console.log("daily work are : ", loubers);
  console.log("page No. : ", loubers.pages);
 const page = 1;
    useEffect(() =>{
      dispatch(Daily_Labourer(page));
  },[]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    const isLastSlide = currentIndex === loubers.pages - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    dispatch(Daily_Labourer(newIndex));
  };

    // const { product } = useSelector(
    //     (state) =>state.product
    //     );
        // console.log("all products are1 ", product);

// const [data, setData] =useState(dataProducts || '');

// useEffect(()=>{
//     dispatch(viewProducts());
//   },[]);
//change useselector data to useState states with react js
  // useEffect(() => {
  //   setData(dataProducts);
  // }, [dataProducts])
  const VacancieDetail = (data) =>{
    dispatch(addToDetail(data));
    setVacancieDel(true);
  }
  const louberWorkDetail = localStorage.getItem("louberWorkDetail")
  ? JSON.parse(localStorage.getItem("louberWorkDetail"))
  : null;
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
     if (term === "") return alert("Please enter search term!");
    // dispatch(searchVacancies(term));
    //console.log("term : ",term);
    //setTerm("");
  };
return(
  <>
   <div className="bg-[#E3E6E6]">
    <div className="w-11/12 xl:w-11/12 mx-auto pb-6">
     <section className="mb-6 text-gray-800 text-center ">
      <div style={{
        }} className=" md:flex flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
        <div className="hidden md:flex items-center py-3 mb-4 ">
         <button
          className=" text-lg font-display text-black font-medium hover:text-[#0397FF]"
         >
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የቀን ስራ</span>ማስታዎቂያ
         </button>
         <form onSubmit={submitHandler}>
         <div class=" mb-4 flex flex-wrap items-stretch absolute right-5">
          <input className="bg-[#E3E6E6] z-50" 
             type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>
      <button
        class="relative z-50 flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
      <div class="grid lg:grid-cols-3 xl:gap-5 md:gap-6 xl:gap-x-12">
        {
          (loubers?.vacancies?.length)>0
            ?(
              loubers?.vacancies?.slice(0, 3).map((values,index) =>{
             return(
               <>
                <div key={index} className="mb-6 lg:mb-0">
                 <div className="relative bg-white">
                  <div className="flex">
                   <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      onClick={() => VacancieDetail(values) }
                      className="w-screen h-52 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${values.image}`}
                      // src={samrtPc} 
                      alt="product img not found"
                    />
                  </div>
                </div>
               <div className="p-0">
                <p className="text-sm font-bold  mt-4 text-center">{values?.title.substring(0,24)}</p>      
                <p className="text-lg font-bold">{values?.description.substring(0,50)+"..."}</p>  
               </div>
              </div>
            </div>
        </>
       )})
     ):(<><div><Loading/></div></>) }

     {vacancieDel && (
          <> 
          { (loubers?.vacancies?.length)>0
            ?(
              loubers?.vacancies?.slice(0, 3).map((values,index) =>{
                <>
           <div key={index} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 sm:ml-2 border border-grey-100">
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
                      src={`${AddressBaseUrl}/images/${values.image}`}
                     // src={samrtPc} 
                      alt="product img not found"
                    /> 
                   </div>
                   <div className="">
                   <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                      <h3 class="mb-1 font-semibold ">የስራው አይነት: <span class="font-thin">{values?.type}</span></h3>
                        <h3 class="mb-1 font-semibold">የስራው መጠሪያ: <span class="font-thin">{values?.titel}</span></h3>
                        <h3 class="mb-1 font-semibold">የቀን ክፍያ: <span class="font-thin">{values?.payment}</span></h3>
                        <h3 class="mb-1 font-semibold">የምዝገባ ቀን: <span class="font-thin">{values?.openingDate?.split('T')[0]}-{louberWorkDetail?.closingDate?.split('T')[0]}</span></h3>
                        <h3 class="mb-1 font-semibold">የስራ ቀን/ስአት: <span class="font-thin">{values?.openingDate?.split('T')[0]}-{louberWorkDetail?.closingDate?.split('T')[0]}</span></h3>
                            <div class="pt-2">
                              <h3 class="font-semibold -ml-56"> ማብራሪያ:</h3>
                                <p class="font-thin mt-2">{values?.description}</p>
                            </div>
                            <h3 class="border-t mb-2 pt-3 font-semibold">Name: EplusApp<span class="font-thin"></span></h3>
                              <h3 class="border-t mb-2 pt-3 font-semibold">Email:
                                <span class="font-thin">EplusApp@gmail.com</span></h3> 
                         </div>
                       </div> 
                     </div>
                   </div>
                  </div>
                </div>

                </>
              })
              
              ):null}            
             
          </>
          )} 
    { seeMore && (
      <>
        {
          (loubers?.vacancies?.length)>0
            ?(
              loubers?.vacancies?.slice(3, 100).map((values,index) =>{
             return(
               <>
                <div key={index} className="mb-6 lg:mb-0">
                 <div className="relative group block bg-white">
                  <div className="flex">
                   <div
                    className="p-2 relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-screen h-52 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${values.image}`}
                      onClick={() => VacancieDetail(values) }
                      // src={samrtPc} 
                      alt="product img not found"
                    />
                  </div>
                </div>
               <div className="p-0">
                  <p className="text-sm font-bold  mt-4 text-center">{values?.title.substring(0,24)}</p>      
                  <p className="text-lg font-bold">{values?.description.substring(0,50)+"..."}</p>  
                </div>
              </div>
            </div>
            </>
         )}
      )):(<><div><Loading/></div></>) 
    }  
  </>
 )}
</div>
   {seeMore? (
      <button
        className=" text-lg font-display text-[#F49F08] font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(false)
        }
      >
        ዝግት
      </button>
   ):(
      <button
        className=" text-lg font-display text-[#F49F08] font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(true)}
      >
        ሁሉም ማስታወቂያዎች
      </button>
    )}
    {/* <button onClick={nextSlide}>perv_page</button>
    <button>next_page</button> */}
    
  </section>
 </div>
</div> 
</>
);}
export default LouberWork;