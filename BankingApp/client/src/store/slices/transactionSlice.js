import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	items: [],
	status: 'idle',
	error: null,
};

export const addNewTransaction = createAsyncThunk(
	'transactions/addNewTransaction',
	// The payload creator receives the partial `{title, content, user}` object
	async (initialTransaction) => {
		// We send the initial data to the fake API server
		const response = await client.post('/fakeApi/transaction', {
			transaction: initialTransaction,
		});
		// The response includes the complete post object, including unique ID
		return response.transaction;
	}
);

export const fetchTransactions = createAsyncThunk(
	'transactions/fetchTransactions',
	async () => {
		const response = await client.get('/fakeApi/transactions');
		return response.transactions;
	}
);

export const transactionSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		add: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.value += 1;
		},
	},
	extraReducers: {
		[fetchTransactions.pending]: (state, action) => {
			state.status = 'loading';
		},
		[fetchTransactions.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			// Add any fetched posts to the array
			state.items = state.items.concat(action.payload);
		},
		[fetchTransactions.rejected]: (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		},
	},
});

export const { add } = transactionSlice.actions;

export const selectAllTransactions = (state) => state.transactions.items;

export const selectTransactionById = (state, transactionId) =>
	state.transactions.items.find(
		(transaction) => transaction.id === transactionId
	);

export default transactionSlice.reducer;
