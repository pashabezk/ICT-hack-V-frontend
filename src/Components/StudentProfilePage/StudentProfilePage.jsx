import React from "react";
import PageWithDefaultMenuSidebar from "../PageWithSideMenu/PageWithStandartMenu";
import withAuthRedirect from "../HOC/withAuthRedirect";
import {Avatar, Button, Spin} from "antd";
import {EditOutlined, UserOutlined} from "@ant-design/icons";
import styles from "./StudentProfilePage.module.css";
import ProjectShortCard from "../ProjectsPage/ProjectShortCard";
import {useDispatch, useSelector} from "react-redux";
import {selectProfileIsLoading, selectStudent, tryGetStudentDataAsync} from "../../Redux/ProfileReducer";

const AvaAndName = ({student}) => {

	return (
		<div className={styles.avaAndNameContainer}>
			<Avatar
				size={150}
				icon={<UserOutlined/>}
			/>
			<div className={styles.nameBlock}>
				<h1>{student.last_name}</h1>
				<h1>{student.first_name}</h1>
				<h1>{student.patronymic}</h1>
			</div>
			<Button
				className={styles.editButton}
				type="text"
				icon={<EditOutlined/>}
			>редактировать</Button>
		</div>
	);
}

const InfoListElem = ({header, desc}) => {
	return <p><b>{header}:</b> {desc}</p>
}


const StudentProfilePage = () => {

	// const student = {
	// 	name: "Василий",
	// 	surname: "Некоглюшко",
	// 	patronymic: "Романов",
	// 	birtDate: "14.02.2002",
	// 	phone: "+7 (906) 890-76-37",
	// 	email: "username@mail.ru",
	// 	education: "Бакалавриат, Университет ИТМО, Программирование в инфокоммуникационных системах, 2020-2025",
	// 	projects: [{
	// 		id: 2,
	// 		title: "Приложение по расчёту нефтегазовой прибыли",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	// 	}, {
	// 		id: 43,
	// 		title: "Лендинг сайта",
	// 		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
	// 	}]
	// };

	const student = useSelector(selectStudent);
	const isLoading = useSelector(selectProfileIsLoading);

	const dispatch = useDispatch();

	if (!student || !isLoading) {
		dispatch(tryGetStudentDataAsync(2));
		return <Spin tip="Подгружаем данные"/>
	}

	const projects = student.project.map(pr => {
		const desc = (pr.description.length < 100) ? pr.description : pr.description.slice(0, 100) + "…";
		return <ProjectShortCard key={pr.id} id={pr.id} title={pr.title} desc={desc}/>
	});

	return (
		<PageWithDefaultMenuSidebar>
			<AvaAndName student={student}/>
			<InfoListElem header="Дата рождения" desc={student.birth_date}/>
			<InfoListElem header="Телефон" desc={student.phone}/>
			<InfoListElem header="Почта" desc={student.email}/>
			<h1>Образование</h1>
			<p>{student.education}</p>
			<h1>Проекты</h1>
			<div className={styles.projectBlock}>{projects}</div>
		</PageWithDefaultMenuSidebar>
	);
}

export default withAuthRedirect(StudentProfilePage);