import { MouseEvent } from 'react';
import { setColor } from '../store/colorSlice.ts';
import { useAppDispatch, useAppSelector } from './redux.ts';

export const useMeshColorSet = (meshType: 'cube' | 'sphere') => {
	const dispatch = useAppDispatch();
	const color = useAppSelector((state) => state.color[meshType]);

	const handleMeshColorSet =
		(color: 'red' | 'blue' | 'green') =>
		(event: MouseEvent<HTMLButtonElement>) => {
			event.stopPropagation();
			dispatch(setColor({ meshType, color }));
		};

	return {
		color,
		handleMeshColorSet,
	};
};
