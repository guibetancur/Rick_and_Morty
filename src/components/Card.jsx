import styles from '../estilos/Card.module.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
   return (
      <div className={`${styles.card} ${styles.floating}`}>
         {/* className={`${styles.description} ${styles.yellow}`} */}
         {/* className={styles.card} */}
         <div onClick={props.touch}>
            <div>
               <div className={styles.x}>
               {props.id > 2 ? <> <button onClick={props.onClose}>X</button><hr /> </> : null}
               </div>
               <div className={styles.txt}>
                  <Link to={`/detail/${props.id}`}>
                     <label id={props.id}>Name:</label>
                     <h2 className={props.gender==='Male' ? 'male' : 'female'} style={{ marginTop: '20px' }}>{props.name}</h2>
                     <label>Species:</label>
                     <h2>{props.species}</h2>
                     <label>Gender:</label>
                     <h2>{props.gender}</h2>
                     <img src={props.image} alt={props.name} />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
