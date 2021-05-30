import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// State when we start the app

const initialState = {
	all: [],
	user: {},
	status: 'idle',
	error: null,
};

// API base URL

const BASE_URL = 'http://localhost:8081/api/';

// Fetch all users including current user

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await axios.get(BASE_URL + 'users/allUsers', {
		headers: {
			'x-auth-token': localStorage.getItem('jwt'),
		},
	});
	return response;
});

// Login user

export const Login = createAsyncThunk('users/Login', async (credentials) => {
	const response = await axios.post(BASE_URL + 'auth/', credentials);

	// get jwt and store in browser
	return response;
});

// SignUp new User

export const SignUp = createAsyncThunk('users/SignUp', async (User) => {
	let response = await axios.post(BASE_URL + 'users/', User);
	return response;
});

// Add transaction of the current User

export const addTransaction = createAsyncThunk(
	'users/addTransaction',
	async (transaction) => {
		const response = await axios.post(
			BASE_URL + 'users/transactions',
			transaction,
			{
				headers: {
					'x-auth-token': localStorage.getItem('jwt'),
				},
			}
		);
		return response;
	}
);

// User Slice

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			localStorage.removeItem('jwt');
			state.users = [];
			state.user = {};
		},
	},
	extraReducers: {
		[fetchUsers.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchUsers.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.all = action.payload.data[0];
			state.current = action.payload.data[1];
		},
		[fetchUsers.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
		[Login.pending]: (state, action) => {
			state.status = 'loading';
		},
		[Login.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			localStorage.setItem('jwt', action.payload.data);
		},
		[Login.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
		[SignUp.pending]: (state, action) => {
			state.status = 'loading';
		},
		[SignUp.fulfilled]: (state, action) => {
			state.status = 'succeeded';
		},
		[SignUp.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
		[addTransaction.pending]: (state, action) => {
			state.status = 'loading';
		},
		[addTransaction.fulfilled]: (state, action) => {
			state.status = 'succeeded';
		},
		[addTransaction.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
	},
});

// exporting synchronous actions

export const { logout } = userSlice.actions;

// exporting reducer

export default userSlice.reducer;

// selections to use in useSelection hook

// All Users

export const selectAllUsers = (state) => state.users.all;

// Current User

export const selectUserById = (state) => state.users.user;
