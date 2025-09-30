import { PageAction, PageBody } from '../../../components/layouts';
import SecStepA from './sections/SecStepA';

const StepA = () => {
	return (
		<div className='page template-c'>
			{/* PageBody */}
			<PageBody pageName="onboarding-wrap">
				<SecStepA />
			</PageBody>
			{/* // PageBody */}

			<PageAction>
				<button type='button' className='btn module-a line-normal'>
					<span>이전</span>
				</button>
				<button type='button' className='btn module-a fill-primary'>
					<span>다음</span>
				</button>
			</PageAction>
		</div>
	)
}
export default StepA;