import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'
import rollo from '../assets/images/rollo-de-pelicula.png'

const NavBar = () => {
    const [ search, setSearch ] = useState('')
    const [ searchTxt, setSearchTxt ] = useState('')

    const inputRef = useRef(null)

    const handleSearch = () => {
        setSearch(search == 'searchActive' ? '' : 'searchActive');
        setSearchTxt(searchTxt == 'searchTxtActive' ? '' : 'searchTxtActive')
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            setSearch('')
        }
    }

  return (
    <nav className='menu'>
        <section className='logo'>
            <img src={rollo} alt="" />
            <h1>Escena y Pantalla</h1>
        </section>
        <section className='menu-elements'>
            <section className='menu-element'>
                <NavLink to={'/'}>Home</NavLink>
            </section>
            <section className='menu-element'>
                <NavLink to={'/dramaturgia'}>Dramaturgia</NavLink>
            </section>
            <section className='menu-element'>
                <NavLink to={'/guiones'}>Guiones</NavLink>
            </section>
            <section className='menu-element'>
                <NavLink to={'/escritos'}>Escritos</NavLink>
            </section>
        </section>
        <section className='search'>
            <div title='Buscar'>
                <i className="bi bi-search" onClick={handleSearch}></i>
            </div>
            <input className={`searchinp ${search}`} onKeyUp={handleKeyUp} ref={inputRef} placeholder='Buscar' type="search" />
        </section>
    </nav>
  )
}

export default NavBar