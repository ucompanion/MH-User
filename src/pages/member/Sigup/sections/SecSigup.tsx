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
							<div className="frm-input module-a">
								<input type="text" className="input" id="frmName" placeholder="이름을 입력해주세요." />
							</div>
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
								<div className="frm-input module-a flex-a">
									<input type="text" className="input" id="frmHp" placeholder="휴대폰 번호를 - 없이 입력해주세요." />
								</div>
								<button type="button" className="btn module-b fill-dark">
									<span>재인증</span>
								</button>
							</div>
							<div className="frm-controls">
								<div className="frm-input module-a flex-a">
									<input type="text" className="input pad-r70" id="frmHp" placeholder="인증코드를 입력해주세요." />
									<div className="on-right">
										<span className="text">mm:ss</span>
									</div>
								</div>
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
								<div className="frm-input module-a flex-a">
									<input type="text" className="input" id="frmMail" placeholder="이메일을 입력해주세요." />
								</div>
								<button type="button" className="btn module-b fill-dark">
									<span>재요청</span>
								</button>
							</div>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmMail" className="frm-label">인증코드</label>
						</div>
						<div className="frm-content">
							<div className="frm-input module-a">
								<input type="text" className="input" id="frmMail" placeholder="메일로 전송된 코드를 입력해주세요." />
							</div>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmPw" className="frm-label">비밀번호</label>
						</div>
						<div className="frm-content">
							<div className="frm-input module-a">
								<input type="password" className="input" id="frmPw" placeholder="비밀번호를 입력해주세요." />
							</div>
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
							<div className="frm-input module-a">
								<input type="password" className="input" id="frmMail2" placeholder="비밀번호를 입력해주세요." />
							</div>
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