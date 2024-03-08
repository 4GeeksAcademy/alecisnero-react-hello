import React from 'react'
/* IMAGENES */
import Paris from '../../img/pexels-paris.jpg'
import Sydney from '../../img/pexels-sydney.jpg'
import Vzla from '../../img/pexels-venezuela.jpg'

const Carrusel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Paris} className="d-block w-100" alt='Img de Paris' />
          <div className='carousel-caption top-0 mt-4'>
            <p className='mt-5 fs-3 text-uppercase'>Descrubre tu Ciudad</p>
            <h1 className='display-1 fw-bolder text-uppercase'>Paris</h1>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Sydney} className="d-block w-100" alt='Img de Sydney' />
        </div>
        <div className="carousel-item">
          <img src={Vzla} className="d-block w-100" alt='Img de Vzla' />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrusel