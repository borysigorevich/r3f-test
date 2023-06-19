import { useAppSelector } from '../../hooks/redux.ts';
import { useMeshColorSet } from '../../hooks/useMeshColorSet.ts';
import { buttonsConfig } from './config.ts';

export const ColorButtons = () => {
	const mesh = useAppSelector((state) => state.color.mesh);
	const { handleMeshColorSet: handleCubeColorSet, color: cubeColor } =
		useMeshColorSet('cube');
	const { handleMeshColorSet: handleSphereColorSet, color: sphereColor } =
		useMeshColorSet('sphere');

	return (
		<>
			{mesh === 'cube' && (
				<div className="absolute top-10 right-10 flex flex-col gap-5">
					{buttonsConfig.map(
						(button) =>
							button.color !== cubeColor && (
								<button
									onClick={handleCubeColorSet(button.color)}
									className={`py-4 px-10 rounded-lg ${button.bg} text-white`}
								>
									{button.label}
								</button>
							)
					)}
				</div>
			)}

			{mesh === 'sphere' && (
				<div className="absolute top-10 right-10 flex flex-col gap-5">
					{buttonsConfig.map(
						(button) =>
							button.color !== sphereColor && (
								<button
									onClick={handleSphereColorSet(button.color)}
									className={`py-4 px-10 rounded-lg ${button.bg} text-white`}
								>
									{button.label}
								</button>
							)
					)}
				</div>
			)}
		</>
	);
};
