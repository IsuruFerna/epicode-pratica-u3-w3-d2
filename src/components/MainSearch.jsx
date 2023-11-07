import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { addToSearched } from "./redux/actions";
import { Link, useLocation } from "react-router-dom";

const MainSearch = () => {
   const [query, setQuery] = useState("");
   // const [jobs, setJobs] = useState([]);
   const [trigger, setTrigger] = useState(false);
   const [searched, setSearch] = useState(false);

   const dispatch = useDispatch();
   const searchedFromReduxSearched = useSelector(
      (state) => state.searched.searchedList.data
   );

   const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";

   // handles in rebux store
   useEffect(() => {
      if (query) {
         dispatch(addToSearched(baseEndpoint, query, "&limit=20"));
      }
   }, [dispatch, trigger]);

   // not going to use this because it's not good for performance
   // may cause slow down the app
   // may cause lot of network resources
   // I could handle when the user is finished typing maybe with a timeinterval

   // I took a wrong idea and implemented as not intended
   // have not enough time to fix because had to solve a lots of issues
   const handleChange = (e) => {
      setQuery(e.target.value);
      // console.log(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      setTrigger(!trigger);
      setSearch(true);
      // setQuery(e.target.value);
   };

   // const handleSubmit1 = async (e) => {
   //    e.preventDefault();

   //    try {
   //       const response = await fetch(baseEndpoint + query + "&limit=20");
   //       if (response.ok) {
   //          const { data } = await response.json();
   //          setJobs(data);
   //       } else {
   //          alert("Error fetching results");
   //       }
   //    } catch (error) {
   //       console.log(error);
   //    }
   // };

   //  const companies = useSelector((state) => state.companies.favourite);

   //  console.log("saved jobs", companies);
   let location = useLocation();
   console.log("main location", location.pathname);
   console.log("data got: ", searchedFromReduxSearched);

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
            {searched && (
               <Col xs={10} className="mx-auto mb-5">
                  {searchedFromReduxSearched.map((jobData) => (
                     <Job
                        key={jobData._id}
                        data={jobData}
                        location={location.pathname}
                     />
                  ))}
               </Col>
            )}
         </Row>
      </Container>
   );
};

export default MainSearch;
