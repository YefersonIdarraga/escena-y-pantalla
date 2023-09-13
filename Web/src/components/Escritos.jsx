import React from 'react'
import NavBar from '../helpers/NavBar'
import LateralMenu from './LateralMenu'

const Escritos = () => {
  return (
    <section>
        <NavBar />
        <section className='container'>
          <LateralMenu />
          <section className='subcontainer'>
            Escritos
          </section>
        </section>
    </section>
  )
}

export default Escritos