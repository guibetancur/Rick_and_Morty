import '../estilos/card.css'

export default function Card(props) {
   return (
      <div className="card floating">
     {/* <button onClick={props.onClose}>X</button> */}
         <button onClick={props.onClose}>X{props.x}</button>
         <div onClick={props.onClic}>
            <hr />
            <label>Name:</label>
            <h2>{props.name}</h2>
            <label>Species:</label>
            <h2>{props.species}</h2>
            <label>Gender:</label>
            <h2>{props.gender}</h2>
            <img src={props.image} alt="There aren't image" />
         </div>
      </div>
   );
}
