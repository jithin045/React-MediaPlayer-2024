import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { addCategory } from '../services/allApis'
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';

function Categories({}) {
  const [CatStatus, setCatStatus] = useState([])
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState({
    name: '', videos: []
  })

  const getCategory = (val) => {

    if (val) {
      setCategory({ ...category, name: val })
    }
  }

  const handleAdd = async () => {
    console.log(category);
    if (category.name) {
      const res = await addCategory(category)
      if (res.status >= 200 && res.status < 300) {
        setCatStatus(res.data)
        toast.success("Category Added Successfully !!")
        handleClose()
      }
      else {
        toast.error("category Adding Failed!!")
      }
    }
    else {
      toast.warning("Enter Valid Data!!")
    }
  }



  const handleClose = () => {
    setShow(false)
    setCategory({
      name: '', videos: []
    })
  }
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-grid'>
        <Button variant='primary' className='btn' onClick={handleShow}>Video Categories</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add categories</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="video category name" onChange={(e) => { getCategory(e.target.value) }} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>Save</Button>
        </Modal.Footer>
      </Modal>
      

      <Categorylist CatStatus={CatStatus}/>
    </>



  )
}

export default Categories