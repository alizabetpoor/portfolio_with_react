import type { NextPage } from 'next';
import AboutSection from '../components/AboutSection';
import BioSection from '../components/BioSection/BioSection';
import WorkExperienceSection from '../components/WorkExperienceSection';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<BioSection />
			<AboutSection />
			<WorkExperienceSection />
		</div>
	);
};

export default Home;
