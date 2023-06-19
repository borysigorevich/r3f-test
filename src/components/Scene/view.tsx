import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMeshSet } from '../../hooks/useMeshSet.ts';
import { Experience } from '../Experience';

export const Scene = () => {
	const { handleMeshSet } = useMeshSet(null);

	return (
		<>
			<Canvas
				onPointerMissed={handleMeshSet}
				camera={{
					fov: 45,
					position: [0, 3, 10],
				}}
			>
				<Experience />
				<OrbitControls />
			</Canvas>
		</>
	);
};
