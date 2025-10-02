import { PageBody } from '../../../components/layouts';
import Sec from './sections/Sec';

const Sigin = () => {
	return (
		<div className='page template-c'>
			{/* PageBody */}
			<PageBody menuClass="member-wrap" optionClass='has-page-action'>
				<Sec />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Sigin;