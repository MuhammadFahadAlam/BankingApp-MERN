import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileCard, HistoryItem } from './../../components';
import styles from './Transactions.module.css';

function Transactions() {
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
					<Link to='/payments'>
						<button>Payments</button>
					</Link>
					<Link to='/accounts'>
						<button>Account</button>
					</Link>
					<button>Statistics</button>
				</div>
				<Link to='/'>
					<button className={styles.logo}>The Bank</button>{' '}
				</Link>
			</div>
			<div className={styles.middle}>
				<div className={styles.top}>
					<h1>Transaction</h1>
					<p>Track your transactions</p>
				</div>
				<div className={styles.history}>
					<div className={styles.heading}>
						<p>History</p>
					</div>
					<div className={styles.transactions}>
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
						<HistoryItem />
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<p>Spent Graph</p>
				<div className={styles.spentGraph}></div>
			</div>
		</div>
	);
}

export default Transactions;
