import React from 'react'
import NavBar from '../../helpers/NavBar'
import LateralMenu from '../LateralMenu'

const Reflexiones = () => {
  return (
    <section>
        <NavBar />
        <section className="container">
            <LateralMenu />
            <section className='subcontainer'>
                Reflexiones
            </section>
        </section>
    </section>
  )
}

export default Reflexiones