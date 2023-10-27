import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
// import { viewProducts } from "../../actions/productAction";
import { useForm } from "react-hook-form";
import {dataVacancy} from '../vacaData';
import samrtPc from '../../img/promotion-lg.png';
import { HiOutlineX } from "react-icons/hi";
import { louberDetail} from "../../actions/louberDetail";
import { Daily_Labourer ,searchDayWork} from "../../actions/louberWorkAction";
import { viewOrganization } from '../../actions/orgAction';
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
    const { org } = useSelector(
      (state) => state.org )
    const {loubers} = useSelector(
      (state) => state.loubers
  );
  console.log("daily work are : ", loubers);
  console.log("page No. : ", loubers.pages);
 useEffect(() =>{
  dispatch(viewOrganization());
  },[])
  const orgHandler=(id)=>{
    navigate("org/"+id)
}
useEffect(() =>{
      dispatch(Daily_Labourer());
  },[]);
  const [currentIndex, setCurrentIndex] = useState(0);
  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === loubers.pages - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   dispatch(Daily_Labourer(newIndex));
  // };

    // const { product } = useSelector(
    //     (state) =>state.product
    //     );
        // console.log("all products are1 ", product);

const [data, setData] =useState(dataVacancy || '');

// useEffect(()=>{
//     dispatch(viewProducts());
//   },[]);
//change useselector data to useState states with react js
  useEffect(() => {
    setData(dataVacancy);
  }, [dataVacancy])
  const VacancieDetail = (data) =>{
    dispatch(louberDetail(data));
    setVacancieDel(true);
  }
  const likeProduct =()=>{
    alert("Thank you")
  }
  const louberWorkDetail = localStorage.getItem("louberWorkDetail")
  ? JSON.parse(localStorage.getItem("louberWorkDetail"))
  : null;

  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
     if (term === "") return alert("Please enter search term!");
    dispatch(searchDayWork(term));
    console.log("term : ",term);
    setTerm("");
  };

  const [currentPage, setPage] = useState(1)

  const selectPageHandler = (selectedPage) => {

    // alert(data.length+","+selectedPage)
    console.log("next button cliked : ",selectedPage);
    if (selectedPage >= 1 && (selectedPage * 6)-6 <= loubers?.vacancies?.length  && selectedPage !== currentPage) {
      setPage(selectedPage)
    }
  }

return(
  <>
   <div className=" w-full bg-[#E3E6E6] md:mt-0 mt-20 ">
  <div className=" mx-auto h-4/5">
   <section className="mb-6 text-gray-800 text-center group">
    <div className=" md:flex block flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
      <div className="flex items-center py-3 mb-4 md:ml-0 ml-3">
         <button
          className=" text-lg font-display text-black font-medium hover:text-[#0397FF]"
         >
         <span className="mr-2 md:ml-0 ml-5 underline decoration-pink-800 decoration-4 underline-offset-8">የቀን ስራ</span>ማስታዎቂያ
         </button>
         <form onSubmit={submitHandler}>
         <div class=" mb-4 flex flex-wrap items-stretch absolute md:mt-10 mt-10 md:right-24 right-10">
          <input 
          className="bg-[#E3E6E6]  p-3 relative rounded-md z-20 " 
            type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>
      <button
      className="relative bg-[#E3E6E6] rounded-md z-20 flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="submit"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5">
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
   <div className=' bg-white  md:flex lg:flex pb-20 md:-mt-1 mt-3 md:pl-14 pl-0 md:ml-3 md:mr-0 ml-5 mr-5'>    
    <div class="relative grid xl:grid-cols-3 ml-5 md:grid-cols-3 grid-cols-1 xl:gap-20 md:gap-20 gap-7 my-3 xl:gap-x-10 md:gap-x-7 gap-x-5">
        {
          (loubers?.vacancies?.length)>0
            ?(
              loubers?.vacancies?.slice(currentPage * 6 - 6, currentPage * 6).map((values,index)=>{
             return(
               <>
               <div key={index}
                className=" h-40 md:h-56 xl:h-s6 md:mt-16 mt-16 xl:w-96 md:w-80 sm:w-60 relative md:ml-2 md:mr-0 mr-2 -ml-3 mb-7 md:mb-0">
                <div className="w-full h-full relative border-gray-600 
                 shadow-lg shadow-neutral-900 bg-cover bg-no-repeat "> 
                 <div className="relative flex justify-center items-center h-full">
                    <img
                    className="transition relative w-full h-full cursor-pointer duration-700 rounded-xl border-2 border-b-2 border-gray-600"
                     // src={`/img/${values.featureImage}`} 
                    src={`${AddressBaseUrl}/images/${values.image}`} 
                      alt="product img not found"
                    />
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl 
                     justify-center overflow-hidden bg-gradient-to-r from-green-500 via-amber-300
                   to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                     onClick={() => VacancieDetail(values) }>
                     <button className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
                      bg-black">View Detail</button>
                    </div>
                    <div className="mt-4 float-left flex">
          <ul  className='  mt-3 flex'>
          {(org?.promotedOrgs?.length > 0)
         ?(
          org?.promotedOrgs?.map((orgs,index) => 
        (
          (orgs.id)==(values.orgId)?(
               <button 
             onClick={() => orgHandler(`${orgs.id}`)}
             >
             <img className=' w-7 h-6 rounded-2xl' 
               src={`${AddressBaseUrl}/images/${orgs?.logo}`}
               alt='Noimage'/>
             </button>)
            :("")  
        ))):("")}

          </ul>
           {/* src={`${AddressBaseUrl}/images/${vacancie.image}`}  */}
          <a>


       <span className="mt-1 ml-2">{values.title.substring(0,80)}<br />
           {(org?.promotedOrgs?.length > 0)
         ?(
          org?.promotedOrgs?.map((orgs,index) => 
        (
          (orgs.id)==(values.orgId)?(
            <button 
             className='ml-2 text-amber-400'
             onClick={() => orgHandler(`${orgs.id}`)}
             >
             {orgs.name.substring(0,75)}
             </button>
            ):("")  
        ))):("")}
        <br />
        {values.createdAt.split('T')[0]}
        </span><br />
          </a>  
         </div>
 
                </div>

              </div>
             </>
            )})):
           (<><div className=" text-xl font-semibold flex justify-center mt-5 ml-32">------ የቀን ሥራ  የለም! ------</div></>)
            }
          <br /><br />
         </div>
        </div> 
      <div>
       {loubers?.vacancies?.length > 0 && 
       <div className=" justify-center ml-10 mt-10">
        {(loubers?.vacancies?.length >=currentPage * 6)?(
           <p className='text-sm text-gray-700 mb-7'>
            ክጠቅላላ <span className='font-medium ml-2 mr-2'> {loubers?.vacancies?.length} </span>
            የቀንስራ ማስታወቂያዎች ዝርዝር ውስጥ ከቁጥር <span className='font-medium ml-2 mr-2'>{currentPage * 6 - 6}</span>
             እስከ ቁጥር <span className='font-medium ml-2 mr-2'> {currentPage * 6} </span> የሚገኙ የቀንስራ ማስታወቂያዎች ዝርዝር  
             </p>
          ):<p className='text-sm text-gray-700 mb-7'>
              <p className="mr-2">(መጨረሻው ነው)</p> ጠቅላላ <span className='font-medium ml-2 mr-2'> {loubers?.vacancies?.length} </span>
              የቀንስራ ማስታወቂያዎች ብቻ ይገኛሉ::  
            </p>
          }
      
        <nav
          className='relative z-0  inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <button
          onClick={() => selectPageHandler(currentPage - 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border
             bg-slate-700 border-gray-300  text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className="font-bold">ምልስ</span>
          </button>

          <button
          onClick={() => selectPageHandler(currentPage + 1)}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border
             border-gray-300 bg-slate-700 text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className=" font-bold">ቅጣይ</span>
          </button>
        </nav>
      </div>}
    </div>
        {vacancieDel && (
          <> 
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-7xl">
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
                      src={`${AddressBaseUrl}/images/${louberWorkDetail.image}`}
                     // src={samrtPc} 
                      alt="product img not found"
                    /> 
                    </div>
                   <div className="m-4">
                   {/* <p className="text-lg font-bold">{louberWorkDetail?.name}</p>  */}
                    <div class="bg-white rounded-md max-w-4xl mx-auto p-2 space-y-2 -mt-2 shadow-lg">
                    <h3 class="border-t mb-2 pt-3 font-semibold underline">Name: <span >EplusApp</span></h3> 
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው መጠሪያ: </h3> <span >{louberWorkDetail?.title}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራው አይነት:</h3> <span >{louberWorkDetail?.type}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የስራ ቀን/ስአት:</h3><span >ሙሉ ቀን</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የቀን ክፍያ: </h3><span> {louberWorkDetail?.price}</span></h3>
                    <h3 className="flex"><h3 class="mb-1 font-semibold underline">የምዝገባ ማብቂያ ቀን: </h3><span >{louberWorkDetail?.closingDate?.split('T')[0]}-{louberWorkDetail?.closingDate?.split('T')[0]}</span></h3>
                     <div class="pt-2">
                     <h3 class="font-semibold -ml-56 underline"> ማብራሪያ:</h3>
                     <p class=" mt-2">{louberWorkDetail?.description}</p>
                    </div>
                    {(org?.promotedOrgs?.length > 0)
                      ?(
                        org?.promotedOrgs?.map((orgs,index) => 
                      (
                        (orgs.id)==(louberWorkDetail.orgId)?(
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
                </div>
            </>
          )} 
       {/* { seeMore && (
         <>
           {
           (loubers?.vacancies?.length)>0
            ?(
              loubers?.vacancies?.map((values,index) =>{
             return(
               <>
                <div key={index} className=" mt-3">
                  <div className=" products">
                   <div
                    className=" products__single relative border-gray-600 
                                shadow-lg shadow-neutral-900 bg-cover bg-no-repeat"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className=" w-screen h-52 transition cursor-pointer duration-700 rounded-xl"
                      src={`${AddressBaseUrl}/images/${values.image}`} 
                      alt="product img not found"
                      onError={event => {
                      event.target.src = `${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`
                        event.onerror = null
                      }}
                    />
                    <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl 
                    justify-center overflow-hidden bg-gradient-to-r from-green-500 via-amber-300
                    to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
                    onClick={() => VacancieDetail(values) }>
                    <button className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
                    bg-black">View Detail</button>
                    </div>
                    <div className="mt-4 float-left flex">
                      <ul  className='  mt-3 flex'>
                      <img className=' w-7 h-6 rounded-2xl' 
                           src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
                           alt='Noimage'/>
                      </ul>
                   
                       <div className="p-0">
                   <p className="text-sm font-bold  mt-4 text-center">{values?.title.substring(0,24)}</p>      
                    </div>
                      <span className="mt-1 ml-2">
                      <p className=" font-thin border text-sm">{`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}
                      </p></span><br />
                    </div>
        
                 </div>
                </div>
            </div>
          </>
         )})):
     (<><div><Loading/></div></>) } 
  </>
 )}
   {seeMore? (
      <button
        className=" text-lg font-display text-[#F49F08] mt-10 font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(false)
        }
      >
        ዝግት
      </button>
   ):(
      <button
        className=" text-lg font-display text-[#F49F08] mt-10 font-medium hover:text-[#0397FF] absolute right-20"
        onClick={() => setSeeMore(true)}
      >
        ሁሉም ማስታወቂያዎች
      </button>
    )} */}
    {/* <button onClick={nextSlide}>perv_page</button>
    <button>next_page</button> */}
  </section>
 </div>
</div>  
</>
);}
export default LouberWork;