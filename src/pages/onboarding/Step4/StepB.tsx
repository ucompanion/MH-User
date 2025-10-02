import { PageActionSticky, PageBody } from '../../../components/layouts';
import SecStepB from './sections/SecStepB';

const StepA = () => {
	return (
		<div className='page template-c'>
			<h1 className="blind">Onboarding</h1>

			{/* PageBody */}
			<PageBody menuClass="onboarding-wrap" optionClass="has-page-action">
				<SecStepB />

				<PageActionSticky>
					<div className="page-action">
						<div className='btn-group module-a'>
							<button type='button' className='btn module-a line-normal'>
								<span>이전</span>
							</button>
							<button type='button' className='btn module-a fill-primary' disabled={true}>
								<span>다음</span>
							</button>
						</div>
					</div>
				</PageActionSticky>
			</PageBody>
			{/* // PageBody */}

		</div>
	)
}
export default StepA;