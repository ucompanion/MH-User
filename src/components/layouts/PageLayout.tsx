import { Outlet } from 'react-router-dom';
import '../../assets/scss/ui.style.scss';
import UseViewportHeight from '../../assets/scss/hooks/UseViewportHeight';
import UseScrollStatus from '../../assets/scss/hooks/UseScrollStatus';
import { Fragment } from 'react/jsx-runtime';

const PageLayout = () => {
	UseViewportHeight();
	UseScrollStatus();
	return (
		<Fragment>
			<Outlet />
		</Fragment>
	);
}
export default PageLayout;
