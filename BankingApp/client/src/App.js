import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './config/RouteConfig';

function App() {
	return (
		<div className='App'>
			<div className='Content'>
				<AppRouter />
			</div>
		</div>
	);
}

export default App;
