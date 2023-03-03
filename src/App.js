//import logo from './logo.svg';
import './estilos/App.css';
import Card from './components/Card'
import Cards from './components/Cards'
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick, Morty } from './data'
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  return (
    <div className={darkMode ? 'App' : 'Applt'} style={{ padding: '25px' }}>
      <div>
      <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <div>
        <button onClick={toggleDarkMode}>{darkMode ? 'Light mode' : 'Dark mode'}</button>
      </div>
      <div>
        <h2>Leading Characters</h2>
        <Card className={darkMode ? 'App' : 'Applt'}  // revisar por qué no sostiene el valor de darkMode
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => alert('You cannot close to '+Rick.name)}
          onClic={() => alert("Soon, we'll be zooming this information")}
        />
        <Card
          name={Morty.name}
          species={Morty.species}
          gender={Morty.gender}
          image={Morty.image}
          onClose={() => alert('You cannot close to '+Morty.name)}
          onClic={() => alert("Soon, we'll be zooming this information")}
        />
      </div>
      <hr />
      <h2>Secondary Characters</h2>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <hr/>
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
