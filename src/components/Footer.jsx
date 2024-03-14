import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='w-100 d-flex flex-column justify-content-center bg-light'>
        <div className='row p-5'>
          <div className='col'>
            <h4>Media Player 2024</h4>
            <p style={{ textAlign: 'justify' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to dem
              onstrate the visual form of a document or a typeface without rel
              ying on meaningful content. Lorem ipsum may be used as a placeholder befor
              e the final copy is available.</p>
          </div>
          <div className='col'>
            <h4>Links</h4>
            <Link to={'/'} style={{color:'gray'}}>Landing</Link><br />
            <Link to={'/dash'} style={{color:'gray'}}>Dashboard</Link><br />
            <Link to={'/his'} style={{color:'gray'}}>history</Link>
          </div>
          <div className='col'>
            <h4>References</h4>
            <a href="https://getbootstrap.com" target='_blank' style={{color:'gray'}}>Bootstrap</a><br />
            <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{color:'gray'}}>React-Bootstrap</a><br />
            <a href="https://react.dev/" target='_blank' style={{color:'gray'}}>React</a>
          </div>
        </div>
        <div className='text-center'>
          <p>&copy; Media Player 2024</p>
        </div>
      </div>
    </>
  )
}

export default Footer