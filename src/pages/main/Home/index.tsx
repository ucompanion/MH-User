import { Icon, SearchForm } from '../../../components/ui';
import { PageBody, PageHeader, PageNav } from '../../../components/layouts';
import SecPopular from './sections/SecPopular';
import SecAd1 from './sections/SecAd1';
import SecRegion from './sections/SecRegion';
import SecAd2 from './sections/SecAd2';
import SecProduct from './sections/SecProduct';
import SecHospitel from './sections/SecHospitel';
import SecDoctor from './sections/SecDoctor';
import SecReview from './sections/SecReview';

interface PageProps {
    menu?: string;
	// pageCase?: string; // case prop이 있을 수도, 없을 수도 있음
}

const Main: React.FC<PageProps> = (props) => {
	return (
		<div className='page template-a'>
			{/* PageHeader */}
			<PageHeader>
				<div className='top-area'>
					<div className="title-area">
						<h1 className="site-logo"><span className="blind">디엠성형외과</span></h1>
					</div>
					<div className='util-area'>
						<button type='button' className='btn btn-user'>
							<Icon name='icn-user' />
							<span className="blind">User</span>
						</button>
					</div>
				</div>
				<div className="srch-area">
					<SearchForm val="" />
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="main-wrap">
				{/* Section: 인기검색어 */}
				<SecPopular />

				{/* Section: 롤링배너 */}
				<SecAd1 />

				{/* Section: 고민분위 */}
				<SecRegion />

				{/* Section: 띠배너 */}
				<SecAd2 />

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

			<PageNav menu={props.menu} />
		</div>
	)
}
export default Main;