import React, {useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./loading";
import { viewProducts } from "../../actions/productAction";
import { useForm } from "react-hook-form";
import  { dataProducts } from "./data";
import samrtPc from '../../img/promotion-lg.png';
import { HiOutlineX } from "react-icons/hi";
import { addToDetail} from "../../actions/detail";
import { viewVacancies, searchVacancies } from "../../actions/vacanciesAction";
import  AddressBaseUrl from "../../utils/BaseUrl";
import { getOrganization } from '../../actions/orgAction';
// import DatePicker from 'react-date-picker';
import '../../App.css'

const Vacancie = () =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [seeMore, setSeeMore] = useState(false);
    const [vacancieDel, setVacancieDel] = useState(false);

    const {
      handleSubmit,
      register,
      formState: { errors },
    } = useForm();

    const { vacancies } = useSelector(
      (state) => state.vacancies
  );
  const { org } = useSelector(
    (state) => state.org )
  //console.log("all vacancies are : ", vacancies);
// const pages = 1;
useEffect(() =>{
  dispatch(getOrganization());
},[]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
   // const  currentIndex =2 - 1;
    const isLastSlide = currentIndex === (vacancies.total +1 ) - 1;
    const newIndex = isLastSlide ? 1 : currentIndex + 1;
   // console.log("isLastSlide : ", isLastSlide)
    //console.log("currentIndex : ", newIndex)
    setCurrentIndex(newIndex);
    dispatch(viewVacancies(newIndex));
  };
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? 3 - 1 : currentIndex - 1;
     // console.log("newIndex : ", newIndex)
      setCurrentIndex(newIndex);
      dispatch(viewVacancies(newIndex));
    };
    const { product } = useSelector(
        (state) =>state.product
        );
        // console.log("all products are1 ", product);

const [data, setData] =useState(dataProducts || '');

useEffect(()=>{
    dispatch(viewProducts());
  },[]);
//change useselector data to useState states with react js
  useEffect(() => {
    setData(dataProducts);
  }, [dataProducts])

  const VacancieDetail = (data) =>{
    dispatch(addToDetail(data));
    setVacancieDel(true);
  }
  const detailInfo = localStorage.getItem("detailInfo")
  ? JSON.parse(localStorage.getItem("detailInfo"))
  : null;

  const [term, setTerm] = useState("");
  console.log("selected date is :", term);
  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
     if (term === "") return alert("Please enter search term!");
    dispatch(searchVacancies(term));
    //console.log("term : ",term);
    //setTerm("");
  };
  
//new pagination 
const [vacancie, setProducts] = useState([])
const [page, setPage] = useState(1)
console.log("view vacancies2 : ",vacancies?.vacancies?.length);

useEffect(() =>{
  dispatch(viewVacancies());
  setProducts(vacancies?.vacancies)
},[]);

const selectPageHandler = (selectedPage) => {
  console.log("next button cliked : ",selectedPage);
  if (selectedPage >= 1 && selectedPage <= vacancies?.vacancies?.length / 1 && selectedPage !== page) {
    setPage(selectedPage)
  }
}

return(
  <>
   <div className="bg-[#E3E6E6]">
    <div className="w-11/12 mx-auto">
     <section className="mb-6 text-gray-800 text-center group">
      <div style={{
        }} className=" md:flex flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
        <div className="hidden md:flex items-center py-3 mb-4 ">
         <button
          className=" text-lg font-display text-black font-medium hover:text-[#0397FF]"
         >
          <span className="mr-2 underline decoration-pink-800 decoration-4 underline-offset-8">የስራ</span>ማስታዎቂያ
         </button>
         <form onSubmit={submitHandler}>
         <div class=" mb-4 flex flex-wrap items-stretch absolute right-5">
          <input className="bg-[#E3E6E6] z-50" 
             type="date"
             aria-label="Search"
             aria-describedby="button-addon1"
             value={term}
             onChange={(e) => setTerm(e.target.value)}/>

      {/* <input
        type="search"
        class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200 z-50"
        
        aria-label="Search"
        aria-describedby="button-addon1" 
        value={term}
        onChange={(e) => setTerm(e.target.value)}/> */}

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

   <div >
      {vacancies?.vacancies?.length > 0 && <div className="products">
        {vacancies?.vacancies?.slice(page * 3 - 3, page * 3).map((vacancie) => {
          return <span className="products__single" key={vacancie.id}>
            {/* <img src={`${AddressBaseUrl}/images/${vacancie.image}`} /> */}
            <img 
            className="w-32 h-28 transition cursor-pointer duration-700"
            alt="product img not found"
            src={`${AddressBaseUrl}/images/${vacancie.image}`}
            onError={event => {
            event.target.src = `${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`
            event.onerror = null
                }}
            onClick={() => VacancieDetail(vacancie) }/>
            <span>
              {vacancie.title}
            </span>
          </span>
        })}
      </div>}

      {vacancies?.vacancies?.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(vacancies?.vacancies?.length / 2)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < vacancies?.vacancies?.length / 3? "" : "pagination__disable"}>▶</span>
      </div>}

      {vacancieDel && (
          <> 
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none -mt-6 border border-grey-100">
              <div className="relative w-auto my-6 mx-auto max-w-2xl">
                {/*content*/}
                <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}                <div className="flex justify-end p-1">
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
                    className="w-48 h-32 transition cursor-pointer duration-700"
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
           </div>

      {/* <div class="grid lg:grid-cols-3 xl:gap-5 md:gap-6 xl:gap-x-12">
        {
          (vacancies?.vacancies?.length)>0
            ?(
            vacancies?.vacancies?.slice(0, 3).map((values,index) =>{
             return(
               <>
                <div key={index} className="mb-6 lg:mb-0">
                 <div className="relative bg-white">
                  <div className="flex">
                   <div
                    className="relative overflow-hidden bg-no-repeat bg-cover relative overflow-hidden bg-no-repeat bg-cover rounded-lg"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      className="w-full h-52 transition cursor-pointer duration-700"
                      src={`${AddressBaseUrl}/images/${values.image}`}
                      alt="product img not found"
                    />
                  </div>
                </div>
               <div className="">
                <p className="text-sm font-bold  mt-4 text-center">{values?.title.substring(0,24)}</p>      
                <p className="text-lg font-bold">{values?.description.substring(0,50)+"..."}</p>  
               </div>
              </div>
            </div>
        </>
       )}
      )
     ):(<><div><Loading/></div></>) }

    { seeMore && (
      <>
        {
          (vacancies?.vacancies?.length)>0
            ?(
            vacancies?.vacancies?.slice(3, 100).map((values,index) =>{
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
        ሁሉም ማስታወቂያዎች
      </button>
    )}

  <div className="absolute right-20 hidden group-hover:block">
    <button onClick={prevSlide} className=" text-lg font-display text-[#F49F08] font-medium hover:text-[#0397FF] pr-2">perv</button>
    <button onClick={nextSlide}className=" text-lg font-display text-[#F49F08] font-medium hover:text-[#0397FF]">next</button>
  </div> */}
    </section>
   </div>
  </div> 
</>
);
}
export default Vacancie;
