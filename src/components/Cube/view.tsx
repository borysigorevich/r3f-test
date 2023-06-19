import { useAppSelector } from '../../hooks/redux.ts';
import { useMeshSet } from '../../hooks/useMeshSet.ts';

export const Cube = () => {
	const { handleMeshSet, mesh } = useMeshSet('cube');
	const color = useAppSelector((state) => state.color.cube);

	return (
		<>
			<mesh onPointerDown={handleMeshSet} position={[-3, 0, 0]}>
				<boxGeometry args={[1, 1, 1]} />
				<meshBasicMaterial
					color={color}
					transparent={true}
					opacity={mesh === 'cube' ? 0.5 : 1}
				/>
			</mesh>
		</>
	);
};
