import { TitleProps } from '../../interface/components/title';
import styles from './style.module.scss';

const Title = ({ number, text }: TitleProps) => {
	return (
		<div className={styles.title}>
			<span className={styles.title__number}>0{number}.</span>
			<h2 className={styles.title__text}>{text}</h2>
			<span className={styles.title__line}></span>
		</div>
	);
};

export default Title;
