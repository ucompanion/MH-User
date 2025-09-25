import { Icon } from '../../../components/ui';
import { PageBody, PageHeader, PageNav } from '../../../components/layouts';
import SecPopular from './SecPopular';
import SecAd1 from './SecAd1';
import SecRegion from './SecRegion';
import SecAd2 from './SecAd2';
import SecProduct from './SecProduct';
import SecHospitel from './SecHospitel';
import SecDoctor from './SecDoctor';
import SecReview from './SecReview';

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
					<div className='srch-frm'>
						<label htmlFor="srchInput" className='blind'>Enter search term</label>
						<input type="text" id='srchInput' placeholder='気になる施術や病院名はありますか？' className='input' />
						<button type='button' className='btn btn-srch'>
							<Icon name='icn-srch' />
							<span className="blind">Search</span>
						</button>
					</div>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody template="template-a main-body">
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