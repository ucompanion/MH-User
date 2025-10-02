import { PageBody, PageHeader } from '../../../components/layouts';
import SecSigin from './sections/SecSigin';

export const Sigin = () => {
	return (
		<div className='page template-d'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<div className="site-logo"><span className="blind">디엠성형외과</span></div>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="member-wrap">
				<h1 className="blind">로그인, 회원가입</h1>

				{/* 섹션: 로그인 */}
				<SecSigin />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Sigin;