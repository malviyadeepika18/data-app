import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "../redux/store";
import { getEmp,getPostData,deleteUsers} from "../redux/slices/emp";
import { Container,Button } from "react-bootstrap";
import Men from "../image/image.jpg";



function Task() {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6); 
  const [employeedata, setEmployeeData] = useState([]);
  const { geteEmpData,DeleteData, } = useSelector((state) => ({
    geteEmpData: state && state.emp.empData,
    DeleteData: state && state.emp && state.emp.deletePostData,

  }));
console.log("hfhjdshghhdghdg",geteEmpData);

  useEffect(() => {
    dispatch(getEmp());
  
   
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    if (geteEmpData) {
     
      setEmployeeData(geteEmpData);
      console.log("Fetcheddata",geteEmpData);
    }
  }, [geteEmpData]);

  const handleDelete = async (id) => {
    try {

      await dispatch(deleteUsers(id));
      

      await dispatch(getEmp());
    } catch (error) {
      console.error("Error deleting user:", error);
     
    }
  };
  

   
   const indexOfLastCard = currentPage * cardsPerPage;
   
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  
   const currentCards = employeedata.slice(indexOfFirstCard, indexOfLastCard);
 
   
   const paginate = (pageNumber) => setCurrentPage(pageNumber);
 
   
  return (
    <div>
      {showLoader && <div className="loader"></div>}
      {!showLoader && (


        <Container>
              <div className="row mt-3">
              {currentCards.map((user, index) => (
                <div  key={index}  className="col-4">
                  <div className="card fixed-height">
                    <div className="card-body ">
                      <button className="close-icon"   onClick={() => handleDelete(user.id)} >X</button>
                      <h5 className="card-title card-text-container ">{user.title}</h5>
                    
                      <p className="card-text card-text-container ">
                      {user.body}
                      </p>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Mon,21 Dec 2021 14:57 GMT
                      </h6>
                      <img
                        className="card-img-top"
                        src={Men}
                        alt="Card image cap"
                      ></img>
                    </div>
                  </div>
                </div>
              ))}
                </div>
             
                <div className="mt-3">
  <nav aria-label="Page navigation example">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <button
          className="page-link"
          onClick={() =>
            setCurrentPage((prevPage) =>
              prevPage === 1 ? prevPage : prevPage - 1
            )
          }
        >
          Previous
        </button>
      </li>
      {[...Array(Math.min(3, Math.ceil(employeedata.length / cardsPerPage)))].map(
        (_, index) => (
          <li key={index} className="page-item">
            <button
              className="page-link"
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        )
      )}
      {currentPage < Math.ceil(employeedata.length / cardsPerPage) && (
        <li className="page-item">
          <button
            className="page-link"
            onClick={() =>
              setCurrentPage((prevPage) =>
                prevPage ===
                Math.ceil(employeedata.length / cardsPerPage)
                  ? prevPage
                  : prevPage + 1
              )
            }
          >
            Next
          </button>
        </li>
      )}
    </ul>
  </nav>
</div>

                


        </Container>
      )}
    </div>
  );
}

export default Task;
