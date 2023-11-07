import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data, location }) => {
   const dispatch = useDispatch();

   const addToFavourite = function () {
      console.log("clicked on item", data.company_name);
      dispatch({
         type: "ADD_TO_FAVOURITE",
         payload: data,
      });
   };

   const removeFromFavourite = function () {
      dispatch({
         type: "REMOVE_FROM_FAVOURITE",
         payload: data,
      });
   };

   console.log("this is my location", location);

   return (
      <Row
         className="mx-0 mt-3 p-3"
         style={{ border: "1px solid #00000033", borderRadius: 4 }}
      >
         <Col
            xs={3}
            className="d-flex align-items-center justify-content-between"
         >
            <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            <Button
               variant="outline-primary"
               size="sm"
               className={`${location === "/favourite" ? "d-none" : "d-block"}`}
               onClick={addToFavourite}
            >
               Favourite
            </Button>
            <Button
               variant="outline-danger"
               size="sm"
               className={`${location === "/favourite" ? "d-block" : "d-none"}`}
               onClick={removeFromFavourite}
            >
               Remove
            </Button>
         </Col>
         <Col xs={9}>
            <a href={data.url} target="_blank" rel="noreferrer">
               {data.title}
            </a>
         </Col>
      </Row>
   );
};

export default Job;
