import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card = ({ title }) => {
  return (
    <div class="card">
      <h2>{title}</h2>
    </div>
  )
}


const App = () => {
  return (
    <div className='card-container'>

      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="Lion King" />

    </div>
  )
}


export default App
