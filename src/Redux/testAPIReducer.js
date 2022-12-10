import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {testStatus} from "../API/TestAPI";

const initialState = {
	response: null,
	isLoading: false
};

export const tryGetHelloAsync = createAsyncThunk(
	'test/tryGetHelloAsync',
	async () => {
		const response = await testStatus();
		console.log("response");
		return response;
	}
);

export const authSlice = createSlice({
	name: "test",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(tryGetHelloAsync.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(tryGetHelloAsync.fulfilled, (state, action) => {
				state.response = action.payload;
				state.isLoading = false;
			})
			.addCase(tryGetHelloAsync.rejected, (state) => {
				state.isLoading = false;
				state.error = "Что-то пошло не так";
			});
	},
});

// actions
// export const {setAuthError} = authSlice.actions;

// selectors
export const selectRespData = (state) => state.auth.response;
export const selectIsLoading = (state) => state.auth.isLoading;
// export const selectUserId = (state) => state.auth.userId;
// export const selectIsAuthing = (state) => state.auth.isAuthing;
// export const selectAuthError = (state) => state.auth.error;

export default authSlice.reducer;