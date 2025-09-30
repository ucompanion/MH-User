import { PageBody } from '../../../components/layouts';

const PrototypeC = () => {
	return (
		<div className='page template-c'>
			{/* PageBody */}
			<PageBody pageName="template-b">
				<section className='section'>
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
		</div>
	)
}
export default PrototypeC;