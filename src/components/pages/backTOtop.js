import React,{useEffect, useState} from "react";
import { FaArrowUp } from "react-icons/fa";
const BackTotop = () =>{
    const [ backTotop, setBackTotop] = useState(false);

    useEffect(()=>{
     window.addEventListener("scroll", () => {
      if(window.scrollY > 400){
        setBackTotop(true);
      }else{
        setBackTotop(false);
      }
     })
    },[]);
    const scrollTop = () =>{
        window.scroll({
            top : 0,
            behavior: "smooth"
        })
    }
    return(
        <>
          {backTotop && (
             <div className="fixed bottom-10 right-5 h-6 w-6 z-100 bg-blue-500 items-center rounded-full">
             {/* <button className="fixed bottom-10 right-5 h-6 w-6 z-100 bg-white text-2xl" onClick={scrollTop}>^</button> */}
             <FaArrowUp className=" text-white items-center m-1" onClick={scrollTop} />
             </div>
           )}
        </>
    )
};
export default BackTotop;