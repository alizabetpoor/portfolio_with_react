import { useState } from 'react';
import Title from '../Title';
import Company from './Company';
import Detail from './Detail';
import { workExperienceData } from '../../static/workExperienceSection/detail/workExperienceData';
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
				<div>
					<Detail
						company={workExperienceData[activeCompanyIndex].company}
						startDate={workExperienceData[activeCompanyIndex].startDate}
						endDate={workExperienceData[activeCompanyIndex].endDate}
						role={workExperienceData[activeCompanyIndex].role}
						items={workExperienceData[activeCompanyIndex].items}
					/>
				</div>
			</div>
		</div>
	);
};

export default WorkExperienceSection;
