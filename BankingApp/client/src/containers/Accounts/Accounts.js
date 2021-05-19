import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProfileCard } from '../../components';
import styles from './Accounts.module.css';

function Accounts() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.info}>
					<ProfileCard />
				</div>
				<div className={styles.balance}>
					<div className={styles.balanceAbout}>
						<p className={styles.content}>
							Balance <br />
							<span className={styles.amount}>$202</span>
						</p>
					</div>
				</div>
				<div className={styles.navigate}>
					<Link to='/transactions'>
						<button>Transaction</button>
					</Link>
					<Link to='/payments'>
						<button>Payments</button>
					</Link>
					<Link to='/accounts'>
						<button>Account</button>
					</Link>
					<button>Statistics</button>
				</div>
				<Link to='/'>
					<button className={styles.logo}>The Bank</button>{' '}
				</Link>
			</div>
			<div className={styles.right}>
				<div className={styles.heading}>
					<h1>Profile</h1>
				</div>
				<img className={styles.profile} src='' alt='' />
				<h5>Muhammad Fahad Alam</h5>
				<p>Headline</p>
				<Form className={styles.form}>
					<Form.Group controlId='formGridFirst' className='mb-3'>
						<Form.Control type='text' placeholder='Your Name' />
					</Form.Group>

					<Form.Group controlId='formGridEmail' className='mb-3'>
						<Form.Control
							type='email'
							placeholder='Email Address'
						/>
					</Form.Group>

					<Form.Group controlId='formGridPassword' className='mb-3'>
						<Form.Control type='text' placeholder='Your headline' />
					</Form.Group>

					<Button
						variant='primary'
						type='submit'
						className={styles.submit}
					>
						Sign Up
					</Button>
				</Form>
			</div>
		</div>
	);
}

export default Accounts;
