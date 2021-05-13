import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Transactions } from './containers';

function App() {
	return (
		<div className='App'>
			<div className='Content'>
				<Transactions />
			</div>
		</div>
	);
}

export default App;
