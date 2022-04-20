import "./App.css";
import { Table, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CreateModal from "./component/createModal";
import { allData, updateEditData, deleteData } from "./redux/crudUser";
import { singleData } from "./redux/SingleUser";

function App() {
  const dispatch = useDispatch();
  const [newUser, setNewUser] = useState(useSelector((state) => state.crud));
  // console.log(newUser);
  const reduxNewUser = useSelector((state) => state.crud);

  // console.log("single user", reduxSingleUser);
  const [editUser, setEditUser] = useState(
    useSelector((state) => state.singleUser)
  );
  const reduxSingleUser = useSelector((state) => state.singleUser);

  const [editModal, setEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setEditModal(false);
  };
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

  useEffect(() => {
    setEditUser(reduxSingleUser);
  }, [reduxSingleUser]);

  const SubmitNewdata = () => {
    dispatch(allData(newuserData));

    setShow(false);
    clearData();
  };

  function EditUser(i) {
    setEditIndex(i);
    const editShow = {
      name: newUser[i].name,
      email: newUser[i].email,
      phone: newUser[i].phone,
      index: i,
    };
    dispatch(singleData(editShow));

    setEditModal(true);
    setShow(true);
  }
  function submitEdit() {
    let ind = editIndex;

    const editUserData = {
      name: editUser.name,
      email: editUser.email,
      phone: editUser.phone,
    };

    var data = newUser;
    const updateArr = data.map((e, i) => (i === ind ? (e = editUserData) : e));

    dispatch(updateEditData(updateArr));

    setEditModal(false);
    setShow(false);
  }
  function DeleteUser(i) {
    dispatch(deleteData(i));
  }

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
        setEditUser={setEditUser}
        editUser={editUser}
        editModal={editModal}
        submitEdit={submitEdit}
        reduxSingleUser={reduxSingleUser}
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
