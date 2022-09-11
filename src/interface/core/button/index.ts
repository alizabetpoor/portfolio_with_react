import { ReactNode } from 'react';

export interface ButtonProps {
	onClick?: () => void;
	children: ReactNode;
	className?: string;
	width?: string | number;
	height?: string | number;
	fontSize?: string | number;
	radius?: string | number;
}
