import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./AuthReducer"
import projectsReducer from "./ProjectsReducer"

const store = configureStore({
	reducer: combineReducers({
		auth: authReducer,
		projects: projectsReducer,
		// alfaBank: alfaBankReducer
	})
});

export default store;