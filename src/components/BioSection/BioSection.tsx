import styles from './style.module.scss';
import type { NextPage } from 'next';
import Button from '../../core/Button';

const BioSection: NextPage = () => {
	return (
		<div className={styles.biosection}>
			<span className={styles.biosection__title}>Hi, my name is</span>
			<h2 className={styles.biosection__name}>Ali Zabetpour.</h2>
			<h2 className={styles.biosection__role}>I am a front-end developer.</h2>
			<p className={styles.biosection__description}>
				I like to develop frontend and work as a frontend developer for company
				and create new things.
			</p>
			<Button width={231} height={56} radius={4}>
				do you want my resume?
			</Button>
		</div>
	);
};

export default BioSection;
