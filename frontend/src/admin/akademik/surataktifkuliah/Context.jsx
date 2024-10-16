import React, { useLayoutEffect } from "react";
import { Bars } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { pageTitle, position } from "~/redux";

const Lists = React.lazy(() => import("./Lists"));

const Context = () => {
   const dispatch = useDispatch();

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
         wrapperClass="page-loader flex-column justify-content-center"
      />
   );

   useLayoutEffect(() => {
      dispatch(pageTitle("Surat Aktif Kuliah"));
      dispatch(position(["Akademik", "Surat Aktif Kuliah"]));
      return () => {};
   }, []);

   return (
      <React.Suspense fallback={loader}>
         <Lists />
      </React.Suspense>
   );
};
export default Context;
