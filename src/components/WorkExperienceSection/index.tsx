import { useState } from 'react';
import Title from '../Title';
import Company from './Company';
import styles from './style.module.scss';

const WorkExperienceSection = () => {
	const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);

	const handleCompanyIndexChange = (index: number) => {
		if (index !== activeCompanyIndex) setActiveCompanyIndex(index);
	};

	return (
		<div className={styles.workExperience}>
			<Title text='Where I’ve Worked' number={2} />
			<div className={styles.workExperience__detail}>
				<Company
					activeCompanyIndex={activeCompanyIndex}
					handleCompanyIndexChange={handleCompanyIndexChange}
				/>
				<div></div>
			</div>
		</div>
	);
};

export default WorkExperienceSection;
