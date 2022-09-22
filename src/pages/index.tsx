import type { NextPage } from 'next';
import AboutSection from '../components/AboutSection';
import BioSection from '../components/BioSection/BioSection';
import Email from '../components/Email';
import ProjectsSection from '../components/ProjectsSection';
import Social from '../components/Social';
import WorkExperienceSection from '../components/WorkExperienceSection';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Email />
			<Social />
			<BioSection />
			<AboutSection />
			<WorkExperienceSection />
			<ProjectsSection />
		</div>
	);
};

export default Home;
