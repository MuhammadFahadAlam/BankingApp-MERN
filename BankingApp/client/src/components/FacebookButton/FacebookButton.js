import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import styles from './FacebookButton.module.css';

function FacebookButton() {
	return (
		<button className={styles.butt}>
			<FacebookIcon />
		</button>
	);
}

export default FacebookButton;
