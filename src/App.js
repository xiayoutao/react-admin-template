import { Routes, Route } from 'react-router-dom';
import RoutesView, { IndexView } from '@/router';
import Layout from './layout';

import './styles/base.css';

function App() {
	return (
		<Routes>
			<Route path="/" exact element={<Layout />}>
				<Route index element={<IndexView />} />
				{RoutesView.map((item) => {
					return (
						<Route
							path={item.path}
							key={item.path}
							element={<item.component />}
						/>
					);
				})}
				<Route path="*" element={<div>404</div>} />
			</Route>
		</Routes>
	);
}

export default App;
