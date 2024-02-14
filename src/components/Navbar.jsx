import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
    <a className="navbar-brand text-warning" href="#">
      <img src="public\notebook-svgrepo-com.svg" alt="" width="80" height="64" className="d-inline-block align-text-center "/>
     BURSA'DA ÖĞREN
    </a>
  </div>
  <div className="container">
   
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <NavLink className="nav-link" to="/">Ana Sayfa</NavLink>
        <NavLink className="nav-link" to="/course">BUSMEK Kursları</NavLink>
        <NavLink className="nav-link" to="/teenage">Gençlik Merkezleri</NavLink>
        <NavLink className="nav-link" to="/contact">İletişim</NavLink>
        <NavLink className="nav-link" to="/education">Eğitimler</NavLink>
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar