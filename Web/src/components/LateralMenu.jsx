import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/lateralMenu.css'

const LateralMenu = () => {
  return (
    <section className='lateralMenu'>
        <section className='lm-element'>
            <NavLink to={'/articulos'}>Artículos</NavLink>
        </section>
        <section className='lm-element'>
            <NavLink to={'/reseñas'}>Reseñas</NavLink>
        </section>
        <section className='lm-element'>
            <NavLink to={'/reflexiones'}>Reflexiones</NavLink>
        </section>
        <section className='lm-element'>
            <NavLink to={'/investigaciones'}>Investigaciones</NavLink>
        </section>
        <i className="bi bi-arrow-bar-right"></i>
    </section>
  )
}

export default LateralMenu