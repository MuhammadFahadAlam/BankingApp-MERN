import React from 'react';
import styles from './ProfileCard.module.css';

function ProfileCard() {
	return (
		<div className={styles.main}>
			<img src='https://via.placeholder.com/60C/O' alt='' />
			<div className={styles.info}>
				<p className={styles.name}>
					John Doe
					<br />
					<span className={styles.headline}>IEEE member</span>
				</p>
			</div>
		</div>
	);
}

export default ProfileCard;
