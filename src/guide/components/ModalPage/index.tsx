import { Icon } from '../../../components/ui';
import { PageBody, PageFooter, PageHeader } from '../../../components/layouts';

const ModalPage = () => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">Elements Components</h1>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody pageName="template-b">
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Section Title</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">Content Title</h3>
						Section Content
					</div>
				</section>
			</PageBody>
			{/* // PageBody */}

			<PageFooter />
		</div>
	)
}
export default ModalPage;