import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function SignUpForm() {
	return (
		<Form>
			<Row>
				<Form.Group as={Col} controlId='formGridFirst' className='mb-4'>
					<Form.Control type='text' placeholder='Enter First Name' />
				</Form.Group>

				<Form.Group as={Col} controlId='formGridLast' className='mb-4'>
					<Form.Control type='text' placeholder='Enter Last Name' />
				</Form.Group>
			</Row>

			<Form.Group controlId='formGridEmail' className='mb-4'>
				<Form.Control type='email' placeholder='Email Address' />
			</Form.Group>

			<Form.Group controlId='formGridPassword' className='mb-4'>
				<Form.Control type='password' placeholder='Create Password' />
			</Form.Group>

			<Form.Group id='formGridCheckbox' className='mb-4'>
				<Form.Check type='checkbox' label='Remember me' />
			</Form.Group>

			<Button variant='primary' type='submit' className='mb-4'>
				Register
			</Button>
		</Form>
	);
}

export default SignUpForm;
