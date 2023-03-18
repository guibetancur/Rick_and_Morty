import React from "react";
import SearchBar from './SearchBar'
import styles from '../estilos/NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
   return (
      <div className={styles.nav}>
         <Link to='/home'>
            <a href="home">To Home</a>
            {/* <button>To Home</button> */}
         </Link>
         <Link to='/capitulos'>
            <a href="">Chapters</a>
            {/* <button>About</button> */}
         </Link>
         <a href="_blank">Autors</a>
         <Link to='/about'>
            <a href="about">About Me...</a>
         </Link>
         <Link to='/'>
            <a href="/" on>Logout</a>
         </Link>
         <div>
            <SearchBar onSearch={props.onSearch} />
         </div>
      </div>
   )
}
// function login { llama a navbar}
// function logout llama el login
//  {location.pathname !== '/' && <NavBar onSearch='' blablabla logOut={}> 
/*
<div>
    {location.pathname !== '/' && <Nav onSearch={onSearch} logOut={logOut}></Nav>
}

<Routes>

    <Route path="/" element = {logIn}></Route>
</Routes>

localhost:3000/  ----> ACA NO SE EJECUTA EL NAVBAR

localhost:3000/random ------ ACA SI
*/