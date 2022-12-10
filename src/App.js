import './App.css';
import React from "react";
import {ConfigProvider, Layout} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import AppFooter from "./Components/Footer/Footer";
import ProjectsPage from "./Components/ProjectsPage/ProjectsPage";
import AppHeader from "./Components/Header/Header";
import TestPage from "./Components/TestPage/TestPage";

const Login = React.lazy(() => import ("./Components/Login/Login"));
const StudentProfilePage = React.lazy(() => import ("./Components/StudentProfilePage/StudentProfilePage"));

const COLOR_MAP = {
	primary: "#221183",
	black: "#000000",
	accent: "#52A874",
	secondary: "#7B45EC"
};


function App() {
	return (
		// styling
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: COLOR_MAP.primary,
					colorInfo: COLOR_MAP.primary,
					colorSuccess: COLOR_MAP.accent,
					colorInfoText: COLOR_MAP.secondary,
					fontFamily: "Golos, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
				},
			}}
		>

			{/*HashRouter only for GitHub pages*/}
			{/*< BrowserRouter basename={process.env.PUBLIC_URL}> // use instead HashRouter in real project*/}
			<HashRouter>
				<Layout className="main-wrapper">
					<AppHeader/>
					<Content>
						<React.Suspense fallback={<div>loading</div>}>
							<Routes>
								{/*<Route path="/" element={<Navigate to="/test"/>}/>*/}
								<Route path="/test" element={<TestPage/>}/>
								<Route path="/" element={<Navigate to="/profile"/>}/>
								<Route path="/profile" element={<StudentProfilePage/>}/>
								<Route path="/projects" element={<ProjectsPage/>}/>
								<Route path="/login" element={<Login/>}/>
								<Route path="*" element={<Navigate to="/"/>}/>
							</Routes>
						</React.Suspense>
					</Content>
					<Footer>
						<div className="center1000px">
							<AppFooter/>
						</div>
					</Footer>
				</Layout>
			</HashRouter>
		</ConfigProvider>

	);
}

// export default withCookieSession(App);
export default App;
