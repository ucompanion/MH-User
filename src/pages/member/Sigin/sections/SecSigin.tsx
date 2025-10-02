import { useState } from "react";
import { Checkbox } from "../../../../components/ui";
import { Link } from "react-router-dom";

const SecSigin = () => {
	const [loginSesionChk, setloginSesionChk] = useState(false);

	return (
		<section className='section module-b sigin-sec'>
			<div className="section-header">
				 <h2 className="section-h2">로그인</h2>
			</div>
			<div className="section-body">
				<form className="frm module-a">
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmName" className="frm-label">이름</label>
						</div>
						<div className="frm-content">
							<div className="frm-input demo-a">
								<input type="text" className="input" placeholder="이메일을 입력해주세요." />
							</div>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmName" className="frm-label">비밀번호</label>
						</div>
						<div className="frm-content">
							<div className="frm-input demo-a">
								<input type="text" className="input" placeholder="비밀번호를 입력해주세요." />
							</div>
						</div>
					</div>

					<div className="session-chk">
						<Checkbox
							name="loginSesionChk"
							module="demo-a"
							checked={loginSesionChk}
							disabled={false}
							onClick={()=>{setloginSesionChk(!loginSesionChk)}}
						>
							로그인 상태 유지
						</Checkbox>
					</div>
				</form>
				<div className="page-action">
					<button type='button' className='btn module-a fill-primary'>
						<span>로그인</span>
					</button>

					<div className="sigin-helper">
						<p>비밀번호를 잃어버리셨나요? <Link to={'../member/passwordReset'} className='btn none-primary'>비밀번호 재설정</Link></p>
						<p>아직 회원이 아니신가요?  <Link to={'../member/sigup'} className='btn none-primary'>회원가입</Link></p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default SecSigin;