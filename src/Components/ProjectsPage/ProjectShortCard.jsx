import {Card} from "antd";
import styles from "./ProjectCard.module.css";
import React from "react";
import {useDispatch} from "react-redux";
import {openModalWithProject} from "../../Redux/ProjectsReducer";

const ProjectShortCard = ({id, title, desc}) => {

	const dispatch = useDispatch();

	const onCardClick = () => {
		dispatch(openModalWithProject(id));
	}

	return (
		<Card
			title={title}
			bordered={true}
			onClick={onCardClick}
			className={styles.projectCard}>
			<p>{desc}</p>
		</Card>
	);
}

export default ProjectShortCard