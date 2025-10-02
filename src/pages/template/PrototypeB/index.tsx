import { useState } from 'react';
import { Icon } from '../../../components/ui';
import { PageBody, PageHeader } from '../../../components/layouts';
import Sec from './sections/Sec';

const PrototypeB = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const buttonClassName = `btn btn-favorite ${isFavorite ? 'is-on' : ''}`;

	return (
		<div className='page template-b'>
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
			<PageBody menuClass="template-b">
				<Sec />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default PrototypeB;