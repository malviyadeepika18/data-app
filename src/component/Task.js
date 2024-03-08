import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "../redux/store";
import { getEmp,getPostData,deleteUsers } from "../redux/slices/emp";
import { Container,Button } from "react-bootstrap";
import Men from "../image/image.jpg";



function Task() {
  const dispatch = useDispatch();
  const [showLoader, setShowLoader] = useState(true);

  const [employeeData, setEmployeeData] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]); 
  const { geteEmpData,DeleteData,getPostEmpData } = useSelector((state) => ({
    geteEmpData: state && state.emp && state.emp .EmpData,
    DeleteData: state && state.emp && state.emp.delete,
    getPostEmpData: state && state.emp && state.emp.postData,
  }));
console.log("hfhjdshghhdghdg",getPostEmpData)

  useEffect(() => {
    dispatch(getEmp());
    dispatch(getPostData());
    // Hide loader after 5 seconds
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  useEffect(() => {
    if (getPostEmpData) {
      setEmployeeData(getPostEmpData);
    }
  }, [getPostEmpData]);

  const handleDelete = (id) => {
    dispatch(deleteUsers(id)); 
  };
  
   
  return (
    <div>
      {showLoader && <p>Loading..</p>}
      {!showLoader && (
        <Container>

              <div className="row mt-3">
       
                <div   className="col-4">
                  <div className="card">
                    <div className="card-body">
                      <button className="close-icon" onClick={() => handleDelete()}>X</button>
                      <h5 className="card-title">title</h5>
                    
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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

                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                    <button className="close-icon" onClick={() => handleDelete()}>X</button>
                      <h5 className="card-title">Card title</h5>
                     
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
                <div className="col-4">
                  <div className="card">
                    <div className="card-body">
                    <button className="close-icon" onClick={() => handleDelete()}>X</button>
                      <h5 className="card-title">Card title</h5>
                     
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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

              </div>
              <div className="row mt-3">
              <div  className="col-4">
                  <div className="card">
                    <div className="card-body">
                    <button className="close-icon" onClick={() => handleDelete()}>X</button>
                      <h5 className="card-title">title</h5>
                     
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
                <div  className="col-4">
                  <div className="card">
                    <div className="card-body">
                    <button className="close-icon" onClick={() => handleDelete()}>X</button>
                      <h5 className="card-title">title</h5>
                     
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
                <div  className="col-4">
                  <div className="card">
                    <div className="card-body">
                    <button className="close-icon" onClick={() => handleDelete()}>X</button>
                      <h5 className="card-title">title</h5>
                     
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
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
              </div>
           
              <div className=" mt-3">
              <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item"><a class="page-link" href="/">1</a></li>
    <li class="page-item"><a class="page-link" href="/page2">2</a></li>
    <li class="page-item"><a class="page-link" href="/page3">3</a></li>
    <li class="page-item">
    {/* <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span></a> */}
    </li>
  </ul>
</nav>
              </div>
                


        </Container>
      )}
    </div>
  );
}

export default Task;
