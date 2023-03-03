import Card from './Card';
import '../estilos/cards.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map((c) => {
            return (
               <Card
               name={c.name}
               species={c.species}
               gender={c.gender}
               image={c.image}
               onClose={() => alert('Are you deleting to '+c.name)}
               touch={() => alert("Próximamente estaremos apliando la imagen y la información")}
            />)
         })
         }
      </div>
   );
}
