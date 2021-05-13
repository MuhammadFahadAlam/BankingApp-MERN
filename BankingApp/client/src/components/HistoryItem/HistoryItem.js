import React from 'react';
import styles from './HistoryItem.module.css';
function HistoryItem() {
	return (
		<div className={styles.main}>
			<p className={styles.details}>
				<span className={styles.name}>Electricity</span>
				<br />
				details
			</p>
			<p className={styles.amount}>$202</p>
		</div>
	);
}

export default HistoryItem;
