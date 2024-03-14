import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
      <div className='w-100 d-flex justify-content-center align-items-center mt-5' style={{ height: '80vh' }}>
        <div className='row p-5 shadow'>
          <div className='col d-flex justify-content-center flex-column'>
            <h1>Media Player 2024</h1>
            <p>Explore media player for youtube videos upload and management. You can add, manage videos and categories and even check</p>
            <div>
              <Link to={'/dash'} className='btn btn-primary'>Explore</Link>
            </div>
          </div>
          <div className='col'>
            <img src="https://austinvisuals.com/wp-content/uploads/How-To-Make-Cool-Animations-For-YouTube.png" alt="image" className='img-fluid shadow ' style={{ borderRadius: '5px' }} />
          </div>
        </div>
      </div>
      <div className='mt-3 p-5 '>
        <h2 className='text-center'>Features</h2>
        <div className='d-flex mt-3 flex-row justify-content-evenly'>

          <div className="card" style={{width: "18rem"}}>
            <img src="https://cdn.dribbble.com/users/1585453/screenshots/6732255/comp_1.gif" style={{height:'300px'}} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Upload Videos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div className="card" style={{width: "18rem"}}>
            <img src="https://i.pinimg.com/originals/0a/e6/d6/0ae6d6b90d8f455ce7f742ff1887d714.gif" style={{height:'300px'}} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Watch Videos</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

          <div className="card" style={{width: "18rem"}}>
            <img src="https://cdn.dribbble.com/users/10028038/screenshots/17990868/media/286866fda6d2b6abccd99a10a4d3c303.gif" style={{height:'300px'}} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Watch History</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>

        </div>
      </div>
      <div className='mt-5 d-flex justify-content-between flex-row align-items-center p-5'>
        <div className='col p-5'>
          <h2>Simple , Fast & Secured</h2>
          <p style={{textAlign:'justify'}}>Media Player 2024 is a platform for simle and faster youtube videos uploading and management ,video watch history too where you get a simple video player interface with the app itself </p>
        </div>
        <div className='col'>
        <iframe width="500" height="300" src="https://www.youtube.com/embed/Rwe5Aw3KPHY?si=cMweaKsVdsS9iXZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default Landing