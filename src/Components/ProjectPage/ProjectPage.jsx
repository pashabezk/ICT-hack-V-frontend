import React from "react";
import styles from "./ProjectPage.module.css"
import {Button, Spin} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoadingProjectData, selectProjectData, selectProjectId, tryGetProjectDataAsync} from "../../Redux/ProjectsReducer";

const CenteredSpin = () => {
	return(
		<div className={styles.centeredSpin}>
			<Spin tip="Подгружаем данные" size="default"/>
		</div>
	);
}

const ProjectPage = () => {

	const projectId = useSelector(selectProjectId);
	const projectData = useSelector(selectProjectData);
	const isLoadingProjectData = useSelector(selectIsLoadingProjectData);
	const dispatch = useDispatch();

	if(isLoadingProjectData) {
		return <CenteredSpin/>
	}

	if (!projectData) {
		dispatch(tryGetProjectDataAsync({projectId}))
		return <CenteredSpin/>
	}

	return (
		<div>
			<div className={styles.nameBlock}>
				<h1>{projectData.title}</h1>
				<p>/</p>
				<h1>{projectData.host_company}</h1>
			</div>
			<p>{projectData.description}</p>
			<h1>Каковы предпосылки проекта?</h1>
			<p>{projectData.precondition}</p>
			<h1>Что представляет собой результат работы?</h1>
			<p>{projectData.result}</p>
			<h1>По каким критериям будут оценивать результат?</h1>
			<p>{projectData.criterias}</p>
			<div className={styles.buttonAlignedEnd}>
				<Button type="primary">Оставить заявку на участие</Button>
			</div>
		</div>
	);
}

export default ProjectPage;