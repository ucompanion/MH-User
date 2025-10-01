import { Checkbox, Radio, Icon } from '../../../components/ui';
import { PageBody, PageFooter, PageHeader } from '../../../components/layouts';
import { useState } from 'react';

const FormPage = () => {
	// Checkbox/Radio Demo1
	const [checkbox11, setCheckbox11] = useState(false);
	const [checkbox12, setCheckbox12] = useState(true);
	const [checkbox13, setCheckbox13] = useState(false);
	const [checkbox14, setCheckbox14] = useState(true);
	const [radio11, setRadio11] = useState('radio12');
	const [radio12, setRadio12] = useState('radio22');

	// Checkbox/Radio Demo2
	const [checkbox21, setCheckbox21] = useState(false);
	const [checkbox22, setCheckbox22] = useState(true);
	const [checkbox23, setCheckbox23] = useState(false);
	const [checkbox24, setCheckbox24] = useState(true);
	const [radio21, setRadio21] = useState('radio12');
	const [radio22, setRadio22] = useState('radio22');

	// Checkbox/Radio Demo3
	const [checkbox31, setCheckbox31] = useState(false);
	const [checkbox32, setCheckbox32] = useState(true);
	const [checkbox33, setCheckbox33] = useState(false);
	const [checkbox34, setCheckbox34] = useState(true);
	const [radio31, setRadio31] = useState('radio12');
	const [radio32, setRadio32] = useState('radio32');

	// Switch Demo1
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
			<PageBody pageName="template-b">
				{/* Form Textfeild */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Form Input</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">demo-a</h3>
						<div className='frm-input demo-a'>
							<input type="text" className='input' placeholder='Placeholder' />
						</div>
						<br />
						<div className='frm-input demo-a'>
							<input type="text" className='input' value={"Valued"} />
						</div>
						<br />
						<div className='frm-input demo-a'>
							<input type="text" className='input' value={"Disabled"} disabled />
						</div>
						<br />
						<div className='frm-input demo-a is-errored'>
							<input type="text" className='input' value={"Errored"} />
						</div>
						<br />
						<div className='frm-input demo-a'>
							<textarea name="" id="" cols={10} rows={5} className='textarea'></textarea>
							<p className='bytes'><span className="count">0</span> / <span className="total">100Bytes</span></p>
						</div>
						<br />
						<div className='frm-input demo-a'>
							<textarea name="" id="" cols={10} rows={5} className='textarea'></textarea>
							<p className='bytes'><span className="count">0</span> / <span className="total">100Bytes</span></p>
						</div>

						{/* <h3 className="content-h3">Select</h3> */}
						<br />
						<div className="frm-input demo-a">
							<select name="" id="" className='select'>
								<option value="">전체</option>
							</select>
						</div>
						<br />
						<div className="frm-input demo-a">
							<select name="" id="" className='select' disabled>
								<option value="">전체</option>
							</select>
						</div>

						<h3 className="content-h3">.frm-input-group</h3>
						<p>[Default]</p>
						<div className="frm-input-group">
							<div className='frm-input demo-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
							<div className='frm-input demo-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
						</div>
						<br />
						<p>&gt; .flex-a</p>
						<div className="frm-input-group">
							<div className='frm-input demo-a flex-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
							<div className="frm-split">~</div>
							<div className='frm-input demo-a flex-a'>
								<input type="text" className='input' placeholder='Placeholder' />
							</div>
						</div>
					</div>
				</section>
				{/* // Form Textfeild */}

				<hr className="divider module-a" />

				{/* Form Check */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Form Check/Radio</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">demo-a</h3>
						<div className='frm-checkbox-group demo-a'>
							<Checkbox
								name="demo1Checkbox"
								module="demo-a"
								checked={checkbox11}
								disabled={false}
								onClick={()=>{setCheckbox11(!checkbox11)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo1Checkbox"
								module="demo-a"
								checked={checkbox12}
								disabled={false}
								onClick={()=>{setCheckbox12(!checkbox12)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo1Checkbox"
								module="demo-a"
								checked={checkbox13}
								disabled={true}
								onClick={()=>{setCheckbox13(!checkbox13)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo1Checkbox"
								module="demo-a"
								checked={checkbox14}
								disabled={true}
								onClick={()=>{setCheckbox14(!checkbox14)}}
							>
								Checkbox
							</Checkbox>
						</div>
						<br />
						<div className='frm-radio-group demo-a'>
							<Radio
								name="demo1Radio1"
								module="demo-a"
								checked={radio11 === 'radio11'}
								disabled={false}
								onClick={()=>{setRadio11('radio11')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo1Radio1"
								module="demo-a"
								checked={radio11 === 'radio12'}
								disabled={false}
								onClick={()=>{setRadio11('radio12')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo1radio1"
								module="demo-a"
								checked={radio12 === 'radio11'}
								disabled={true}
								onClick={()=>{setRadio12('radio11')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo1radio1"
								module="demo-a"
								checked={radio12 === 'radio12'}
								disabled={true}
								onClick={()=>{setRadio12('radio12')}}
							>
								Radio
							</Radio>
						</div>

						<h3 className="content-h3">demo-b</h3>
						<div className='frm-checkbox-group demo-b'>
							<Checkbox
								name="demo2Checkbox"
								module="demo-b"
								checked={checkbox21}
								disabled={false}
								onClick={()=>{setCheckbox21(!checkbox21)}}
							>
								<strong className='label-tit'>Title</strong>
								<span className='label-txt'>Summary</span>
							</Checkbox>
							<Checkbox
								name="demo2Checkbox"
								module="demo-b"
								checked={checkbox22}
								disabled={false}
								onClick={()=>{setCheckbox22(!checkbox22)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo2Checkbox"
								module="demo-b"
								checked={checkbox23}
								disabled={true}
								onClick={()=>{setCheckbox23(!checkbox23)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo2Checkbox"
								module="demo-b"
								checked={checkbox24}
								disabled={true}
								onClick={()=>{setCheckbox24(!checkbox24)}}
							>
								Checkbox
							</Checkbox>
						</div>
						<br />
						<div className='frm-radio-group demo-b'>
							<Radio
								name="demo2Radio1"
								module="demo-b"
								checked={radio21 === 'radio11'}
								disabled={false}
								onClick={()=>{setRadio21('radio11')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo2Radio1"
								module="demo-b"
								checked={radio21 === 'radio12'}
								disabled={false}
								onClick={()=>{setRadio21('radio12')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo2Radio2"
								module="demo-b"
								checked={radio22 === 'radio21'}
								disabled={true}
								onClick={()=>{setRadio22('radio21')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo2Radio2"
								module="demo-b"
								checked={radio22 === 'radio22'}
								disabled={true}
								onClick={()=>{setRadio22('radio22')}}
							>
								Radio
							</Radio>
						</div>

						<h3 className="content-h3">demo-c</h3>
						<div className='frm-checkbox-group demo-c'>
							<Checkbox
								name="demo3Checkbox"
								module="demo-c"
								checked={checkbox31}
								disabled={false}
								onClick={()=>{setCheckbox31(!checkbox31)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo3Checkbox"
								module="demo-c"
								checked={checkbox32}
								disabled={false}
								onClick={()=>{setCheckbox32(!checkbox32)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo3Checkbox"
								module="demo-c"
								checked={checkbox33}
								disabled={true}
								onClick={()=>{setCheckbox33(!checkbox33)}}
							>
								Checkbox
							</Checkbox>
							<Checkbox
								name="demo3Checkbox"
								module="demo-c"
								checked={checkbox34}
								disabled={true}
								onClick={()=>{setCheckbox34(!checkbox34)}}
							>
								Checkbox
							</Checkbox>
						</div>
						<br />
						<div className='frm-radio-group demo-c'>
							<Radio
								name="demo3Radio1"
								module="demo-c"
								checked={radio31 === 'radio11'}
								disabled={false}
								onClick={()=>{setRadio31('radio11')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo3Radio1"
								module="demo-c"
								checked={radio31 === 'radio12'}
								disabled={false}
								onClick={()=>{setRadio31('radio12')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo3Radio3"
								module="demo-c"
								checked={radio32 === 'radio31'}
								disabled={true}
								onClick={()=>{setRadio32('radio31')}}
							>
								Radio
							</Radio>
							<Radio
								name="demo3Radio3"
								module="demo-c"
								checked={radio32 === 'radio32'}
								disabled={true}
								onClick={()=>{setRadio32('radio32')}}
							>
								Radio
							</Radio>
						</div>
					</div>
				</section>
				{/* // Form Check */}

				<hr className="divider module-a" />

				{/* Form Switch */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Form Switch</h2>
					</div>
					<div className="section-body">
						<div className='flex-nw gap-10'>
							<label className='frm-switch demo-a'>
								<input type="checkbox" name='demoSwitch1' checked={switch1} onClick={()=>{setSwitch1(!switch1)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
							<label className='frm-switch demo-a'>
								<input type="checkbox" name='demoSwitch2' checked={switch2} onClick={()=>{setSwitch2(!switch2)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
							<label className='frm-switch demo-a'>
								<input type="checkbox" name='demoSwitch3' disabled checked={switch3} onClick={()=>{setSwitch3(!switch3)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
							<label className='frm-switch demo-a'>
								<input type="checkbox" name='demoSwitch4' disabled checked={switch4} onClick={()=>{setSwitch4(!switch4)}} />
								<span className='track'><span className="blind">Switch</span></span>
							</label>
						</div>
					</div>
				</section>
				{/* Form Switch */}
			</PageBody>
			{/* // PageBody */}

			<PageFooter />
		</div>
	)
}
export default FormPage;