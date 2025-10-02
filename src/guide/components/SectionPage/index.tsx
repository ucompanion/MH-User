import { Icon } from '../../../components/ui';
import { PageBody, PageHeader } from '../../../components/layouts';

const SectionPage = () => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">Section Components</h1>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="template-b">
				<section className='section module-a'>
					<div className="section-header">
						<h2 className='section-h2'>상품 <em>260</em>건</h2>
						<button type='button' className='btn btn-more'>
							<Icon name='icn-more' />
						</button>
					</div>
					<div className="section-body">
						Section Content
					</div>
				</section>

				<hr className="divider module-a" />

				<section className='section module-b'>
					<div className="section-header">
						<div className='section-step'>1/4</div>
						<h1 className='section-h2'>관심있는 시술이 있나요?</h1>
						<p className="section-explain">최대 N개까지 선택할 수 있어요.</p>
					</div>
					<div className="section-body">
						Section Content
					</div>
				</section>
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default SectionPage;