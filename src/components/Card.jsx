import styles from '../estilos/Card.module.css'

export default function Card(props) {
   return (
      <div className={`${styles.card} ${styles.floating}`}>
         {/* className={`${styles.description} ${styles.yellow}`} */}
          {/* className={styles.card} */}
         <div onClick={props.touch}>
          {console.log(props.id)}
            <div>
               {props.id > 2
                  ?
                  <>
                     <button onClick={props.onClose}>X</button>
                     <hr />
                  </>
                  : <></>}
               <div className={styles.txt}>
                  <label id={props.id}>Name:</label>
                  <h2>{props.name}</h2>
                  <label>Species:</label>
                  <h2>{props.species}</h2>
                  <label>Gender:</label>
                  <h2>{props.gender}</h2>
                  <img src={props.image} alt={props.name} />
               </div>
            </div>
         </div>
      </div>
   );
}
