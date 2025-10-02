import { PageBody, PageHeader } from '../../../components/layouts';
import SecIntro from './sections/SecIntro';

const Intro = () => {
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
			<PageBody menuClass="member-wrap" pageClass='intro-page' optionClass='has-page-action'>
				<h1 className="blind">로그인, 회원가입</h1>

				{/* 섹션: 인트로 */}
				<SecIntro />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Intro;