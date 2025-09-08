import React from 'react';
import { Outlet } from 'react-router-dom';
import GuideHeader from "./GuideHeader";

const GuideLayout = () => {
	return (
		<div className='g-page'>
			<GuideHeader />
			<Outlet />
		</div>
	);
}

export default GuideLayout;
