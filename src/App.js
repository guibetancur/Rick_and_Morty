import logo from './logo.svg';
import './estilos/App.css';
import Card from './components/Card'
import Cards from './components/Cards'
// import SearchBar from './components/SearchBar.jsx';
import NavBar from './components/NavBar' // Llamará a SearchBar
// import characters, { Rick, Morty } from './data'
//import characters from './data'
import { useState, useRef } from 'react';
var msg

function alerta(message) {
  console.log('Mensaje=', message)
  msg = document.getElementById('msg')
  msg.innerText = message
  setTimeout(() => msg.innerText = '', 5000);
}

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  const [characters, setCharacters] = useState([])

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let exists = characters.find((e) => e.id === data.id)
          if (exists) alerta('Character with id#' + id+' ('+ data.name + ') already exists')
          else {
            setCharacters((oldChars) => [...oldChars, data])
            alerta('Character ' + data.name + ' added')
          }
        } else {
          alerta(`There are only 826 characters`)
        }
        let add = document.getElementById('add')
        add.value = ''
        add.focus()
      })
  }

  function onClose(id) {
    setCharacters((data) => {
      let add = document.getElementById('add')
      add.focus()
      return data.filter((e) => e.id !== id)
    })
  }

  return (
    // console.log("Characters:", characters),
    <div className={darkMode ? 'App' : 'Applt'} style={{ padding: '25px' }}>
        <span id='msg'></span>
      <div>
        <NavBar onSearch={onSearch} />
      </div>
      <div>
        <label className="switch">
          <input type="checkbox" onClick={toggleDarkMode}></input>
          <span className="slider"></span>
        </label>
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
      <hr />
      <footer>
        <h4>© Todos los derechos reservados</h4>
        <h4>Guillermo Betancur - 2023</h4>
      </footer>
    </div>
  )
}

export default App

// original de React

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
