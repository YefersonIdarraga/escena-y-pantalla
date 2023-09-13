import React from 'react'
import NavBar from '../../helpers/NavBar'
import LateralMenu from '../LateralMenu'

const Reseñas = () => {
  return (
    <section>
        <NavBar />
        <section className="container">
            <LateralMenu />
            <section className='subcontainer'>   
                Reseñas
            </section>
        </section>
    </section>
  )
}

export default Reseñas