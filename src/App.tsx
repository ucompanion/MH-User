import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import UserLayoutSub from './Layouts/UserLayoutSub';
import UserLayoutMain from './Layouts/UserLayoutMain';

// Guide
import PageList from "./Guide/PageList";

// Pages
import Index from "./Pages/Main";
import Prototype from "./Pages/Prototype";
import NotFound from "./NotFound";

const Router = () => {
	return (
		<BrowserRouter basename="/MH-User">
			<Routes>
				<Route path="/" element={<PageList />} />
				<Route path="/Main" element={<UserLayoutMain />}>
					<Route index element={<Index />} />
				</Route>
				<Route path="/Pages/" element={<UserLayoutSub />}>
					<Route path='Prototype' element={<Prototype />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;