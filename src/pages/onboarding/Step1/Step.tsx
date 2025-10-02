import { PageBody } from '../../../components/layouts';
import SecStep from './sections/SecStep';

const Step = () => {
	return (
		<div className='page template-c'>
			<h1 className="blind">Onboarding</h1>

			{/* PageBody */}
			<PageBody menuClass="onboarding-wrap">
				<SecStep />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Step;