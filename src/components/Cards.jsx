import Card from './Card';
import '../estilos/Cards.module.css'

export default function Cards(props) {
   const { characters } = props;
   return (
      <div>
         {characters.map((c) => {
            return (
               <Card
               id={c.id}
               name={c.name}
               species={c.species}
               gender={c.gender}
               image={c.image}
               onClose={() => props.onClose(c.id)}
               // touch={() => alert("Soon we'll be expanding information about "+c.name)}
            />)
         })
         }
      </div>
   );
}
