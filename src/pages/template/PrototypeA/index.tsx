import UserHeader from '../../../components/layouts/UserHeader';
import { NavLink } from 'react-router-dom';
import Icon from '../../../components/ui/Icon';

const PrototypeA = () => {
	return (
		<div className='page template-a'>
			<UserHeader>
				<button type='button' className='btn btn-back'>
					<Icon name='icn-back'/>
					<span className="blind">뒤로가기</span>
				</button>
				<NavLink to='pages/templates/prototype'>Prototype</NavLink>
			</UserHeader>
		</div>
	)
}
export default PrototypeA;