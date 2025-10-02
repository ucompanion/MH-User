import { useState } from "react";
import { Checkbox } from "../../../../components/ui";

const SecAgree = () => {
	const [agreeChkAll, setAgreeChkAll] = useState(false);
	const [agreeChkItem1, setAgreeChkItem1] = useState(false);
	const [agreeChkItem2, setAgreeChkItem2] = useState(false);
	const [agreeChkItem3, setAgreeChkItem3] = useState(false);
	const [agreeChkItem4, setAgreeChkItem4] = useState(false);

	return (
		<section className='section module-b agree-sec'>
			<div className="section-header">
				<h2 className="section-h2">이용 약관 동의</h2>
			</div>
			<div className="section-body">
				<form className="agree-frm">
					<h3 className="content-h3">이용 약관 동의</h3>
					<div className="agree-all">
						<div className="agree-item">
							<Checkbox
								name="agreeCheckboxAll"
								module="demo-a"
								checked={agreeChkAll}
								disabled={false}
								onClick={()=>{setAgreeChkAll(!agreeChkAll)}}
							>
								전체 동의하기 (선택 동의 포함)
							</Checkbox>
						</div>
					</div>
					<ul className="agree-checklist">
						<li className="agree-item">
							<Checkbox
								name="agreeCheckboxItem"
								module="demo-a"
								checked={agreeChkItem1}
								disabled={false}
								onClick={()=>{setAgreeChkItem1(!agreeChkItem1)}}
							>
								만 18세 이상입니다. (필수)
							</Checkbox>
							<button type="button" className="btn btn-more">
								<span className="blind">자세히보기</span>
							</button>
						</li>
						<li className="agree-item">
							<Checkbox
								name="agreeCheckboxItem"
								module="demo-a"
								checked={agreeChkItem2}
								disabled={false}
								onClick={()=>{setAgreeChkItem2(!agreeChkItem2)}}
							>
								서비스 이용 약관 동의 (필수)
							</Checkbox>
							<button type="button" className="btn btn-more">
								<span className="blind">자세히보기</span>
							</button>
						</li>
						<li className="agree-item">
							<Checkbox
								name="agreeCheckboxItem"
								module="demo-a"
								checked={agreeChkItem3}
								disabled={false}
								onClick={()=>{setAgreeChkItem3(!agreeChkItem3)}}
							>
								마케팅 목적의 개인정보 수집 및 이용 동의 (선택)
							</Checkbox>
							<button type="button" className="btn btn-more">
								<span className="blind">자세히보기</span>
							</button>
						</li>
						<li className="agree-item">
							<Checkbox
								name="agreeCheckboxItem"
								module="demo-a"
								checked={agreeChkItem4}
								disabled={false}
								onClick={()=>{setAgreeChkItem4(!agreeChkItem4)}}
							>
								광고성 정보 수신 동의 (선택)
							</Checkbox>
							<button type="button" className="btn btn-more">
								<span className="blind">자세히보기</span>
							</button>
						</li>
					</ul>
				</form>
				<div className="page-action">
					<button type='button' className='btn module-a fill-primary' disabled={true }>
						<span>동의하기</span>
					</button>
				</div>
			</div>
		</section>
	)
}
export default SecAgree;