import { CompanyProps } from '../../../interface/components/workExperienceSection/company';
import styles from './style.module.scss';

const companies = ['Malltina', 'Test', 'Apple'];

const Company = ({
	activeCompanyIndex,
	handleCompanyIndexChange,
}: CompanyProps) => {
	return (
		<ul className={styles.company}>
			{companies.map((company, index) => (
				<li
					onClick={() => handleCompanyIndexChange(index)}
					className={`${
						activeCompanyIndex === index ? styles.company__active : ''
					}`}
					key={index}>
					{company}
				</li>
			))}
		</ul>
	);
};

export default Company;
