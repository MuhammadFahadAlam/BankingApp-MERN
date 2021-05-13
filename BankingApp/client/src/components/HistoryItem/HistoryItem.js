import React from 'react';
import styles from './HistoryItem.module.css';
function HistoryItem() {
	return (
		<>
			<div className={styles.main}>
				<div className='info'>
					<h1 className='display-6'>Fahad</h1>
					<p className='text-muted'>FTGG</p>
				</div>
				<div>
					<p className={styles.amount}>$ 202</p>
				</div>
			</div>
			<hr />
		</>
	);
}

export default HistoryItem;
