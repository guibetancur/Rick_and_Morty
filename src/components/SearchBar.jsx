import '../estilos/searchBar.modules.css'

export default function SearchBar(props) {
   return (
      <div className="head">
         <div id='divNav'>
            <nav>
               <h1>Dentro del nav</h1>
            </nav>
         </div>
         <div id='divSearch'>
            <input type='search' />
            <button onClick={() => props.onSearch('Id no encontrado')}>Add</button>
         </div>
      </div>
   );
}
