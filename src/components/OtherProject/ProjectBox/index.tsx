import { ProjectBoxProps } from '../../../interface/components/otherProject/projectBox';
import ExpandSvg from '../../Svg/ExpandSvg';
import FolderSvg from '../../Svg/FolderSvg';
import GithubSvg from '../../Svg/GithubSvg';
import styles from './style.module.scss';

const ProjectBox = ({
	projectLink,
	projectGithubLink,
	title,
	description,
	stackAndSkills,
}: ProjectBoxProps) => {
	return (
		<div className={styles.projectBox}>
			<div className={styles.projectBox__topSection}>
				<FolderSvg />
				<div>
					{projectGithubLink ? (
						<a href={projectGithubLink} target='_blank' rel='noreferrer'>
							<GithubSvg />
						</a>
					) : null}
					<a href={projectLink} target='_blank' rel='noreferrer'>
						<ExpandSvg />
					</a>
				</div>
			</div>
			<h3 className={styles.projectBox__title}>{title}</h3>
			<p className={styles.projectBox__description}>{description}</p>
			<ul className={styles.projectBox__stackAndSkills}>
				{stackAndSkills.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default ProjectBox;
