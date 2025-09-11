import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import UserLayout from './components/layouts/UserLayout';

// Guide
import SectionPage from './guide/components/SectionPage';
import ElementPage from './guide/components/ElementPage';
import FormPage from './guide/components/FormPage';
import PostPage from './guide/components/PostPage';
import ModulePage from './guide/components/ModulePage';
import ModalPage from './guide/components/ModalPage';

// Pages
import PrototypeA from './pages/template/PrototypeA';
import PrototypeB from './pages/template/PrototypeB';

import Home from "./pages/main/Home";

// System
import NotFound from "./NotFound";

const Router = () => {
	return (
		<BrowserRouter basename="MH-User">
			<Routes>
				{/* Guide */}
				<Route path='guide/' element={<UserLayout />}>
					<Route path='components/sections' element={<SectionPage />} />
					<Route path='components/elements' element={<ElementPage />} />
					<Route path='components/forms' element={<FormPage />} />
					<Route path='components/posts' element={<PostPage />} />
					<Route path='components/modules' element={<ModulePage />} />
					<Route path='components/modals' element={<ModalPage />} />
				</Route>

				{/* Pages */}
				<Route path='pages/' element={<UserLayout />}>
					{/* Templates */}
					<Route path='templates/prototypeA' element={<PrototypeA />} />
					<Route path='templates/prototypeB' element={<PrototypeB />} />

					{/* Main */}
					<Route path='main/home' index element={<Home />} />


					{/* Category */}
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;