import React from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './SignInForm.module.css';
import { FacebookButton, GoogleButton } from '../../components';

function SignInForm() {
	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>SignIn your account</h1>
			<Form>
				<Form.Group controlId='formGridEmail' className='mb-4'>
					<Form.Control type='email' placeholder='Email Address' />
				</Form.Group>

				<Form.Group controlId='formGridPassword' className='mb-4'>
					<Form.Control
						type='password'
						placeholder='Create Password'
					/>
				</Form.Group>

				<Form.Group id='formGridCheckbox' className='mb-4'>
					<Form.Check type='checkbox' label='Remember me' />
				</Form.Group>

				<Button
					variant='primary'
					type='submit'
					className={styles.submit}
				>
					Sign In
				</Button>
			</Form>
			<hr />
			<div>
				<h3 className={styles.other}>SignIn with</h3>
				<div className={styles.otherOptions}>
					<GoogleButton />
					<FacebookButton />
				</div>
			</div>
		</div>
	);
}

export default SignInForm;
