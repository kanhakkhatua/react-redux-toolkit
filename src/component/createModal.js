import React from "react";
import { Button, Modal } from "react-bootstrap";

function createModal(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {props.editModal === true ? "Update User Data" : "Enter User Data"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <div>
                <span>Name : </span>
                <input
                  type="text"
                  name="name"
                  value={
                    props.editModal === true
                      ? props.editUser.name
                      : props.newuserData.name
                  }
                  placeholder="Enter Your Name"
                  onChange={(e) => {
                    props.editModal === true
                      ? props.setEditUser({
                          ...props.editUser,
                          name: e.target.value,
                        })
                      : props.setnewUserData({
                          ...props.newuserData,
                          name: e.target.value,
                        });
                  }}
                />
              </div>
              <div>
                <span>Email : </span>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter Your Email"
                  value={
                    props.editModal === true
                      ? props.editUser.email
                      : props.newuserData.email
                  }
                  onChange={(e) => {
                    props.editModal === true
                      ? props.setEditUser({
                          ...props.editUser,
                          email: e.target.value,
                        })
                      : props.setnewUserData({
                          ...props.newuserData,
                          email: e.target.value,
                        });
                  }}
                />
              </div>
              <div>
                <span>Phone : </span>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={
                    props.editModal === true
                      ? props.editUser.phone
                      : props.newuserData.phone
                  }
                  onChange={(e) => {
                    props.editModal === true
                      ? props.setEditUser({
                          ...props.editUser,
                          phone: e.target.value,
                        })
                      : props.setnewUserData({
                          ...props.newuserData,
                          phone: e.target.value,
                        });
                  }}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={
              props.editModal === true ? props.submitEdit : props.SubmitNewdata
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default createModal;
