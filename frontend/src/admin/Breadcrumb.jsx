import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Each } from "~/Each";
import * as h from "~/Helpers";

const Breadcrumb = () => {
   const { position, pageTitle } = useSelector((state) => state.redux);

   return (
      <Row>
         <Col xs={12}>
            <div className="page-title-box d-sm-flex align-items-center justify-content-between">
               <h4 className="mb-sm-0">{pageTitle}</h4>
               {h.arrLength(position) && (
                  <div className="page-title-right">
                     <ol className="breadcrumb m-0">
                        <Each of={position} render={(row) => <li className="breadcrumb-item active">{row}</li>} />
                     </ol>
                  </div>
               )}
            </div>
         </Col>
      </Row>
   );
};
export default Breadcrumb;
