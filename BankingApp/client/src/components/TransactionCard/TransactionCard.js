import React from 'react';
import styles from './TransactionCard.module.css';

function TransactionCard() {
	return (
		<div className={styles.card}>
			<img src='https://via.placeholder.com/40C/O' alt='' />
			<p>Transfer</p>
		</div>
	);
}

export default TransactionCard;
