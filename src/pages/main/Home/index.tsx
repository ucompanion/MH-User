import PageHeader from '../../../components/layouts/PageHeader';
import { NavLink } from 'react-router-dom';

const Main = () => {
	return (
		<div className='page template-a'>
			<PageHeader>
				<NavLink to='pages/main' className="site-logo"><span className="blind">IPPEO</span></NavLink>
				<NavLink to='pages/templates/prototype'>Prototype</NavLink>
			</PageHeader>
		</div>
	)
}
export default Main;