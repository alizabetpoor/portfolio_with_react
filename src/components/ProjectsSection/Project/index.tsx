import Image from 'next/image';
import { ProjectProps } from '../../../interface/components/projectSection/project';
import ProjectDetail from './ProjectDetail';
import styles from './style.module.scss';

const Project = ({
	flexDirection = 'row',
	projectName,
	imageSource,
	githubLink,
	siteLink,
}: ProjectProps) => {
	return (
		<div style={{ flexDirection }} className={styles.project}>
			<a href={siteLink} className={styles.project__image}>
				<Image
					layout='fill'
					objectFit='cover'
					src={imageSource}
					alt={projectName}
				/>
			</a>
			<ProjectDetail
				text='A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.'
				title='test jadid'
				flexDirection={flexDirection}
				technologies={['test', 'vertigo']}
			/>
		</div>
	);
};

export default Project;
