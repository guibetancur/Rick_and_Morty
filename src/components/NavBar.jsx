import React from "react";
import SearchBar from './SearchBar'
import styles from '../estilos/NavBar.module.css'

export default function NavBar(props) {
   return (
      <div className={styles.nav}>
         <a href="_blank">Historia</a>
         <a href="_blank">Capítulos</a>
         <a href="_blank">Autores</a>
         <a href="_blank">Acerca de...</a>
         <div>
            <SearchBar onSearch={props.onSearch} />
         </div>
      </div>
   )
}