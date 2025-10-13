import { Input } from "../../../../components/ui";

const SecSigup = () => {
	return (
		<section className='section module-b sigup-sec'>
			<div className="section-header">
				<h2 className="section-h2">회원가입</h2>
			</div>
			<div className="section-body">
				{/* 입력폼 */}
				<form className="frm module-a">
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmName" className="frm-label">이름</label>
						</div>
						<div className="frm-content">
							<Input
								className='module-a'
								id="frmName"
								placeholder='이름을 입력해주세요.'
							/>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmHp" className="frm-label">휴대폰번호</label>
						</div>
						<div className="frm-content">
							<div className="frm-controls">
								<div className="frm-input module-a">
									<select name="" id="frmHp" className="select">
										<option value="">+81</option>
										<option value="">+82</option>
									</select>
								</div>
								<Input
									className='module-a flex-a'
									id="frmHp"
									placeholder='휴대폰 번호를 - 없이 입력해주세요.'
								/>
								<button type="button" className="btn module-b fill-dark">
									<span>재인증</span>
								</button>
							</div>
							<div className="frm-controls">
								<Input
									className='module-a flex-a'
									classNameInput='pad-r70'
									placeholder='인증코드를 입력해주세요.'
								>
									<div className="on-right">
										<span className="text">mm:ss</span>
									</div>
								</Input>
								<button type="button" className="btn module-b fill-dark">
									<span>재요청</span>
								</button>
							</div>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmMail" className="frm-label">이메일</label>
						</div>
						<div className="frm-content">
							<div className="frm-controls">
								<Input
									className='module-a flex-a'
									id="frmMail"
									placeholder='이메일을 입력해주세요.'
								/>
								<button type="button" className="btn module-b fill-dark">
									<span>재요청</span>
								</button>
							</div>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmCertiCode" className="frm-label">인증코드</label>
						</div>
						<div className="frm-content">
							<Input
								className='module-a'
								id="frmCertiCode"
								placeholder='메일로 전송된 코드를 입력해주세요.'
							/>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmPw" className="frm-label">비밀번호</label>
						</div>
						<div className="frm-content">
							<Input
								className='module-a'
								type="password"
								id="frmPw"
								placeholder='비밀번호를 입력해주세요.'
							/>
							<div className="frm-desc">
								<p>비밀번호는 숫자, 영문자, 특수문자 포함 9~2자로 입력해주세요.</p>
							</div>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmMail2" className="frm-label">비밀번호 확인</label>
						</div>
						<div className="frm-content">
							<Input
								className='module-a'
								type="password"
								id="frmMail2"
								placeholder='비밀번호를 입력해주세요.'
							/>
						</div>
					</div>
				</form>
				{/* //입력폼 */}

				<div className="page-action">
					<button type="button" className="btn module-a fill-primary" disabled={true}>
						<span>회원가입 완료</span>
					</button>
				</div>
			</div>
		</section>
	)
}
export default SecSigup;