import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './routes/Navigation/navigation.component';
import PageAdmin from './routes/page-admin/page-admin.component';
import AjoutProf from './routes/Ajout-prof/ajout-prof.component';
import AjoutFiliere from './routes/ajout-filiere/ajout-filiere.component';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route path='/admin' element={<PageAdmin />} />
				<Route path='/profs' element={<AjoutProf />} />
				<Route path='/filieres' element={<AjoutFiliere />} />
			</Route>
		</Routes>
	);
}

export default App;
