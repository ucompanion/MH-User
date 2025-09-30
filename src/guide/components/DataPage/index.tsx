import { Icon } from '../../../components/ui';
import { PageBody, PageFooter, PageHeader } from '../../../components/layouts';

const DataPage = () => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">Data Components</h1>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody pageName="template-b">
				{/* Data Bullet */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Bullet</h2>
					</div>
					<div className="section-body">
						<h3 className='content-h3'>문자 블릿</h3>
						<h3 className='content-h3'>모양 블릿</h3>
						<h3 className='content-h3'>아이콘 블릿</h3>
					</div>
				</section>
				{/* // Data Bullet */}

				{/* List */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>List</h2>
					</div>
					<div className="section-body">
						<h3 className='content-h3'>List Card</h3>
						<ul className='list-card'>
							<li className='item'>List Item</li>
						</ul>

						<h3 className='content-h3'>List Grid</h3>
						<ul className='list-grid'>
							<li className='item'>List Item</li>
						</ul>
					</div>
				</section>
				{/* // List */}

				{/* Post */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Posts</h2>
					</div>
					<div className="section-body">
						<h3 className='content-h3'>Product</h3>
						<div className='board module-a'>
							<ul className='list'>

							</ul>
						</div>

						<h3 className='content-h3'>Review</h3>
						<div className='board module-a'>
							<ul className='list'>

							</ul>
						</div>
					</div>
				</section>
				{/* // Post */}
			</PageBody>
			{/* // PageBody */}

			<PageFooter />
		</div>
	)
}
export default DataPage;