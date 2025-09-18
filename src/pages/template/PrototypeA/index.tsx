import { useState } from 'react';
import { Icon } from '../../../components/ui';
import { PageBody, PageFooter, PageHeader } from '../../../components/layouts';

const PrototypeA = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const buttonClassName = `btn btn-favorite ${isFavorite ? 'is-on' : ''}`;

	return (
		<div className='page template-a'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">디엠성형외과</h1>
				</div>
				<div className='util-area'>
					<button type='button' className='btn btn-share'>
						<Icon name='icn-share' />
						<span className="blind">공유하기</span>
					</button>
					<button type='button' className={buttonClassName} onClick={() => { setIsFavorite(!isFavorite); }}>
						<Icon name='icn-favorite' />
						<span className="blind">즐겨찾기</span>
					</button>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody template="template-a">
				<section className='section' style={{background:'black', height: '200rem'}}>
					Page Body
				</section>
			</PageBody>
			{/* // PageBody */}

			<PageFooter />
		</div>
	)
}
export default PrototypeA;