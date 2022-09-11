import React from 'react';
import { ButtonProps } from '../../interface/core/button';
import styles from './style.module.scss';

const Button = ({
	onClick,
	children,
	className,
	width,
	height,
	fontSize,
	radius,
}: ButtonProps) => {
	return (
		<button
			style={{
				width: width,
				height: height,
				fontSize: fontSize,
				borderRadius: radius,
			}}
			className={`${styles.button} ${className}`}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
