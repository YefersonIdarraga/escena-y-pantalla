import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navBar.css'
import { useEffect, useState, useRef } from 'react'

const NavBar = () => {
    const [ search, setSearch ] = useState('')

    const inputRef = useRef(null)

    const handleSearch = () => {
        setSearch('searchActive');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }
  return (
    <nav className='menu'>
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
            <i class="bi bi-search" onClick={handleSearch}></i>
            <input className={`searchinp ${search}`} onBlur={() => setSearch('')} ref={inputRef} type="search" />
        </section>
    </nav>
  )
}

export default NavBar