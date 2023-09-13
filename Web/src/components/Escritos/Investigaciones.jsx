import React from 'react'
import NavBar from '../../helpers/NavBar'
import LateralMenu from '../LateralMenu'

const Investigaciones = () => {
  return (
    <section>
        <NavBar />
        <section className='container'>
            <LateralMenu />
            <section className='subcontainer'>
                Investigaciones
            </section>
        </section>
    </section>
  )
}

export default Investigaciones