import { PageBody } from '../../../components/layouts';
import SecStep from './sections/SecStep';

const Step = () => {
	return (
		<div className='page template-c'>
			{/* PageBody */}
			<PageBody pageName="onboarding-wrap">
				<SecStep />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Step;