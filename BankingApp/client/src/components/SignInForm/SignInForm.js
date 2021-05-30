import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import styles from './SignInForm.module.css';
import { FacebookButton, GoogleButton } from '../../components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchUsers,
	Login,
	selectAllUsers,
	selectUserById,
} from '../../store/slices/userSlice';

function SignInForm() {
	const [state, setState] = useState({
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
		dispatch(Login(state));
		dispatch(fetchUsers());
	}

	return (
		<div className={styles.main}>
			<h1 className={styles.heading}>SignIn your account</h1>
			<Form>
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
				<Link to={'/transaction'}>
					<Button
						variant='primary'
						type='submit'
						className={styles.submit}
						onClick={submit}
					>
						Sign In
					</Button>
				</Link>
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
