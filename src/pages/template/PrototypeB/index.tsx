import UserHeader from '../../../components/layouts/UserHeader';
import { NavLink } from 'react-router-dom';

const PrototypeB = () => {
	return (
		<div className='page template-b'>
			<UserHeader>
				<NavLink to='pages/main' className="site-logo"><span className="blind">IPPEO</span></NavLink>
				<NavLink to='pages/templates/prototype'>Prototype</NavLink>
			</UserHeader>
		</div>
	)
}
export default PrototypeB;