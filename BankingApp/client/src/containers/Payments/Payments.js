import React from 'react';

import { ProfileCard, TransactionCard } from './../../components';

import styles from './Payments.module.css';

function Payments() {
	return (
		<div className={styles.main}>
			<div className={styles.left}>
				<div className={styles.info}>
					<ProfileCard />
				</div>
				<div className={styles.balance}>
					<div className={styles.balanceAbout}>
						<p className={styles.content}>
							Balance <br />
							<span className={styles.amount}>$202</span>
						</p>
					</div>
				</div>
				<div className={styles.navigate}>
					<button>Transaction</button>
					<button>Payment</button>
					<button>Account</button>
					<button>Statistics</button>
				</div>
				<button className={styles.logo}>The Bank</button>
			</div>
			<div className={styles.middle}>
				<div className={styles.top}>
					<h1>Payments</h1>
					<p>Do any type of transactions here</p>
				</div>
				<div className={styles.types}>
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
					<TransactionCard />
				</div>
				<div className={styles.recepient}>
					<p className={styles.transfer}>Transfer To</p>
					<div className={styles.transto}>
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
						<ProfileCard />
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<p className={styles.heading}>New Payments</p>
				<p>From</p>
				<ProfileCard />
				<p>To</p>
				<ProfileCard />
				<p>Amount</p>
				<form action='' className={styles.form}>
					<input type='text' />
					<button>Add Comment</button>
					<button type='submit'>Transfer</button>
				</form>
			</div>
		</div>
	);
}

export default Payments;
