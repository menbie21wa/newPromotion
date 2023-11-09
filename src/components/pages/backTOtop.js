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
    const [isUp, setIsUp] = useState(false);
// const handleClick = () => {
//   setIsUp(!isUp);
// };
useEffect(() => {
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsUp(scrollPosition > 500);
  };
  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

    const scrollTop = () =>{
        window.scroll({
            top : 0,
            behavior: "smooth"
        })
    }
    return(
        <>
          {backTotop && (
            <>
            {/* <div className="fixed bottom-10 right-5 h-6 w-6 z-100 bg-blue-500 items-center rounded-full">
             </div> */}
             <div className={` fixed  text-center justify-center bg-cyan-500 w-20 h-12 transition-transform
              duration-1000 ease-in-out transform top-0 right-10 z-40 items-center rounded-full 
              ${isUp ? 'translate-y-[600px]' : 'translate-y-0'}`}>
              <button className=" h-full w-full" onClick={scrollTop}>
              <FaArrowUp className="text-white ml-7" />
              </button>
              </div>
              </>
           )}
        </>
    )
};
export default BackTotop;