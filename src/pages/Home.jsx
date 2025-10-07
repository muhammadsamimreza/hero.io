import React from 'react'
import TrendingApps from './TrendingApps'
import Container from '../components/Container/Container'

const Home = () => {
  return (
    <div className='bg-[#e9e9e9]'>
        <Container>
          <TrendingApps></TrendingApps>
        </Container>
    </div>
  )
}

export default Home