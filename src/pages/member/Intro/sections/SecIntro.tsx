import { Link } from 'react-router-dom';

const SecIntro = () => {
	return (
		<section className='section intro-sec'>
			<div className="section-header">
				<p className="section-explain">K-뷰티 의료 서비스, 쉽게 만나보세요</p>
				<h2 className="section-h2">한국의 의사 선생님과 직접 상담해보세요.</h2>
			</div>
			<div className="section-body">
				<div className="intro-img">
					<img src="/MH-User/images/contents/img-login-intro.png" alt="" />
				</div>

				<div className="page-action">
					<div className="btn-group flex-cols module-a">
						<Link to={"../member/sigup"} className='btn module-a fill-primary'>
							<span>이메일 회원가입</span>
						</Link>
						<Link to={"../member/sigin"} className='btn module-a fill-primary'>
							<span>이메일로 로그인</span>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
export default SecIntro;