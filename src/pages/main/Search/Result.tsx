import { Icon, SearchForm } from '../../../components/ui';
import { PageBody, PageHeader, PageNav } from '../../../components/layouts';
import SecProduct from './SecProduct';
import SecHospitel from './SecHospitel';
import SecDoctor from './SecDoctor';
import SecReview from './SecReview';

interface PageProps {
    menu?: string;
	// pageCase?: string; // case prop이 있을 수도, 없을 수도 있음
}

const Result: React.FC<PageProps> = (props) => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<SearchForm val="코" />
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody template="template-a main-body">
				{/* Section: 상품 */}
				<SecProduct />

				{/* Section: 병원 */}
				<SecHospitel />

				{/* Section: 의사 */}
				<SecDoctor />

				{/* Section: 리뷰 */}
				<SecReview />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Result;