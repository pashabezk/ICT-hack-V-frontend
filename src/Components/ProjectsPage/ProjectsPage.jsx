import React from "react";
import PageWithDefaultMenuSidebar from "../PageWithSideMenu/PageWithStandartMenu";
import withAuthRedirect from "../HOC/withAuthRedirect";
import ProjectShortCard from "./ProjectShortCard";
import styles from "../StudentProfilePage/StudentProfilePage.module.css";
import {useDispatch, useSelector} from "react-redux";
import {selectAllProjects, selectAllProjectsIsLoading, selectIsOpenedModalWithProject, selectParticipatedProjects, selectParticipatedProjectsIsLoading, selectTemp, toggleIsModalWithProjectOpened, tryGetAllProjectsAsync, tryGetParticipatedProjectsAsync} from "../../Redux/ProjectsReducer";
import {Modal, Spin} from "antd";
import ProjectPage from "../ProjectPage/ProjectPage";


const ProjectsPage = () => {
	const participatedProjects = useSelector(selectParticipatedProjects);
	const participatedProjectsIsLoading = useSelector(selectParticipatedProjectsIsLoading);
	const allProjects = useSelector(selectAllProjects);
	const allProjectsIsLoading = useSelector(selectAllProjectsIsLoading);
	const isModalOpen = useSelector(selectIsOpenedModalWithProject);
	const dispatch = useDispatch();

	if (!participatedProjectsIsLoading)
		if (participatedProjects === null) {
			dispatch(tryGetParticipatedProjectsAsync());
		}


	const temp = useSelector(selectTemp);
	if (temp < 3)
		if (!allProjectsIsLoading)
			if (allProjects === null) {
				dispatch(tryGetAllProjectsAsync());
			}

	const projectsToCards = (projectArr) => {
		if (projectArr)
			return projectArr.map(pr => {
				const desc = (pr.description.length < 100) ? pr.description : pr.description.slice(0, 100) + "…";
				return <ProjectShortCard key={pr.id} id={pr.id} title={pr.title} desc={desc}/>
			});
		else return <></>
	}

	const participatedProjectsCards = projectsToCards(participatedProjects);
	const allProjectsCards = projectsToCards(allProjects);

	return (
		<PageWithDefaultMenuSidebar>
			<h1>Мои проекты</h1>
			{
				participatedProjectsIsLoading
					? <Spin tip="Подгружаем данные" size="default"/>
					: participatedProjects && participatedProjects.length !== 0
						? <div className={styles.projectBlock}>{participatedProjectsCards}</div>
						: <p>Вы ещё не выбрали проекты для участия</p>
			}

			<h1>Найти проект</h1>
			{
				allProjectsIsLoading
					? <Spin tip="Подгружаем данные" size="default"/>
					: allProjects && allProjects.length !== 0
						? <div className={styles.projectBlock}>{allProjectsCards}</div>
						: <p>Проекты не найдены</p>
			}


			<Modal
				open={isModalOpen}
				footer={[]}
				width={1000}
				onCancel={() => dispatch(toggleIsModalWithProjectOpened())}>
				<ProjectPage/>
			</Modal>
		</PageWithDefaultMenuSidebar>
	);
}

export default withAuthRedirect(ProjectsPage);