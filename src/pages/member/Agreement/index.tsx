import { PageBody, PageHeader } from '../../../components/layouts';
import SecAgree from './sections/SecAgree';

const Agreement = () => {
	return (
		<div className='page template-d'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<div className="site-logo"><span className="blind">ippeo</span></div>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="member-wrap" optionClass='has-page-action'>
				<h1 className="blind">로그인, 회원가입</h1>

				{/* 섹션: 약관동의 */}
				<SecAgree />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Agreement;