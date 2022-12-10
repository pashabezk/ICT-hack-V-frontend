import React from "react";
import styles from "./ProjectPage.module.css"
import {Button} from "antd";

const ProjectPage = () => {

	const project = {
		id: 16,
		title: "Создание блокчейна",
		owner: "Банк Крипто",
		description: "Основной целью данного проекта является создание программного обеспечения гирокресла с широким спектром доступных опций.",
		precondition: "Gyromove – многофункциональное электроприводное устройство на основе машинного обучения отечественного производства, позволяющее людям с ограниченными возможностями, свободно передвигаться в пространстве без дополнительной помощи, подниматься по ступеням и менять уровень высоты положения для различных целей",
		result: "Программное обеспечение для автономного функционирования устройства обеспечивающее широкий точный контроль и ориентацию в пространстве",
		criterias: "1. Все мероприятия проведены в срок и без технических сбоев.\n2. Все материалы оформлены в корпоративном стиле компании.",
	};

	return (
		<div>
			<div className={styles.nameBlock}>
				<h1>{project.title}</h1>
				<p>/</p>
				<h1>{project.owner}</h1>
			</div>
			<p>{project.description}</p>
			<h1>Каковы предпосылки проекта?</h1>
			<p>{project.precondition}</p>
			<h1>Что представляет собой результат работы?</h1>
			<p>{project.result}</p>
			<h1>По каким критериям будут оценивать результат?</h1>
			<p>{project.criterias}</p>
			<div className={styles.buttonAlignedEnd}>
				<Button type="primary">Оставить заявку на участие</Button>
			</div>
		</div>
	);
}

export default ProjectPage;