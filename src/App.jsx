import React, {useEffect} from 'react'
import styles from './App.module.scss'
import Header from './components/Header/Header'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
function App() {
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    console.log(location)
    location.pathname === '/' && navigate('/home')
  }, [])
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App
