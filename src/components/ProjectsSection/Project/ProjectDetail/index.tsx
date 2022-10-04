import { ProjectDetailProps } from '../../../../interface/components/projectSection/project/projectDetail';
import ExpandSvg from '../../../Svg/ExpandSvg';
import GithubSvg from '../../../Svg/GithubSvg';
import styles from './style.module.scss';

const ProjectDetail = ({
	title,
	text,
	technologies,
	flexDirection,
}: ProjectDetailProps) => {
	const textStyleConstructor = () => {
		if (flexDirection === 'row') return { marginLeft: -22 };
		return { marginRight: -22 };
	};

	return (
		<div
			style={{
				alignItems: flexDirection === 'row' ? 'flex-end' : 'flex-start',
			}}
			className={styles.projectDetail}>
			<span className={styles.projectDetail__featured}>Featured Project</span>
			<h3 className={styles.projectDetail__title}>
				<a href='#'>{title}</a>
			</h3>
			<span
				style={{ ...textStyleConstructor() }}
				className={styles.projectDetail__text}>
				{text}
			</span>
			<ul className={styles.projectDetail__technologies}>
				{technologies.map((technology: string, index: number) => (
					<li key={index}>{technology}</li>
				))}
			</ul>
			<div className={styles.projectDetail__links}>
				<a href='#'>
					<GithubSvg />
				</a>
				<a href='#'>
					<ExpandSvg />
				</a>
			</div>
		</div>
	);
};

export default ProjectDetail;
