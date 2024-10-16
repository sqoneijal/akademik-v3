import React from "react";
import { Bars } from "react-loader-spinner";
import { Route, Routes } from "react-router-dom";

const Dashboard = React.lazy(() => import("./dashboard/Context"));
const AkademikSuratAktifKuliah = React.lazy(() => import("./akademik/surataktifkuliah/Context"));

const Routing = () => {
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

   return (
      <Routes>
         <Route path="/" element={<Dashboard />} loader={loader} />
         <Route path="akademik" loader={loader}>
            <Route path="aktifkuliah" element={<AkademikSuratAktifKuliah />} />
         </Route>
      </Routes>
   );
};
export default Routing;
