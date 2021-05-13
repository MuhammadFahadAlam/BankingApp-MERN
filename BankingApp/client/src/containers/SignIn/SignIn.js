import React from 'react';

import styles from './SignIn.module.css';
import headerImage from '../../assets/images/headerImage.jpg';
import { SignInForm } from '../../components';

function SignIn() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<button className={styles.logo}>The Bank</button>
				<div className={styles.content}>
					<SignInForm />
				</div>
			</div>
			<div className={styles.right}>
				<button>Sign Up</button>
				<img className={styles.headerImage} src={headerImage} alt='' />
			</div>
		</div>
	);
}

export default SignIn;
