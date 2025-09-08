import React from 'react';
import { NavLink } from 'react-router-dom';

const GuideHeader = () => {
	return (
		<header className='g-page-header'>
			<NavLink to='/Main/'>Main</NavLink>&nbsp;/&nbsp;
			<NavLink to='/Pages/Prototype'>Prototype</NavLink>
		</header>
	)
}
export default GuideHeader;