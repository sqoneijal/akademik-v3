import React, { useLayoutEffect } from "react";
import { Container } from "react-bootstrap";
import { Bars } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const Header = React.lazy(() => import("./Header"));
const NavbarMenu = React.lazy(() => import("./NavbarMenu"));
const Routing = React.lazy(() => import("./Routing"));
const Breadcrumb = React.lazy(() => import("./Breadcrumb"));

const Context = () => {
   const { pageTitle } = useSelector((e) => e.redux);
   const loader = (
      <Bars
         visible={true}
         color="#4fa94d"
         radius="9"
         wrapperStyle={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
         }}
         wrapperClass="page-loader flex-column"
      />
   );

   useLayoutEffect(() => {
      document.title = pageTitle;
      return () => {};
   }, [pageTitle]);

   return (
      <React.Suspense fallback={loader}>
         <BrowserRouter basename="/">
            <Header />
            <NavbarMenu />
            <div className="main-content">
               <div className="page-content">
                  <Container fluid>
                     <Breadcrumb />
                     <Routing />
                  </Container>
               </div>
            </div>
         </BrowserRouter>
      </React.Suspense>
   );
};
export default Context;
