import React from 'react';
import { Image } from 'react-bootstrap';
import styles from './ProfileCard.module.css';

function ProfileCard() {
	return (
		<div className={styles.main}>
			<div className={styles.imageDiv}>
				<Image src='https://via.placeholder.com/80C/O' roundedCircle />
			</div>
			<div className='{styles.info} px-2'>
				<h1 className='display-6'>John Doe</h1>
				<p className='text-muted'>IEEE member</p>
			</div>
		</div>
	);
}

export default ProfileCard;
