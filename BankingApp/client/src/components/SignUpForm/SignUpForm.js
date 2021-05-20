import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { GoogleButton, FacebookButton } from './../../components';
import styles from './SignUpForm.module.css';

function SignUpForm() {
	const [name, setname] = useState('');
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');

	const submit = () => {
		console.log('Name: ', name);
		console.log('Email: ', email);
		console.log('Password: ', password);
	};

	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>SignUp your account</h1>
			<Form>
				<Form.Group controlId='formGridLast' className='mb-2'>
					<Form.Control
						name='name'
						type='text'
						placeholder='Enter Name'
						value={name}
						onChange={(e) => {
							setname(e.currentTarget.value);
						}}
					/>
				</Form.Group>

				<Form.Group controlId='formGridEmail' className='mb-2'>
					<Form.Control
						name='email'
						type='email'
						value={email}
						placeholder='Email Address'
						onChange={(e) => {
							setemail(e.currentTarget.value);
						}}
					/>
				</Form.Group>

				<Form.Group controlId='formGridPassword' className='mb-2'>
					<Form.Control
						name='password'
						type='password'
						placeholder='Create Password'
						value={password}
						onChange={(e) => {
							setpassword(e.currentTarget.value);
						}}
					/>
				</Form.Group>

				<Form.Group id='formGridCheckbox' className='mb-2'>
					<Form.Check type='checkbox' label='Remember me' />
				</Form.Group>

				<Button
					variant='primary'
					type='submit'
					className={styles.submit}
					onClick={submit}
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
