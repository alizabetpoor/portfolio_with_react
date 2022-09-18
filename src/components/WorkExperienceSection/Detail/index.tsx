import { DetailProps } from '../../../interface/components/workExperienceSection/detail';
import styles from './style.module.scss';

const Detail = ({ role, company, startDate, endDate, items }: DetailProps) => {
	return (
		<div className={styles.detail}>
			<div className={styles.detail__roleAndCompany}>
				<span>{role}</span>
				<span>@</span>
				<a href='#'>{company}</a>
			</div>
			<div className={styles.detail__date}>
				<span>{startDate} </span>
				<span>- {endDate}</span>
			</div>
			<ul className={styles.detail__items}>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default Detail;
