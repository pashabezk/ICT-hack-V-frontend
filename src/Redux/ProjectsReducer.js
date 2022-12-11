import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchAllProjects, fetchParticipatedProjects, fetchProjectData} from "../API/ProjectsAPI";

const initialState = {
	allProjects: null,
	participatedProjects: null,
	allProjectsIsLoading: false,
	participatedProjectsIsLoading: false,

	projectId: null,
	projectData: null,
	isLoadingProjectData: false,
	isOpenedModalWithProject: false,

	temp: 0
};

export const tryGetAllProjectsAsync = createAsyncThunk(
	'projects/tryGetAllProjects',
	async () => {
		const response = await fetchAllProjects();
		return response.data.projects;
	}
);

export const tryGetParticipatedProjectsAsync = createAsyncThunk(
	'projects/tryGetParticipatedProjects',
	async () => {
		const response = await fetchParticipatedProjects();
		return response.data;
	}
);

export const tryGetProjectDataAsync = createAsyncThunk(
	'projects/tryGetProjectData',
	async (projectId) => {
		const response = await fetchProjectData(projectId);
		return response.data;
	}
);

export const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {
		toggleIsModalWithProjectOpened: (state, action) => {
			state.isOpenedModalWithProject = !state.isOpenedModalWithProject;
			state.projectId = null;
			state.projectData = null;
		},
		openModalWithProject: (state, action) => {
			state.isOpenedModalWithProject = true;
			state.projectId = action.payload;
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(tryGetAllProjectsAsync.pending, (state) => {
				state.temp += 1;
				state.allProjectsIsLoading = true;
			})
			.addCase(tryGetAllProjectsAsync.fulfilled, (state, action) => {
				state.allProjects = action.payload;
				state.allProjectsIsLoading = false;
			})
			.addCase(tryGetAllProjectsAsync.rejected, (state) => {
				state.allProjectsIsLoading = false;
			})
			.addCase(tryGetParticipatedProjectsAsync.pending, (state) => {
				state.participatedProjectsIsLoading = true;
			})
			.addCase(tryGetParticipatedProjectsAsync.fulfilled, (state, action) => {
				state.participatedProjects = action.payload;
				state.participatedProjectsIsLoading = false;
			})
			.addCase(tryGetParticipatedProjectsAsync.rejected, (state) => {
				state.participatedProjectsIsLoading = false;
			})
			.addCase(tryGetProjectDataAsync.pending, (state) => {
				state.isLoadingProjectData = true;
			})
			.addCase(tryGetProjectDataAsync.fulfilled, (state, action) => {
				state.projectData = action.payload;
				state.isLoadingProjectData = false;
			})
			.addCase(tryGetProjectDataAsync.rejected, (state) => {
				state.isLoadingProjectData = false;
			});
	},
});

// actions
export const {toggleIsModalWithProjectOpened, openModalWithProject} = projectsSlice.actions;

// selectors
export const selectAllProjects = (state) => state.projects.allProjects;
export const selectParticipatedProjects = (state) => state.projects.participatedProjects;
export const selectAllProjectsIsLoading = (state) => state.projects.allProjectsIsLoading;
export const selectParticipatedProjectsIsLoading = (state) => state.projects.participatedProjectsIsLoading;
export const selectIsOpenedModalWithProject = (state) => state.projects.isOpenedModalWithProject;
export const selectProjectId = (state) => state.projects.projectId;
export const selectProjectData = (state) => state.projects.projectData;
export const selectIsLoadingProjectData = (state) => state.projects.isLoadingProjectData;

export const selectTemp = (state) => state.projects.temp;


export default projectsSlice.reducer;