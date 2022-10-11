import Button from '../../core/Button';
import styles from './style.module.scss';

const ContactSection = () => {
	const makeContact = () => {
		window.open('mailto:ali_0_zabetpoor@ymail.com', '_self');
	};

	return (
		<div className={styles.contactSection}>
			<h2 className={styles.contactSection__title}>
				04.&nbsp;&nbsp;What’s Next?
			</h2>
			<h2 className={styles.contactSection__answer}>Get In Touch</h2>
			<p className={styles.contactSection__description}>
				I’m currently looking for new opportunities, my inbox is always open.
				Whether you have a question or just want to say hi, I’ll try my best to
				get back to you!
			</p>
			<Button
				className={styles.contactSection__button}
				radius={4}
				width={135}
				height={56}
				onClick={makeContact}>
				Say Hello
			</Button>
		</div>
	);
};

export default ContactSection;
