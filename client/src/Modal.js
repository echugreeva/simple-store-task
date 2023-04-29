import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyForm from "./MyForm";
import FormUpdate from "./FormUpdate";


const MyModal = ({item, action}) => { 

const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

if (action==='add'){
    return (
        <>
          <Button className="nextButton" onClick={handleShow}>
            {action}
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add new product</Modal.Title>
            </Modal.Header>
            <Modal.Body><MyForm/></Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button> */}
              {/* <Button variant="primary" onClick={handleClose}>
                {action}
              </Button> */}
            </Modal.Footer>
          </Modal>
        </>
      );
    
} else {
    return (
        <>
          <Button className="nextButton" onClick={handleShow}>
          {action}
          </Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update existing product</Modal.Title>
            </Modal.Header>
            <Modal.Body><FormUpdate item={item}/></Modal.Body>
            <Modal.Footer>
              {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button> */}
              {/* <Button variant="primary" onClick={handleClose}>
                Submit changes
              </Button> */}
            </Modal.Footer>
          </Modal>
        </>
    )
}
}


export default MyModal