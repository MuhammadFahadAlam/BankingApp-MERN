import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
	Main,
	Payments,
	SignIn,
	SignUp,
	Transactions,
	Accounts,
} from './../containers';

export default class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Route exact path='/' component={Main} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/transactions' component={Transactions} />
				<Route exact path='/payments' component={Payments} />
				<Route exact path='/accounts' component={Accounts} />
			</Router>
		);
	}
}
