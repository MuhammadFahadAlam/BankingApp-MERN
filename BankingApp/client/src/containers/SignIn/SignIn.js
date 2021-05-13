import React from 'react';

import styles from './SignIn.module.css';
import headerImage from '../../assets/images/headerImage.jpg';
import { SignInForm } from '../../components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function SignIn() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<Link to='/'>
					<button className={styles.logo}>The Bank</button>{' '}
				</Link>
				<div className={styles.content}>
					<SignInForm />
				</div>
			</div>
			<div className={styles.right}>
				<Link to='/signup'>
					<Button>Sign Up</Button>
				</Link>
				<img className={styles.headerImage} src={headerImage} alt='' />
			</div>
		</div>
	);
}

export default SignIn;
