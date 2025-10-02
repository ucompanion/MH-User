const SecReset = () => {
	return (
		<section className='section module-b sigin-reset-sec'>
			<div className="section-header">
				<h2 className="section-h2">비밀번호 재설정</h2>
			</div>
			<div className="section-body">
				{/* 입력폼 */}
				<form className="frm module-a">
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmPw" className="frm-label">새 비밀번호</label>
						</div>
						<div className="frm-content">
							<div className="frm-input module-a">
								<input type="password" className="input" id="frmPw" placeholder="새 비밀번호를 입력해주세요." />
							</div>
							<div className="frm-desc">
								<p>비밀번호는 숫자, 영문자, 특수문자 포함 9~2자로 입력해주세요.</p>
							</div>
						</div>
					</div>
					<div className="frm-field">
						<div className="frm-tit">
							<label htmlFor="frmMail2" className="frm-label">새 비밀번호 확인</label>
						</div>
						<div className="frm-content">
							<div className="frm-input module-a">
								<input type="password" className="input" id="frmMail2" placeholder="새 비밀번호를 입력해주세요." />
							</div>
						</div>
					</div>
				</form>
				{/* //입력폼 */}

				<div className="page-action">
					<button type="button" className="btn module-a fill-primary" disabled={true}>
						<span>완료</span>
					</button>
				</div>
			</div>
		</section>
	)
}
export default SecReset;