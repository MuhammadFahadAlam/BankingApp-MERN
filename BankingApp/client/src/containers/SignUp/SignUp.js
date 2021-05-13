import React from 'react';

import styles from './SignUp.module.css';
import headerImage from '../../assets/images/headerImage.jpg';
import { SignUpForm } from '../../components';

function SignUp() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<button className={styles.logo}>The Bank</button>
				<div className={styles.content}>
					<SignUpForm />
				</div>
			</div>
			<div className={styles.right}>
				<button>Sign In</button>
				<img className={styles.headerImage} src={headerImage} alt='' />
			</div>
		</div>
	);
}

export default SignUp;
