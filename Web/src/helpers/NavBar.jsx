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

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <nav className={`menu ${menuOpen ? 'open' : ''}`}>
         <section className='menu-button' onClick={toggleMenu}>
        <i className={`bi bi-list ${menuOpen ? 'open' : ''}`}></i>
      </section>
        <section className='logo'>
            <img src={rollo} alt="" />
            <h1>Escena y Pantalla</h1>
        </section>
        <section className={`menu-elements ${menuOpen ? 'open' : ''}`}>
            <section className='menu-element'>
                <NavLink to={'/'} onClick={toggleMenu}>Home</NavLink>
            </section>
            <section className='menu-element'>
                <NavLink to={'/dramaturgia'} onClick={toggleMenu}>Dramaturgia</NavLink>
            </section>
            <section className='menu-element'>
                <NavLink to={'/guiones'} onClick={toggleMenu}>Guiones</NavLink>
            </section>
            <section className='menu-element'>
                <NavLink to={'/escritos'} onClick={toggleMenu}>Escritos</NavLink>
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