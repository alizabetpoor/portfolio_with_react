import { TriangleSignProps } from '../../interface/core/triangleSign';
import styles from './style.module.scss';

const TriangleSign = ({ size }: TriangleSignProps) => {
	const triangleStyleConstructor = () => {
		return {
			borderTop: `${size}px solid transparent`,
			borderBottom: `${size}px solid transparent`,
			borderLeft: `${size}px solid #64ffda`,
		};
	};

	const insideTriangleStyleConstructor = () => {
		return {
			borderTop: `${size - 3}px solid transparent`,
			borderBottom: `${size - 3}px solid transparent`,
			borderLeft: `${size - 3}px solid #0a192f`,
			bottom: `${size - 3}px`,
			right: `${size - 1}px`,
		};
	};

	return (
		<div style={{ ...triangleStyleConstructor() }} className={styles.triangle}>
			<div
				style={{ ...insideTriangleStyleConstructor() }}
				className={styles.triangle__inside}></div>
		</div>
	);
};

export default TriangleSign;
