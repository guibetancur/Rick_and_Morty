import '../estilos/searchBar.module.css'

export default function SearchBar(props) {
   return (
      <div className="head">
         <div id='divNav'>
            <nav>
               <a href="http://">Historia</a>
               <a href="http://">Capítulos</a>
               <a href="http://">Autores</a>
               <a href="http://">Acerca de...</a>
            </nav>
         </div>
         <div id='divSearch'>
            <input type='search' />
            <button id='find' onClick={() => props.onSearch('Id no encontrado')}>Search</button>
         </div>
      </div>
   );
}
