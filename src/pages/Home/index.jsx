import React from 'react'
import Header from '../../components/base/Header/Header'
import Hero from '../../components/base/Hero/Hero'
import Dishes from '../../components/base/Home/Dishes'

export default function HomeScreen() {
  return (
    <div>
        <Header/>
        <Hero />
        <Dishes/>
    </div>
  )
}
