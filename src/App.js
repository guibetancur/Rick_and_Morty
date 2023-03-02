//import logo from './logo.svg';
import './estilos/App.css';
import Card from './components/Card'
import Cards from './components/Cards'
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick, Morty } from './data'

function App() {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Card
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
      <div>
        <Cards
          characters={characters}
        />
      </div>
      <div>
      <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
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
