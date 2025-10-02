import { PageBody } from '../../../components/layouts';
import SecStepB from './sections/SecStepB';

const StepA = () => {
	return (
		<div className='page template-c'>
			{/* PageBody */}
			<PageBody menuClass="onboarding-wrap" optionClass="has-sticky-btm">
				<SecStepB />

				<div className='page-action'>
					<div className='btn-group'>
						<button type='button' className='btn module-a line-normal'>
							<span>이전</span>
						</button>
						<button type='button' className='btn module-a fill-primary' disabled={true}>
							<span>다음</span>
						</button>
					</div>
				</div>
			</PageBody>
			{/* // PageBody */}

		</div>
	)
}
export default StepA;