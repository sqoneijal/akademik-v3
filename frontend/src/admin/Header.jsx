import lozad from "lozad";
import React, { useLayoutEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
   useLayoutEffect(() => {
      lozad().observe();
      return () => {};
   }, []);

   return (
      <header id="page-topbar">
         <div className="layout-width">
            <div className="navbar-header">
               <div className="d-flex">
                  <div className="navbar-brand-box horizontal-logo">
                     <Link to="/" className="logo logo-dark">
                        <span className="logo-lg">
                           <img data-src="/public/logo-uin.svg" alt="logo" style={{ height: 60 }} className="lozad" />
                        </span>
                     </Link>
                     <Link to="/" className="logo logo-light">
                        <span className="logo-lg">
                           <img data-src="assets/images/logo-light.png" alt="logo" style={{ height: 60 }} className="lozad" />
                        </span>
                     </Link>
                  </div>
                  <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                     <span className="hamburger-icon">
                        <span />
                        <span />
                        <span />
                     </span>
                  </button>
               </div>
               <div className="d-flex align-items-center">
                  <Dropdown as={"div"} bsPrefix="dropdown ms-sm-3 header-item topbar-user">
                     <Dropdown.Toggle bsPrefix="btn" as={"div"}>
                        <span className="d-flex align-items-center">
                           <img className="rounded-circle header-profile-user lozad" data-src="/public/avatar-placeholder.png" alt="Header Avatar" />
                           <span className="text-start ms-xl-2">
                              <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">Anna Adame</span>
                              <span className="d-none d-xl-block ms-1 fs-12 user-name-sub-text">Founder</span>
                           </span>
                        </span>
                     </Dropdown.Toggle>
                     <Dropdown.Menu bsPrefix="dropdown-menu dropdown-menu-end" align={"end"}>
                        <h6 className="dropdown-header">Welcome Anna!</h6>
                        <a className="dropdown-item" href="pages-profile.html">
                           <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />
                           <span className="align-middle">Profile</span>
                        </a>
                        <a className="dropdown-item" href="apps-chat.html">
                           <i className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1" />
                           <span className="align-middle">Messages</span>
                        </a>
                        <a className="dropdown-item" href="apps-tasks-kanban.html">
                           <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1" />
                           <span className="align-middle">Taskboard</span>
                        </a>
                        <a className="dropdown-item" href="pages-faqs.html">
                           <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" /> <span className="align-middle">Help</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="pages-profile.html">
                           <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1" />
                           <span className="align-middle">
                              Balance : <b>$5971.67</b>
                           </span>
                        </a>
                        <a className="dropdown-item" href="pages-profile-settings.html">
                           <span className="badge bg-success-subtle text-success mt-1 float-end">New</span>
                           <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" /> <span className="align-middle">Settings</span>
                        </a>
                        <a className="dropdown-item" href="auth-lockscreen-basic.html">
                           <i className="mdi mdi-lock text-muted fs-16 align-middle me-1" /> <span className="align-middle">Lock screen</span>
                        </a>
                        <a className="dropdown-item" href="auth-logout-basic.html">
                           <i className="mdi mdi-logout text-muted fs-16 align-middle me-1" />
                           <span className="align-middle" data-key="t-logout">
                              Logout
                           </span>
                        </a>
                     </Dropdown.Menu>
                  </Dropdown>
               </div>
            </div>
         </div>
      </header>
   );
};
export default Header;
