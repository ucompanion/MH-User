import { Icon } from '../../../components/ui';
import { PageBody, PageHeader, PageNav } from '../../../components/layouts';

interface PageProps {
	menu?: string;
    pageCase?: string; // case prop이 있을 수도, 없을 수도 있음
}

const PrototypeA: React.FC<PageProps> = ({pageCase}) => {
	return (
		<div className='page template-a'>
			{/* PageHeader */}
			<PageHeader>
				<div className='top-area'>
					<div className="title-area">
						<div className="site-logo"><span className="blind">디엠성형외과</span></div>
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
			<PageBody template="template-a">
				<section className='section'>
					Page Body
				</section>
			</PageBody>
			{/* // PageBody */}

			<PageNav />
		</div>
	)
}
export default PrototypeA;