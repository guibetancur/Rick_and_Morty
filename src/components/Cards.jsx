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
               onClose={() => alert('emulamos que se cierra la card')}
               onClic={() => alert("Próximamente estaremos apliando la imagen y la información")}
            />)
         })
         }
      </div>
   );
}
