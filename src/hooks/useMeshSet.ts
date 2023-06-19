import { ThreeEvent } from '@react-three/fiber';
import { setMesh } from '../store/colorSlice.ts';
import { useAppDispatch, useAppSelector } from './redux.ts';
import { useCallback } from 'react';

export const useMeshSet = (meshType: 'cube' | 'sphere' | null) => {
	const dispatch = useAppDispatch();
	const mesh = useAppSelector((state) => state.color.mesh);

	const handleMeshSet = useCallback(
		(event: ThreeEvent<MouseEvent> | Event) => {
			event.stopPropagation();
			dispatch(setMesh(meshType));
		},
		[dispatch, meshType]
	);

	return {
		mesh,
		handleMeshSet,
	};
};
