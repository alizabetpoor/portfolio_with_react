import { CompanyProps } from '../../../interface/components/workExperienceSection/company';
import { workExperienceData } from '../../../static/workExperienceSection/detail/workExperienceData';
import styles from './style.module.scss';

const Company = ({
	activeCompanyIndex,
	handleCompanyIndexChange,
}: CompanyProps) => {
	return (
		<ul className={styles.company}>
			{workExperienceData.map((workData, index) => (
				<li
					onClick={() => handleCompanyIndexChange(index)}
					className={`${
						activeCompanyIndex === index ? styles.company__active : ''
					}`}
					key={index}>
					{workData.company}
				</li>
			))}
		</ul>
	);
};

export default Company;
