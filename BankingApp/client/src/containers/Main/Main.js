import React from 'react';
import styles from './Main.module.css';
import headerImage from '../../assets/images/headerImage.jpg';
import { Button } from 'react-bootstrap';

function Main() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<button className={styles.logo}>The Bank</button>
				<div className={styles.content}>
					<h1 className='display-4'>
						Manage your Personal and Business finance easily{' '}
					</h1>
					<p>
						Our online bank enables anyone from businesses to
						personal to make transactions securily and comfortably.
					</p>
					<Button>Get Started</Button>
				</div>
			</div>
			<div className={styles.right}>
				<button>Sign Up</button>
				<img className={styles.headerImage} src={headerImage} alt='' />
			</div>
		</div>
	);
}

export default Main;
