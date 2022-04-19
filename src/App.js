import "./App.css";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateModal from "./component/createModal";
import { allData } from "./redux/crudUser";

function App() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(useSelector((state) => state.crud));
  // console.log(newUser);
  const reduxNewUser = useSelector((state) => state.crud);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newuserData, setnewUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  // console.log(newuserData);

  const clearData = () => {
    setnewUserData({
      ...newuserData,
      name: "",
      email: "",
      phone: "",
    });
  };

  useEffect(() => {
    setNewUser(reduxNewUser);
  }, [reduxNewUser]);

  const SubmitNewdata = () => {
    dispatch(allData(newuserData));

    setShow(false);
    clearData();
  };

  function EditUser() {}
  function DeleteUser() {}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add User
      </Button>

      <CreateModal
        show={show}
        handleClose={handleClose}
        SubmitNewdata={SubmitNewdata}
        setnewUserData={setnewUserData}
        newuserData={newuserData}
      />

      <h1>Home Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {newUser.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>
                  <Button onClick={() => EditUser(i)}>Edit</Button>
                </td>
                <td>
                  <Button onClick={() => DeleteUser(i)}>Delete</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default App;
