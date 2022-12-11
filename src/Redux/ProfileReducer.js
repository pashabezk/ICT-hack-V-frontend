import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchProjectData, fetchStudentData} from "../API/ProjectsAPI";

const initialState = {
	student: null,
	isLoading: false
};

export const tryGetStudentDataAsync = createAsyncThunk(
	'profile/tryStudentData',
	async (studentId) => {
		const response = await fetchStudentData(studentId);
		return response.data;
	}
);

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		// toggleIsModalWithProjectOpened: (state, action) => {
		// 	state.isOpenedModalWithProject = !state.isOpenedModalWithProject;
		// 	state.projectId = null;
		// 	state.projectData = null;
		// },
		// openModalWithProject: (state, action) => {
		// 	state.isOpenedModalWithProject = true;
		// 	state.projectId = action.payload;
		// }
	},
	extraReducers: (builder) => {
		builder
			.addCase(tryGetStudentDataAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(tryGetStudentDataAsync.fulfilled, (state, action) => {
				state.student = action.payload;
				state.isLoading = false;
			})
			.addCase(tryGetStudentDataAsync.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

// actions
// export const {toggleIsModalWithProjectOpened, openModalWithProject} = projectsSlice.actions;

// selectors
export const selectStudent = (state) => state.profile.student;
export const selectProfileIsLoading = (state) => state.profile.isLoading;

export default profileSlice.reducer;