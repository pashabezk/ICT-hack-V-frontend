import React from "react";
import styles from "./Footer.module.css"

const AppFooter = () => {
	return (
		<div className={styles.mainFooter}>
			<p>Created by <a href="https://pashabezk.github.io/MainPage" target="_blank" rel="noreferrer">pashabezk</a> & <a href="https://github.com/madpenguinw" target="_blank" rel="noreferrer">Михаил</a></p>
		</div>
	);
}

export default AppFooter;