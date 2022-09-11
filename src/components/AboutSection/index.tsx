import Image from 'next/image';
import styles from './style.module.scss';

const AboutSection = () => {
	return (
		<div className={styles.aboutSection}>
			<div>
				<div className={styles.aboutSection__title}>
					<span className={styles.aboutSection__title__number}>01.</span>
					<h2 className={styles.aboutSection__title__text}>About Me</h2>
					<span className={styles.aboutSection__title__line}></span>
				</div>
				<div className={styles.aboutSection__detail}>
					<div className={styles.aboutSection__detail__text}>
						<p>
							Hello! I'm a front-end developer with more than one year of
							experience working with the javascript and react library. I'm also
							studying for a bachelor's degree in computer engineering.
							<br /> Here are a few technologies I’ve been working with
							recently:
						</p>
						<ul>
							<li>JavaScript</li>
							<li>React</li>
							<li>TypeScript</li>
							<li>Next.js</li>
						</ul>
					</div>

					<div className={styles.aboutSection__detail__image}>
						<Image
							src='/asset/images/profile.jpg'
							layout='fill'
							alt='alizabetpour photo'
							objectFit='cover'
						/>
						<div
							className={styles.aboutSection__detail__image__background}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
