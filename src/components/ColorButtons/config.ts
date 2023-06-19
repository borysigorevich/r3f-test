import { ColorType } from '../../store/colorSlice.ts';

type ButtonConfigType = { color: ColorType; label: string; bg: string }[];

export const buttonsConfig: ButtonConfigType = [
	{
		color: 'red',
		label: 'сменить цвет на красный',
		bg: 'bg-red-400',
	},
	{
		color: 'blue',
		label: 'сменить цвет на синий',
		bg: 'bg-blue-400',
	},
	{
		color: 'green',
		label: 'сменить цвет на зеленый',
		bg: 'bg-green-400',
	},
];
