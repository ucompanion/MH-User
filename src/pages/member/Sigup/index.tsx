import { PageBody, PageHeader } from '../../../components/layouts';
import SecSigup from './sections/SecSigup';

const Sigup = () => {
	return (
		<div className='page template-d'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<div className="site-logo"><span className="blind">ippeo</span></div>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="member-wrap" optionClass='has-page-action'>
				<SecSigup />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Sigup;