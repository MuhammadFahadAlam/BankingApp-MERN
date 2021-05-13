import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { GoogleButton, FacebookButton } from './../../components';
import styles from './SignUpForm.module.css';

function SignUpForm() {
	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>SignUp your account</h1>
			<Form>
				<Row>
					<Form.Group
						as={Col}
						controlId='formGridFirst'
						className='mb-2'
					>
						<Form.Control
							type='text'
							placeholder='Enter First Name'
						/>
					</Form.Group>

					<Form.Group
						as={Col}
						controlId='formGridLast'
						className='mb-2'
					>
						<Form.Control
							type='text'
							placeholder='Enter Last Name'
						/>
					</Form.Group>
				</Row>

				<Form.Group controlId='formGridEmail' className='mb-2'>
					<Form.Control type='email' placeholder='Email Address' />
				</Form.Group>

				<Form.Group controlId='formGridPassword' className='mb-2'>
					<Form.Control
						type='password'
						placeholder='Create Password'
					/>
				</Form.Group>

				<Form.Group id='formGridCheckbox' className='mb-2'>
					<Form.Check type='checkbox' label='Remember me' />
				</Form.Group>

				<Button
					variant='primary'
					type='submit'
					className={styles.submit}
				>
					Sign Up
				</Button>
			</Form>
			<hr />
			<div>
				<h3 className={styles.other}>SignUp with</h3>
				<div className={styles.otherOptions}>
					<GoogleButton />
					<FacebookButton />
				</div>
			</div>
		</div>
	);
}

export default SignUpForm;
