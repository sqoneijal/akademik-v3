import React, { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { pageTitle } from "~/redux";

const Context = () => {
   const dispatch = useDispatch();

   useLayoutEffect(() => {
      dispatch(pageTitle("Dashboard"));
      return () => {};
   }, []);

   return <React.Fragment>Context</React.Fragment>;
};
export default Context;
