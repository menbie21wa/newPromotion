// react
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { FaFacebook, FaTwitter, FaTelegram } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

const Contact = () => {

    // const { loading, message, error, success } = useSelector(
    //     (state) => state.contactus
    //   );

  // return
  return (
    <>
    <div className="w-11/12 xl:w-11/12 mx-auto pb-6">
    <div className="flex flex-wrap items-center rounded-lg">
      <div className="grow-0 shrink-0 basis-auto w-full md:w-3/12 xl:w-3/12 my-4 text-left">
        <form>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 ">
            <div>
              <label className="text-sm  ">ሙሉ ስም</label>
              <input
                type="text"
                className="ring-1 ring-gray-300 w-full  rounded-md py-1 px-4 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-1 mt-4 md:mt-2">
            <div>
              <label className="text-sm ">ኢሜል</label>
              <input
                type="email"
                className="ring-1 ring-gray-300 w-full  rounded-md py-1 px-4 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div>
              <label for="" className="text-sm">
                ስልክ ቁጥር
              </label>
              <input
                type="text"
                className="ring-1 ring-gray-300 w-full rounded-md py-1 px-4 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
          </div>
          <div className="mt-4 mb-2 ">
            <textarea
              type="text"
              placeholder="አስተያየት"
              rows="2"
              className="ring-1 ring-gray-300 w-full rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-teal-300"
            ></textarea>
          </div>

            <button className="inline-block self-end bg-black hover:bg-hoverButton font-bold text-white rounded-lg py-3 px-7 uppercase text-base">
              መልዕክት ያስቀምጡ
            </button>

          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>

      </div>

      <div className="grow-0 shrink-0 basis-auto w-full md:w-6/12 xl:w-6/12 my-4 right-24 absolute">
        <div className="xl:pl-1 md:pl-2 pl-2 pr-8 py-1">
          <h1 className="text-left text-2xl md:text-3xl xl:text-4xl font-bold font-display text-secondary mb-1 pb-2">
            አስተያየትወን ያጋሩን
          </h1>
          <p className="text-left py-1 text-textColor text-xl">
            ከዚህ በታች የሚገኙ አድራሻዎችን በመጠቀም ልታገኙን ትችላላችሁ
          </p>
        </div>
        <div className="flex flex-col space-y-4 pb-6">
          <div className="inline-flex space-x-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="textColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.72 4.72a.75.75 0 11-1.06-1.06l4.72-4.72h-2.69a.75.75 0 01-.75-.75z"
                clip-rule="evenodd"
              />
              <path
                fill-rule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-textColor">+2519-940 000 000</span>
          </div>
          <div className="inline-flex space-x-2 items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="textColor"
              className="w-6 h-6"
            >
              <path d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z" />
              <path d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z" />
            </svg>

            <span className="text-textColor">ambank@gmail.com</span>
          </div>

          <div className="inline-flex space-x-2 items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="textColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="text-textColor">manufacture place</span>
          </div>
        </div>
        <div className="flex text-md space-x-4 text-black">
          <a href="https://www.facebook.com/profile.php?id=100087921900868">
            <FaFacebook className="text-textColor w-9 h-9" />
          </a>
          <a href="https://www.tiktok.com/@eplusapp8?_t=8XGJsUCLlaw&_r=1">
            <FaTwitter className="text-textColor w-10 h-10" />
          </a>
          <a href="https://t.me/eplutelegram">
            <FaTelegram className="text-textColor w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

// contact
export default Contact;
