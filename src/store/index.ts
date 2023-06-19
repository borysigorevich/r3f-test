import { configureStore } from '@reduxjs/toolkit';
import { colorSlice } from './colorSlice.ts';

export const store = configureStore({
	reducer: {
		[colorSlice.name]: colorSlice.reducer,
	},
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
