import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ColorType = 'red' | 'blue' | 'green';
type MeshType = 'cube' | 'sphere';

type ColorSliceStateType = {
	mesh: null | MeshType;
	cube: ColorType;
	sphere: ColorType;
};

const initialState: ColorSliceStateType = {
	mesh: null,
	cube: 'red',
	sphere: 'red',
};

export const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		setMesh: (state, action) => {
			state.mesh = action.payload;
		},
		setColor: (
			state,
			action: PayloadAction<{ meshType: MeshType; color: ColorType }>
		) => {
			const { meshType, color } = action.payload;
			state[meshType] = color;
		},
	},
});

export const { setMesh, setColor } = colorSlice.actions;
