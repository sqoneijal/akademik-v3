import { createSlice } from "@reduxjs/toolkit";

export const redux = createSlice({
   name: "redux",
   initialState: {
      init: {},
      module: {},
      secondaryNav: [],
      detailNavActive: {},
      position: [],
      filter: {},
      showButton: false,
      buttonConfig: {},
      sidebarMinize: "off",
      pageTitle: "",
   },
   reducers: {
      pageTitle: (state, { payload } = action) => {
         state.pageTitle = payload;
      },
      setInit: (state, { payload } = action) => {
         state.init = payload;
      },
      secondaryNav: (state, { payload } = action) => {
         state.secondaryNav = payload;
      },
      detailNavActive: (state, { payload } = action) => {
         state.detailNavActive = payload;
      },
      position: (state, { payload } = action) => {
         state.position = payload;
      },
      filter: (state, { payload } = action) => {
         state.filter = payload;
      },
      applyFilter: (state, { payload } = action) => {
         state.filter = { ...payload.data };
         // h.handleFilterDatatable(payload.url, payload.data);
      },
      setModule: (state, { payload } = action) => {
         state.module = payload;
      },
      showButton: (state, { payload } = action) => {
         state.showButton = payload;
      },
      buttonConfig: (state, { payload } = action) => {
         state.buttonConfig = payload;
      },
      sidebarMinize: (state, { payload } = action) => {
         state.sidebarMinize = payload;
      },
   },
});
export const {
   init,
   setInit,
   setModule,
   secondaryNav,
   detailNavActive,
   position,
   applyFilter,
   filter,
   showButton,
   buttonConfig,
   sidebarMinize,
   pageTitle,
} = redux.actions;
export default redux.reducer;
