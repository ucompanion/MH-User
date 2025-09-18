import { Outlet } from 'react-router-dom';
import '../../assets/scss/ui.style.scss';
import useViewportHeight from './useViewportHeight';
import { Fragment } from 'react/jsx-runtime';

const PageLayout = () => {
	useViewportHeight();
	return (
		<Fragment>
			<Outlet />
		</Fragment>
	);
}
export default PageLayout;
