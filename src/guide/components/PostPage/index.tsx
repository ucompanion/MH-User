import { Icon } from '../../../components/ui';
import { PageBody,  PageHeader } from '../../../components/layouts';

const PostPage = () => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">Posts Components</h1>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="template-b">
				{/* 상품 */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>상품</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">Content Title</h3>
						Section Content
					</div>
				</section>
				{/* //상품 */}

				{/* 후기 */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>후기</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">Content Title</h3>
						Section Content
					</div>
				</section>
				{/* //후기 */}
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default PostPage;