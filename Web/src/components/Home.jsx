import React from 'react'
import NavBar from '../helpers/NavBar'
import Carousel from './Carousel'

const Home = () => {
  return (
    <section>
        <NavBar />
        <section className='container'>
          <Carousel />
        </section>
    </section>
  )
}

export default Home