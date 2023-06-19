import { Provider } from 'react-redux';
import { ColorButtons } from './components/ColorButtons';
import { Scene } from './components/Scene';
import { store } from './store';

function App() {
	return (
		<div className="h-full relative">
			<Provider store={store}>
				<Scene />
				<ColorButtons />
			</Provider>
		</div>
	);
}

export default App;
