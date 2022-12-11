import axios from "axios";

const participatedProjects = [{
	id: 1,
	title: "Приложение по расчёту нефтегазовой прибыли",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 2,
	title: "Лендинг сайта",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 3,
	title: "Создание блокчейна",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 4,
	title: "Создание блокчейна",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 5,
	title: "Создание блокчейна",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}];

const allProjects = [{
	id: 1,
	title: "Приложение по расчёту нефтегазовой прибыли",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 2,
	title: "Лендинг сайта",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 3,
	title: "Создание блокчейна",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 4,
	title: "Создание блокчейна",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}, {
	id: 5,
	title: "Создание блокчейна",
	description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
}];

const project = {
	id: 16,
	title: "Создание блокчейна",
	owner: "Банк Крипто",
	description: "Основной целью данного проекта является создание программного обеспечения гирокресла с широким спектром доступных опций.",
	precondition: "Gyromove – многофункциональное электроприводное устройство на основе машинного обучения отечественного производства, позволяющее людям с ограниченными возможностями, свободно передвигаться в пространстве без дополнительной помощи, подниматься по ступеням и менять уровень высоты положения для различных целей",
	result: "Программное обеспечение для автономного функционирования устройства обеспечивающее широкий точный контроль и ориентацию в пространстве",
	criterias: "1. Все мероприятия проведены в срок и без технических сбоев.\n2. Все материалы оформлены в корпоративном стиле компании.",
};


const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/",
	withCredentials: true
});

export const fetchAllProjects = () => {
	return axiosInstance.get(`projects/`);
}

export function fetchProjectData({projectId}) {
	return axiosInstance.get(`project/`+projectId+'/');
}

// export function fetchAllProjects() {
// 	return new Promise((resolve) =>
// 		setTimeout(() => {
// 			resolve({data: allProjects})
// 		}, 1000)
// 	);
// }

export function fetchParticipatedProjects() {
	return new Promise((resolve) =>
		setTimeout(() => {
			resolve({data: participatedProjects})
		}, 1000)
	);
}

// export function fetchProjectData({projectId}) {
// 	return new Promise((resolve) =>
// 		setTimeout(() => {
// 			resolve({data: project})
// 		}, 2000)
// 	);
// }