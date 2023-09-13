import React from 'react'
import NavBar from '../../helpers/NavBar'
import LateralMenu from '../LateralMenu'

const Articulos = () => {
  return (
    <section>
        <NavBar />
        <section className='container'>
            <LateralMenu />
            <section className='subcontainer'>
                Articulos
            </section>
        </section>
    </section>
  )
}

export default Articulos