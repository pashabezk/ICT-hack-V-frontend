import {Card} from "antd";
import styles from "./ProjectCard.module.css";
import React from "react";

const ProjectShortCard = ({title, desc}) => {
	return (
		<Card title={title} bordered={true} className={styles.projectCard}>
			<p>{desc}</p>
		</Card>
	);
}

export default ProjectShortCard