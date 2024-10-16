import React from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { Each } from "~/Each";
import * as h from "~/Helpers";

const navList = [
   {
      label: "Akademik",
      icon: "ri-pages-line",
      sub: true,
      children: [
         {
            label: "Surat Aktif Kuliah",
            pathname: "/akademik/aktifkuliah",
         },
         {
            label: "Tidak Menerima Beasiswa",
            pathname: "/akademik/tidakmenerimabeasiswa",
         },
         {
            label: "Penelitian",
            pathname: "/akademik/penelitian",
         },
         {
            label: "Magang",
            pathname: "/akademik/magang",
         },
      ],
   },
   {
      label: "SKPI",
      icon: "ri-rocket-line",
      sub: false,
   },
];

const RenderSubMenu = ({ data }) => {
   const location = useLocation();

   return (
      <div className="collapse menu-dropdown" id={`sidebar-${h.parse("label", data).replace(/\s+/g, "")}`}>
         <ul className="nav nav-sm flex-column">
            <Each
               of={data.children}
               render={(row) => (
                  <li className="nav-item">
                     <Link
                        to={h.parse("pathname", row)}
                        className={`nav-link ${h.parse("pathname", location) === h.parse("pathname", row) && "active"}`}
                        data-key={`t-${h.parse("label", row).replace(/\s+/g, "")}`}>
                        {h.parse("label", row)}
                     </Link>
                  </li>
               )}
            />
         </ul>
      </div>
   );
};

const NavbarMenu = () => {
   return (
      <div className="app-menu navbar-menu">
         <div id="scrollbar">
            <Container fluid className="dropdown-custom-right">
               <div id="two-column-menu" />
               <ul className="navbar-nav" id="navbar-nav">
                  <li className="menu-title">
                     <span data-key="t-menu">Menu</span>
                  </li>
                  <Each
                     of={navList}
                     render={(row) => (
                        <li className="nav-item">
                           <Link
                              className={`nav-link menu-link collapsed`}
                              role="button"
                              aria-expanded="false"
                              data-bs-toggle={row.sub && "collapse"}
                              aria-controls={`sidebar-${h.parse("label", row).replace(/\s+/g, "")}`}>
                              <i className={h.parse("icon", row)} />{" "}
                              <span data-key={`t-${h.parse("label", row).replace(/\s+/g, "")}`}>{h.parse("label", row)}</span>
                           </Link>
                           {row.sub && <RenderSubMenu data={row} />}
                        </li>
                     )}
                  />
               </ul>
            </Container>
         </div>
         <div className="sidebar-background" />
      </div>
   );
};
export default NavbarMenu;
