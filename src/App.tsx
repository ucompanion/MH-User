import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Guide
import GuideLayout from './guide/layout/GuideLayout';
import ElementPage from './guide/components/ElementPage';
import FormPage from './guide/components/FormPage';
import ModulePage from './guide/components/ModulePage';
import ModalPage from './guide/components/ModalPage';

// Pages
import UserLayoutMain from './components/layouts/UserLayoutMain';
import UserLayoutSub from './components/layouts/UserLayoutSub';
import Prototype from './pages/templates/Prototype';
import PostList from './pages/templates/PostList';
import PostView from './pages/templates/PostView';
import Main from "./pages/Main";

// System
import NotFound from "./NotFound";

const Router = () => {
	return (
		<BrowserRouter basename="/MH-User">
			<Routes>
				{/* Layout Guide */}
				<Route path="/guide" element={<GuideLayout />}>
					<Route path='/components/ElementPage' element={<ElementPage />} />
					<Route path='/components/FormPage' element={<FormPage />} />
					<Route path='/components/ModulePage' element={<ModulePage />} />
					<Route path='/components/ModalPage' element={<ModalPage />} />
				</Route>

				{/* Layout Main */}
				<Route path="/pages/" element={<UserLayoutMain />}>
					<Route path='Main' element={<Main />} />
				</Route>

				{/* Layout Sub */}
				<Route path="/pages/" element={<UserLayoutSub />}>
					{/* Sub Templates */}
					<Route path='/templates/Prototype' element={<Prototype />} />
					<Route path='/templates/PostList' element={<PostList />} />
					<Route path='/templates/PostView' element={<PostView />} />

					{/* Sub Category */}

				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;