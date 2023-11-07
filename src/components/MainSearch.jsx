import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const MainSearch = () => {
   const [query, setQuery] = useState("");
   const [jobs, setJobs] = useState([]);

   const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

   const handleChange = (e) => {
      setQuery(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch(baseEndpoint + query + "&limit=20");
         if (response.ok) {
            const { data } = await response.json();
            setJobs(data);
         } else {
            alert("Error fetching results");
         }
      } catch (error) {
         console.log(error);
      }
   };

   //  const companies = useSelector((state) => state.companies.favourite);

   //  console.log("saved jobs", companies);
   let location = useLocation();
   console.log("main location", location.pathname);

   return (
      <Container>
         <Row>
            <Col xs={10} className="mx-auto my-3">
               <h1 className="display-1">Remote Jobs Search</h1>
               <Link to="/favourite">favourite</Link>
            </Col>
            <Col xs={10} className="mx-auto">
               <Form onSubmit={handleSubmit}>
                  <Form.Control
                     type="search"
                     value={query}
                     onChange={handleChange}
                     placeholder="type and press Enter"
                  />
               </Form>
            </Col>
            <Col xs={10} className="mx-auto mb-5">
               {jobs.map((jobData) => (
                  <Job
                     key={jobData._id}
                     data={jobData}
                     location={location.pathname}
                  />
               ))}
            </Col>
         </Row>
      </Container>
   );
};

export default MainSearch;
