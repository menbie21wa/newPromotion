import React, { Fragment, useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { RiMenuLine } from "react-icons/ri";
import { HiOutlineX } from "react-icons/hi";
// import { FiLogOut } from "react-icons/fi";
// import { CgLogIn } from "react-icons/cg";
import logo from '../../img/ecommerce.jpg';
import logo_transparent from '../../img/ecommerce.jpg';
import eplusLogo from '../../img/ecommerce.jpg';
import imgGirl from '../../img/ecommerce.jpg';

const Sidebar = () => {
  // use state
  const [navBackground, setNavBackground] = useState(false);
  const [nav, setNav] = useState(false);

  // get user
  const user = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

  const navRef = useRef();
  const location = useLocation();
  // const navigate = useNavigate();

  navRef.current = navBackground;

  // use effect
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 96;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const logout = () => {
  //   localStorage.removeItem("userInfo");
  //   navigate("/");
  //   window.location.reload();
  // };

  // styles
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#F3AE33" : navBackground ? "#2b2b2b" : "#2b2b2b",
    };
  };
  const linkColor =
    "px-5 py-2 flex items-center leading-snug font-display hover:opacity-75 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300";

  const styles = () => {
    switch (location.pathname) {
      case "/":
        return navBackground ? "white" : "white";
      case "/about":
        return navBackground ? "white" : "white";
      default:
        return navBackground ? "#white" : "white";
    }
  };

  // logo
  const logos = () => {
    switch (location.pathname) {
      case "/":
        return (
          <img
            className="xl:w-48 md:w-40 w-32"
            src={navBackground ? logo : logo}
            alt="Logo"
          />
        );
      default:
        return (
          <img
            className="xl:w-48 md:w-40 w-32"
            src={navBackground ? logo : logo}
            alt="Logo"
          />
        );
    }
  };

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  // return
  return (
    <>
      <div
        style={{
          background: styles(),
          position: navBackground ? "fixed" : "absolute",
          boxShadow: navBackground ? "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)":"0 0 #0000"
        }}
        className="xl:bg-white right-0 left-0 z-10 py-2 border-none"
        p="md"
      >
        {/* {navBackground ? null : <TopHeader />} */}
        <div
          className="pl-3 mt-2"
          style={{ display: "flex", alignItems: "center", height: "100%" }}
        >
          <div className="container flex justify-between items-center mx-auto px-3 text-white">
            <div className="flex">
              <div className="flex bg-white justify-between items-center fixed md:relative left-0 top-0 w-full">
                <div className="flex my-2 ml-4">
                  <NavLink to="/">{logos}</NavLink>
                </div>
                <div
                  onClick={handleNav}
                  className="block md:hidden mr-4 text-textColor"
                >
                  {!nav && <RiMenuLine size={24} />}
                </div>
              </div>
            </div>
            <ul className="hidden md:flex">
              <li className="p-1">
              <div className="flex h-8 w-8 items-center ml-7 justify-center rounded-full bg-white border-2">
                 <p className="text-slate-950">መ</p>
              </div>
                <NavLink style={navLinkStyles} className={linkColor} to="/">
                  product
                </NavLink>
              </li>
              <li className="p-1">
              <div className="flex h-8 w-8 items-center justify-center ml-7 rounded-full bg-white">
                  <img src={eplusLogo} />
              </div>
                <NavLink
                  style={navLinkStyles}
                  className={linkColor}
                  to="/about"
                >
                  organization
                </NavLink>
              </li>

            </ul>
            <ul
              className={
                nav
                  ? "xl:hidden fixed left-0 top-0 w-full text-textColor bg-white ease-in-out duration-500 hover:opacity-75 text-lg hover:transform hover:scale-100 hover:md:scale-125 hover:duration-300"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <div className="flex items-center justify-between  my-6">
                <h1>
                  <img
                    className="w-20 ml-4"
                    src={logo_transparent}
                    alt="Logo"
                  />
                </h1>
                <h1 onClick={handleNav} className="mr-4">
                  {" "}
                  {nav && <HiOutlineX size={20} />}
                </h1>
              </div>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  href="/"
                >
                  product
                </a>
              </li>
              <li className="p-4 text-center">
                <a
                  className="leading-snug hover:text-primary font-display  hover:opacity-75"
                  href="/about"
                >
                   organization
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
