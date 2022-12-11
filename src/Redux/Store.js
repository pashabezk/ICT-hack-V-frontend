import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./AuthReducer"
import projectsReducer from "./ProjectsReducer"
import profileReducer from "./ProfileReducer"

const store = configureStore({
	reducer: combineReducers({
		auth: authReducer,
		projects: projectsReducer,
		profile: profileReducer,
		// alfaBank: alfaBankReducer
	})
});

export default store;