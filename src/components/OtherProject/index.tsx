import React, { useState } from 'react';
import Button from '../../core/Button';
import ProjectBox from './ProjectBox';
import otherProjectsData from '../../static/otherProject/otherProjectsData';
import styles from './style.module.scss';

const OtherProject = () => {
	const [countShowedProduct, setCountShowedProduct] = useState<number>(6);

	const increaseCountShowedProduct = (): void => {
		setCountShowedProduct((prev) => prev + 6);
	};

	return (
		<div className={styles.otherProject}>
			<h2 className={styles.otherProject__title}>Other Noteworthy Projects</h2>
			<div className={styles.otherProject__projectBoxes}>
				{otherProjectsData.slice(0, countShowedProduct).map((data, index) => (
					<ProjectBox
						key={index}
						title={data.title}
						description={data.description}
						stackAndSkills={data.stackAndSkills}
						projectLink={data.projectLink}
						projectGithubLink={data.projectGithubLink}
					/>
				))}
			</div>
			{countShowedProduct < otherProjectsData.length ? (
				<Button
					className={styles.otherProject__button}
					width={130}
					height={55}
					onClick={() => increaseCountShowedProduct()}
					radius={4}>
					Show More
				</Button>
			) : null}
		</div>
	);
};

export default OtherProject;
