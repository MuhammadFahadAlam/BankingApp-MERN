import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import transactionReducer from './slices/transactionSlice';

export default configureStore({
	reducer: {
		users: userReducer,
		transactions: transactionReducer,
	},
});
