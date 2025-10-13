import { Input } from "../../../../components/ui";

const SecFind = () => {
	return (
		<section className='section module-b sigin-find-sec'>
			<div className="section-header">
				<h2 className="section-h2">비밀번호 찾기</h2>
			</div>
			<div className="section-body">
				{/* 입력폼 */}
				<form className="frm module-a">
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
									<span>인증</span>
								</button>
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
export default SecFind;