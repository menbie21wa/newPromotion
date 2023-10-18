import React, {useEffect, useState} from "react";
import {useParams,useNavigate } from "react-router-dom";
import {useDispatch,useSelector } from "react-redux";
import Loading from "./loading";
import {viewProducts } from "../../actions/productAction";
import {useForm } from "react-hook-form";
import {dataProducts } from "../data";
import samrtPc from '../../img/promotion-lg.png';
import {HiOutlineX } from "react-icons/hi";
import {addToDetail} from "../../actions/detail";
import {viewVacancies, searchVacancies } from "../../actions/vacanciesAction";
import  AddressBaseUrl from "../../utils/BaseUrl";
import {getOrganization } from '../../actions/orgAction';
import {dataVacancy} from '../vacaData';
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

const [data, setData] =useState(dataVacancy || '');
// console.log("all vacancies are : ", data[0]);
useEffect(()=>{
    dispatch(viewProducts());
  },[]);
//change useselector data to useState states with react js
  useEffect(() => {
    setData(dataVacancy);
  }, [dataVacancy])

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
        }} className=" md:flex block flex-wrap justify-between items-center mx-auto md:px-6 lg:px-6 px-1">
        <div className="flex items-center py-3 mb-4 ">
         <button
          className=" text-lg font-display text-black font-medium hover:text-[#0397FF]"
         >
          <span className="mr-2 md:ml-0 ml-5 underline decoration-pink-800 decoration-4 underline-offset-8">የስራ</span>ማስታዎቂያ
         </button>
         <form onSubmit={submitHandler}>
         <div class=" mb-4 flex flex-wrap items-stretch absolute md:mt-0 mt-6 right-5">
          <input className="bg-[#E3E6E6] z-20 " 
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
        class="relative z-20 flex items-center rounded-r bg-secondary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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
   {/*  {vacancies?.vacancies?.length > 0 && <div className="products">
        {vacancies?.vacancies?.slice(page * 3 - 3, page * 3).map((vacancie) => {
   */}
   <div className="" >
      {data?.length > 0 && <div className="products ">
        {data?.slice(page * 3 - 3, page * 3).map((vacancie) => {    

          return <div className="products__single relative border-gray-600 
             shadow-lg shadow-neutral-900 bg-cover bg-no-repeat "  key={vacancie.id}>
            {/*             ${AddressBaseUrl}/images/${vacancie.image} */}
            <img 
            className="transition cursor-pointer duration-700 rounded-xl border-2 border-b-2 border-gray-600"
            alt="product img not found"
            src={`/img/${vacancie.featureImage}`} 
            onError={event => {
            event.target.src = `${AddressBaseUrl}/images/${org?.promotedOrgs && 
            org?.promotedOrgs[currentIndex]?.logo}`
            event.onerror = null
           }}
            />
      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full rounded-xl 
          justify-center overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600
           to-pink-600 opacity-0 transition duration-300 ease-in-out hover:opacity-70"
           onClick={() => VacancieDetail(vacancie) }>
          <button className=" h-12 w-28 rounded-3xl mt-20 text-slate-100 border border-none
           bg-blue-950">View Detail</button>
          </div>
          <div className="mt-4 float-left flex">
          <ul  className='  mt-3 flex'>
              <img className=' w-7 h-6 rounded-2xl' 
               src={`${AddressBaseUrl}/images/${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.logo}`}
               alt='Noimage'/>
          </ul>
           {/* src={`${AddressBaseUrl}/images/${vacancie.image}`}  */}
          <span className="mt-1 ml-2">{vacancie.title}<br />
          <p className=" font-thin border text-sm">{`${org?.promotedOrgs && org?.promotedOrgs[currentIndex]?.name}`}
          </p></span><br />
        </div>
       {/* <div className="mt-4 float-right flex">
        <span onClick={() => likeProduct(vacancie) }>Like</span>
      </div> */}
     </div>
        })}
      </div>
      }
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
                    {/* src={`/img/${detailInfo.featureImage}`} */}
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
      </section>
     </div>
   </div> 
</>
);}
export default Vacancie;
