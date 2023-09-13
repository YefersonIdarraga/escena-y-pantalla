import React from 'react'
import NavBar from '../helpers/NavBar'
import Carousel from './Carousel'

const Home = () => {
  return (
    <section>
        <NavBar />
        <section className='container'>
          <Carousel />
          <section className='subcontainer'>   
              Home
          </section>
        </section>
    </section>
  )
}

export default Home