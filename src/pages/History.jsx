import React, { useEffect, useState } from 'react'
import { getHistory, deleteHistory } from '../services/allApis'
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

function History() {
  const [his, setHis] = useState([])
  const [delhisstatus, setDelhisstatus] = useState({})

  useEffect(() => {
    getData()
  }, [delhisstatus])


  const getData = async () => {
    const res = await getHistory()
    console.log(res.data);
    setHis(res.data)
  }

  const handleDelhis = async (id) => {
    console.log(id);
    const res = await deleteHistory(id)
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
      setDelhisstatus(res)
      toast.success("Watch History Deleted!!")
    }
    else {
      toast.error("History Deletion Failed!!")
    }
  }

  return (
    <>
      <div className='p-5'>
        <h3>Watch History</h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Video Caption</th>
              <th>Video URL</th>
              <th>Date & Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              his ?
                his.map(item => (
                  <tr>
                    <td>{item.caption}</td>
                    <td>{item.url}</td>
                    <td>{item.datetime}</td>
                    <td>
                      <i className='fa-solid fa-trash-can text-danger' onClick={() => { handleDelhis(item.id) }}></i>
                    </td>
                  </tr>
                )) :
                <h1>No Watch History</h1>

            }

          </tbody>
        </Table>

        <ToastContainer />
      </div>
    </>
  )
}

export default History