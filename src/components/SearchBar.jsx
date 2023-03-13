import { useRef, useState } from 'react'
// import styles from '../estilos/SearchBar.module.css'

export default function SearchBar(props) {
   const [character, setCharacter] = useState([])
   const [message, setMessage] = useState('') // Para no tener que usar el botón

   const inputNameRef = useRef()
   const buttonNameRef = useRef()

   const handleChange = (event) => setMessage(event.target.value)
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') props.onSearch(event.target.value)
   }

   // function handleInput(event) {
   //    setCharacter(event.target.value)
   // }

   return (
      <div className='head'>
         {/* <div class="input-wrapper">
            <button class="icon">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="25px" width="25px">
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"></path>
                  <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#fff" d="M22 22L20 20"></path>
               </svg>
            </button>
         </div> */}
         <div id='divSearch'>
            <input type="number" min={1} max={826} id='add' value={message} onChange={handleChange} onKeyDown={handleKeyDown} autoFocus />
            {/* <input type="search" name="add" id="add" placeholder='Id between 1 and 826'
               onChange={(e) => handleInput(e)} value={character} />
            <button id='find' onClick={() => props.onSearch(character)}>Add</button> */}
         </div>
         <button onClick={()=>props.random()}>Random</button>
      {/* <a href={buttonNameRef} onClick={handleButtonClick}></a> */}
      </div>
   );
}
