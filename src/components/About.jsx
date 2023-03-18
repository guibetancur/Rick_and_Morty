import React from "react";
import styles from '../estilos/About.module.css'

export default function About() {
	return (
		<div className={styles.container}>
			<p className={styles.p}>This project is the first of many others that I will carry out with the knowledge and tools acquired in the Full Stack course during the year 2023 in the Partial Time modality of the group 11B of .</p>
			<p className={styles.p}>'I AM HENRY' (LOL).</p>
			<h2 className={styles.h2}>My Team</h2>
			<ul className={styles.ul}>
				<li className={styles.li}>"Mister Henry" - CEO</li>
				<li className={styles.li}>Guillermo Betancur - GMO</li>
				<li className={styles.li}>Tita, Blacky, Manchis and Leeloo - MEW</li>
				<li className={styles.li}>(My kittens who corrected my code every time they passed over my keyboard)</li>
			</ul>
			<h2 className={styles.h2}>Cronología</h2>
			<p className={styles.p}>I started in January 2023 studying the so-called M1 where I learned the basics of JavaScript and then I am here studying React.
				Soon I'll be improving this app with Redux.
				I can't wait for that moment....</p>
		</div>)
}
