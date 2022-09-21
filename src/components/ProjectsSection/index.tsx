import Title from '../Title';
import Project from './Project';
import styles from './style.module.scss';

const ProjectsSection = () => {
	return (
		<div className={styles.projectSection}>
			<Title number={3} text={'Some Things I’ve Built'} />
			<Project
				flexDirection='row'
				githubLink='#'
				imageSource='/asset/images/malltina.jpg'
				projectName='testha'
				siteLink='#'
			/>
			<Project
				flexDirection='row-reverse'
				githubLink='#'
				imageSource='/asset/images/malltina.jpg'
				projectName='testha'
				siteLink='#'
			/>
		</div>
	);
};

export default ProjectsSection;
