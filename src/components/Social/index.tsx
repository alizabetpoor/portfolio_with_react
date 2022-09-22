import GithubSvg from '../Svg/GithubSvg';
import { socialLinksAndSvg } from '../../static/social/socialLinksAndSvg';
import styles from './style.module.scss';
import LinkedInSvg from '../Svg/LinkedInSvg';

const Social = () => {
	return (
		<div className={styles.social}>
			<div className={styles.social__links}>
				{socialLinksAndSvg.map((social) => (
					<a
						target='_blank'
						rel='noreferrer'
						href={social.link}
						key={social.id}>
						<social.svg transform={true} />
					</a>
				))}
			</div>
			<div className={styles.social__line}></div>
		</div>
	);
};

export default Social;
