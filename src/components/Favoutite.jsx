import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";
import { Link, useLocation } from "react-router-dom";

const Favourite = () => {
   const companies = useSelector((state) => state.favourite.favourites);

   console.log("saved jobs", companies);

   let location = useLocation();

   console.log(location.pathname);

   return (
      <Container>
         <Row>
            <Col xs={10} className="mx-auto mb-5">
               <h1>This is favourite</h1>
               <Link to="/">home</Link>
               {companies.map((jobData) => {
                  return (
                     <Job
                        key={jobData._id}
                        data={jobData}
                        location={location.pathname}
                     />
                  );
               })}
            </Col>
         </Row>
      </Container>
   );
};

export default Favourite;
