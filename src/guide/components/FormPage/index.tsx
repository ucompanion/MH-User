import { Icon } from '../../../components/ui';
import { PageBody, PageFooter, PageHeader } from '../../../components/layouts';
import { useState } from 'react';

const FormPage = () => {
	// Checkbox
	const [checkbox1, setCheckbox1] = useState(false);
	const [checkbox2, setCheckbox2] = useState(true);
	const [checkbox3, setCheckbox3] = useState(false);
	const [checkbox4, setCheckbox4] = useState(true);
	// Radio
	const [radio1, setRadio1] = useState('radio12');
	const [radio2, setRadio2] = useState('radio22');
	// Switch
	const [switch1, setSwitch1] = useState(false);
	const [switch2, setSwitch2] = useState(true);
	const [switch3, setSwitch3] = useState(false);
	const [switch4, setSwitch4] = useState(true);

	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">Forms Components</h1>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody template="template-a">
				{/* Form Textfeild */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Form Input</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">module-a</h3>
						<div className='frm-input module-a'>
							<input type="text" className='input' placeholder='Placeholder' />
						</div>
						<br />
						<div className='frm-input module-a'>
							<input type="text" className='input' value={"Valued"} />
						</div>
						<br />
						<div className='frm-input module-a'>
							<input type="text" className='input' value={"Disabled"} disabled />
						</div>
						<br />
						<div className='frm-input module-a is-errored'>
							<input type="text" className='input' value={"Errored"} />
						</div>
						<br />
						<div className='frm-input module-a'>
							<textarea name="" id="" cols={10} rows={5} className='textarea'></textarea>
							<p className='bytes'><span className="count">0</span> / <span className="total">100Bytes</span></p>
						</div>
						<br />
						<div className='frm-input module-a'>
							<textarea name="" id="" cols={10} rows={5} className='textarea'></textarea>
							<p className='bytes'><span className="count">0</span> / <span className="total">100Bytes</span></p>
						</div>

						{/* <h3 className="content-h3">Select</h3> */}
						<br />
						<div className="frm-input module-a">
							<select name="" id="" className='select'>
								<option value="">전체</option>
							</select>
						</div>
						<br />
						<div className="frm-input module-a">
							<select name="" id="" className='select' disabled>
								<option value="">전체</option>
							</select>
						</div>

						<h3 className="content-h3">.frm-input-group</h3>
						<p>[Default]</p>
						<div className="frm-input-group">
							<div className='frm-input module-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
							<div className='frm-input module-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
						</div>
						<br />
						<p>&gt; .flex-a</p>
						<div className="frm-input-group">
							<div className='frm-input module-a flex-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
							<div className="frm-split">~</div>
							<div className='frm-input module-a flex-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
						</div>
					</div>
				</section>
				{/* // Form Textfeild */}

				{/* Form Check */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Form Check</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">.frm-checkbox-group</h3>
						<div className='frm-checkbox-group'>
							<label className='frm-checkbox module-a'>
								<input type="checkbox" name='demoCheckbox' className="checkbox" checked={checkbox1} onClick={()=>{setCheckbox1(!checkbox1)}}/>
							</label>
							<label className='frm-checkbox module-a'>
								<input type="checkbox" name='demoCheckbox' className="checkbox" checked={checkbox2} onClick={()=>{setCheckbox2(!checkbox2)}}/>
								<span className='label'>Checkbox</span>
							</label>
							<label className='frm-checkbox module-a'>
								<input type="checkbox" name='demoCheckbox' className="checkbox" disabled checked={checkbox3} onClick={()=>{setCheckbox3(!checkbox3)}}/>
								<span className='label'>Checkbox</span>
							</label>
							<label className='frm-checkbox module-a'>
								<input type="checkbox" name='demoCheckbox' className="checkbox" disabled checked={checkbox4} onClick={()=>{setCheckbox4(!checkbox4)}}/>
								<span className='label'>Checkbox</span>
							</label>
						</div>

						<h3 className="content-h3">.frm-radio-group</h3>
						<div className='frm-radio-group'>
							<label className='frm-radio module-a'>
								<input type="radio" name='demoRadio1' className="radio" checked={radio1 === 'radio11'} onClick={()=>{setRadio1('radio11')}} />
							</label>
							<label className='frm-radio module-a'>
								<input type="radio" name='demoRadio1' className="radio" checked={radio1 === 'radio12'} onClick={()=>{setRadio1('radio12')}} />
								<span className='label'>Radio</span>
							</label>
							<label className='frm-radio module-a'>
								<input type="radio" name='demoRadio2' className="radio" disabled checked={radio2 === 'radio21'} onClick={()=>{setRadio2('radio21')}} />
								<span className='label'>Radio</span>
							</label>
							<label className='frm-radio module-a'>
								<input type="radio" name='demoRadio2' className="radio" disabled checked={radio2 === 'radio22'} onClick={()=>{setRadio2('radio22')}} />
								<span className='label'>Radio</span>
							</label>
						</div>

						<h3 className="content-h3">Switch</h3>
						<div className='flex-nw gap-10'>
							<label className='frm-switch module-a'>
								<input type="checkbox" name='demoSwitch1' checked={switch1} onClick={()=>{setSwitch1(!switch1)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
							<label className='frm-switch module-a'>
								<input type="checkbox" name='demoSwitch2' checked={switch2} onClick={()=>{setSwitch2(!switch2)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
							<label className='frm-switch module-a'>
								<input type="checkbox" name='demoSwitch3' disabled checked={switch3} onClick={()=>{setSwitch3(!switch3)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
							<label className='frm-switch module-a'>
								<input type="checkbox" name='demoSwitch4' disabled checked={switch4} onClick={()=>{setSwitch4(!switch4)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
						</div>
					</div>
				</section>
				{/* // Form Check */}
			</PageBody>
			{/* // PageBody */}

			<PageFooter />
		</div>
	)
}
export default FormPage;