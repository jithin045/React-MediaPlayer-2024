import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideos from '../components/Addvideos'
import Videos from '../components/Videos'
import Categories from '../components/Categories'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

function Dashboard() {
  const [addStatus, setAddStatus] = useState({})
  return (
    <>
      
      <div>
        <h5 className='text-dark'>DASHBOARD</h5>
        <Link to={'/his'}>History Data</Link>
        <Row className='p-5'>
          <Col sm='2' md='1'>
            <Addvideos setAddStatus={setAddStatus} />
          </Col>
          <Col sm='4' md='8'>
            <Videos addStatus={addStatus} />
          </Col>
          <Col sm='2' md='3'>
            <Categories />
          </Col>
        </Row>

        <ToastContainer />
      </div>
    </>
  )
}

export default Dashboard