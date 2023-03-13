import React, { useState, useEffect } from "react";
import styles from '../estilos/Detail.module.css'
import { useParams } from "react-router-dom";

export default function Detail() {
   const { detailId } = useParams()
   const [character, setCharacter] = useState({})
   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char)
            } else {
               alert('There is not a character with that ID')
            }
         })
         .catch((err) => {
            alert('Data Error ')
         })
      return setCharacter({})
   }, [detailId])
   return (
      <div className={styles.detail}>
         <div>
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h3>{character.origin?.name}</h3>
         </div>
         <div>
            <img className={styles.myImg} src={character.image} alt={character.name} />
         </div>
      </div>
   )
}