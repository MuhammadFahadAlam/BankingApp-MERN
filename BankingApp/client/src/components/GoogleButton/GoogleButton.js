import React from 'react';
import styles from './GoogleButton.module.css';
import GTranslateIcon from '@material-ui/icons/GTranslate';

function GoogleButton() {
	return (
		<div>
			<button className={styles.butt}>
				<GTranslateIcon />
			</button>
		</div>
	);
}

export default GoogleButton;
