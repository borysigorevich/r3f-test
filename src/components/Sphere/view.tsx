import { useAppSelector } from '../../hooks/redux.ts';
import { useMeshSet } from '../../hooks/useMeshSet.ts';

export const Sphere = () => {
	const { handleMeshSet, mesh } = useMeshSet('sphere');
	const color = useAppSelector((state) => state.color.sphere);

	return (
		<>
			<mesh onPointerDown={handleMeshSet} position={[3, 0, 0]}>
				<sphereGeometry args={[1, 32, 32]} />
				<meshBasicMaterial
					transparent={true}
					color={color}
					opacity={mesh === 'sphere' ? 0.5 : 1}
				/>
			</mesh>
		</>
	);
};
