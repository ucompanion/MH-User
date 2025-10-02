import { PageBody, PageHeader } from '../../../components/layouts';
import Sec from './sections/Sec';

const Sigup = () => {
	return (
		<div className='page template-c'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<div className="site-logo"><span className="blind">디엠성형외과</span></div>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="member-wrap">
				<Sec />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Sigup;