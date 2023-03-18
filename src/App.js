// import logo from './logo.svg';
import './estilos/App.css';
import Cards from './components/Cards'
import Login from './components/Login'
import About from './components/About'
import Detail from './components/Detail'
import NavBar from './components/NavBar' // Llamará a SearchBar
// import characters, { Rick, Morty } from './data'
//import characters from './data'
import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
const location = useLocation
var msg

function alerta(message) {
  msg = document.getElementById('msg')
  msg.innerText = message
  setTimeout(() => msg.innerText = '', 5000);
}

function App() {
  const location = useLocation()
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  const [characters, setCharacters] = useState([])

  // manejo de clave quemada solo para validar
  const [access, setAccess] = useState(false)
  const usrName = 'guibetancur@hotmail.com'
  const pwd = 'Pezespada206*'
  const navigate = useNavigate()

  function login(userData) {
    if (userData.password === pwd && userData.username === usrName) {
      setAccess(true)
      navigate('/home')
    }
  }
  function logout() {
    setAccess(false)
    navigate('/')
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])

  function onSearch(id) {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          // console.log(characters)
          let exists = characters.find((e) => e.id === data.id)
          if (exists) alerta('Character with id#' + id + ' (' + data.name + ') already exists')
          else {
            setCharacters((oldChars) => [data, ...oldChars])
            alerta('Character ' + data.name + ' added')
          }
        } else {
          alerta(`There are only 826 characters`)
        }
        let add = document.getElementById('add')
        add.select()
        // characters.e.preventDefault()
        // add.value = ''
        // add.focus()
      })
  }

  function random() {
    alert('function called')
    // onSearch(parseInt(Math.random()*826))
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
    <div className={darkMode ? 'App' : 'Applt'} style={{ marginTop: '20px' }}>
      <span id='msg'></span>
      <div>
        {/* {location.pathname ==="/" ? null : <NavBar onSearch={onSearch} />} */}
        {window.location.pathname !== '/' && <NavBar onSearch={onSearch} logout={logout} random={random} />}

      </div>
      <div>
        <label className="switch">
          <input type="checkbox" onClick={toggleDarkMode}></input>
          <span className="slider"></span>
        </label>
      </div>
      <div className='cards'>
        <Routes>
          <Route path='/' element={<Login login={login} />}></Route>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/detail/:detailId' element={<Detail />}></Route>
          {/* <Route path='/logout' element={<Login />}></Route> */}
        </Routes>
      </div>
      <hr />
      <footer>
        <h4>© All Rights Reserved</h4>
        <h4>Guillermo Betancur - {new Date().getFullYear()}</h4>
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
