import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { GoogleButton, FacebookButton } from './../../components';
import styles from './SignUpForm.module.css';
import { useDispatch } from 'react-redux';
import { SignUp } from '../../store/slices/userSlice';
function SignUpForm() {
	const [state, setState] = useState({
		name: '',
		email: '',
		password: '',
	});

	const dispatch = useDispatch();

	function handleChange(e) {
		const value = e.target.value;
		setState({
			...state,
			[e.target.name]: value,
		});
	}

	function submit(e) {
		e.preventDefault();
		dispatch(SignUp(state));
	}

	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>SignUp your account</h1>
			<Form>
				<Form.Group controlId='formGridLast' className='mb-2'>
					<Form.Control
						name='name'
						type='text'
						placeholder='Enter Name'
						value={state.name}
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='formGridEmail' className='mb-2'>
					<Form.Control
						name='email'
						type='email'
						value={state.email}
						placeholder='Email Address'
						onChange={handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='formGridPassword' className='mb-2'>
					<Form.Control
						name='password'
						type='password'
						placeholder='Create Password'
						value={state.password}
						onChange={handleChange}
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
