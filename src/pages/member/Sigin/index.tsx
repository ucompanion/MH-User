import { PageBody } from '../../../components/layouts';
import Sec from './sections/Sec';

export const Sigin = () => {
	return (
		<div className='page template-c'>
			{/* PageBody */}
			<PageBody menuClass="member-wrap">
				<Sec />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Sigin;