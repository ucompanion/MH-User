import { Outlet } from 'react-router-dom';
import '../../assets/scss/ui.style.scss';
import UseViewportHeight from '../../assets/scss/hooks/UseViewportHeight';
import UseScrollStatus from '../../assets/scss/hooks/UseScrollStatus';

const PageLayout = () => {
	UseViewportHeight();
	UseScrollStatus();
	return (
		<div className='page-wrap'>
			<Outlet />
		</div>
	);
}
export default PageLayout;
