import { HashRouter, Routes, Route } from 'react-router-dom';

// Layout
import PageLayout from './components/layouts/PageLayout';

// Guide
import SectionPage from './guide/components/SectionPage';
import ElementPage from './guide/components/ElementPage';
import FormPage from './guide/components/FormPage';
import DataPage from './guide/components/DataPage';
import PostPage from './guide/components/PostPage';
import ModulePage from './guide/components/ModulePage';
import ModalPage from './guide/components/ModalPage';

// Pages
import PrototypeA from './pages/template/PrototypeA';
import PrototypeB from './pages/template/PrototypeB';

import Home from "./pages/main/Home";
import Search from './pages/main/Search';
import Result from './pages/main/Search/Result';

// System
import NotFound from "./NotFound";

const Router = () => {
	return (
		<HashRouter>
			<Routes>
				{/* Guide */}
				<Route path='guide/' element={<PageLayout />}>
					<Route path='components/sections' element={<SectionPage />} />
					<Route path='components/elements' element={<ElementPage />} />
					<Route path='components/forms' element={<FormPage />} />
					<Route path='components/data' element={<DataPage />} />
					<Route path='components/posts' element={<PostPage />} />
					<Route path='components/modules' element={<ModulePage />} />
					<Route path='components/modals' element={<ModalPage />} />
				</Route>

				{/* Pages */}
				<Route path='pages/' element={<PageLayout />}>
					{/* Templates */}
					<Route path='templates/prototypeA' element={<PrototypeA />} />
					<Route path='templates/prototypeB' element={<PrototypeB />} />

					{/* Main */}
					<Route path='main/home' index element={<Home menu='home' />} />
					<Route path='main/search' index element={<Search />} />
					<Route path='main/search/result' index element={<Result />} />


					{/* Category */}
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</HashRouter>
	);
};
export default Router;