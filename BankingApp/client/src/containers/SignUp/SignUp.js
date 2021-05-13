import React from 'react';

import styles from './SignUp.module.css';
import headerImage from '../../assets/images/headerImage.jpg';
import { SignUpForm } from '../../components';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function SignUp() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<Link to='/'>
					<button className={styles.logo}>The Bank</button>{' '}
				</Link>
				<div className={styles.content}>
					<SignUpForm />
				</div>
			</div>
			<div className={styles.right}>
				<Link to='/signin'>
					<Button>Sign In</Button>
				</Link>
				<img className={styles.headerImage} src={headerImage} alt='' />
			</div>
		</div>
	);
}

export default SignUp;
