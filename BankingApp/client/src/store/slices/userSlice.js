import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	status: 'idle',
	error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await axios.get();
	return response.users;
});

export const addNewUser = createAsyncThunk(
	'users/addNewUser',
	// The payload creator receives the partial `{title, content, user}` object
	async (initialUser) => {
		// We send the initial data to the fake API server
		const response = await axios.post('/fakeApi/transaction', {
			user: initialUser,
		});
		// The response includes the complete post object, including unique ID
		return response.user;
	}
);

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		add: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
		remove: (state) => {
			state.value -= 1;
		},
	},
	extraReducers: {
		[fetchUsers.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			// Add any fetched posts to the array
			state.items = state.items.concat(action.payload);
		},
		[fetchUsers.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
	},
});

export const { add, remove } = userSlice.actions;

export default userSlice.reducer;

export const selectAllUsers = (state) => state.users.items;

export const selectUserById = (state, userId) =>
	state.users.items.find((user) => user.id === userId);
