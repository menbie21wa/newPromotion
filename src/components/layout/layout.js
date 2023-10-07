import React from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "../navigation/footers";
import Sidebar from "../navigation/sidebar";

const Layout = ({ children, title, description, keywords, author }) => {
  const location = useLocation();

  const protectedFooter = () => {
    switch (location.pathname) {
      case "/sign-in":
      default:
        return <Footer/>;
    }
  };
  const protectedSidebar = () => {
    switch (location.pathname) {
      case "/sign-in":
      default:
        return <Sidebar/>;
    }
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {/* {protectedSidebar} */}
      <main>{children}</main>
      {protectedFooter()}
    </div>
  );
};

// Layout.defaultProps = {
//   title: "EplusApp Commercial S.c",
//   description: "Eplusapp Promotion Website",
//   keywords:
//     "EplusApp,Eplus,Software Company,Company,Stock,Website,EplusApp commercial,Bahirdar,Ethiopia",
//   author: "EplusApp Commercial S.c",
// };

export default Layout;
