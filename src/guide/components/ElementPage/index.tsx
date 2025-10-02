import { Icon } from '../../../components/ui';
import { PageBody,  PageHeader } from '../../../components/layouts';

const ElementPage = () => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">Elements Components</h1>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="template-b">
				{/* Buttons */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Buttons</h2>
						<p className="section-explain">옵션과 모듈 외 특이사항은 컨텐츠 가이드로 분류한다.</p>
					</div>
					<div className="section-body">
						<h3 className="content-h3">[Options]</h3>
						<button type='button' className='btn demo-c fill-normal'>
							<span>fill-normal</span>
						</button>
						<button type='button' className='btn demo-c fill-primary'>
							<span>fill-primary</span>
						</button>
						<button type='button' className='btn demo-c fill-secondary'>
							<span>fill-secondary</span>
						</button>
						<button type='button' className='btn demo-c fill-dark'>
							<span>fill-dark</span>
						</button>
						<br /><br />
						<button type='button' className='btn demo-c line-normal'>
							<span>line-normal</span>
						</button>
						<button type='button' className='btn demo-c line-primary'>
							<span>line-primary</span>
						</button>
						<button type='button' className='btn demo-c line-secondary'>
							<span>line-secondary</span>
						</button>
						<button type='button' className='btn demo-c line-dark'>
							<span>line-dark</span>
						</button>
						<br /><br />
						<button type='button' className='btn demo-c none-normal'>
							<span>none-normal</span>
						</button>
						<button type='button' className='btn demo-c none-primary'>
							<span>none-primary</span>
						</button>
						<button type='button' className='btn demo-c none-secondary'>
							<span>none-secondary</span>
						</button>
						<button type='button' className='btn demo-c none-dark'>
							<span>none-dark</span>
						</button>

						<h3 className="content-h3">module-a (Action Button)</h3>
						<button type='button' className='btn module-a fill-normal'>
							<span>module-a</span>
						</button>
						<button type='button' className='btn module-a fill-primary'>
							<span>module-a</span>
						</button>
						<button type='button' className='btn module-a fill-secondary'>
							<span>module-a</span>
						</button>
						<button type='button' className='btn module-a fill-dark'>
							<span>module-a</span>
						</button>

						<h3 className="content-h3">module-b (Form Button)</h3>
						<button type='button' className='btn demo-b fill-normal'>
							<span>module-b</span>
						</button>
						<button type='button' className='btn demo-b fill-primary'>
							<span>module-b</span>
						</button>
						<button type='button' className='btn demo-b fill-secondary'>
							<span>module-b</span>
						</button>
						<button type='button' className='btn demo-b fill-dark'>
							<span>module-b</span>
						</button>

						<h3 className="content-h3">module-d (Module Button)</h3>
						<button type='button' className='btn demo-c fill-normal'>
							<span>module-c</span>
						</button>
						<button type='button' className='btn demo-c fill-primary'>
							<span>module-c</span>
						</button>
						<button type='button' className='btn demo-c fill-secondary'>
							<span>module-c</span>
						</button>
						<button type='button' className='btn demo-c fill-dark'>
							<span>module-c</span>
						</button>

						<h3 className="content-h3">module-e (Link Button)</h3>
						<button type='button' className='btn demo-d none-normal'>
							<span>module-d</span>
						</button>
						<button type='button' className='btn demo-d none-primary'>
							<span>module-d</span>
						</button>
						<button type='button' className='btn demo-d none-secondary'>
							<span>module-d</span>
						</button>
						<button type='button' className='btn demo-d none-dark'>
							<span>module-d</span>
						</button>
					</div>
				</section>
				{/* // Buttons */}

				<hr className="divider module-a" />

				{/* Labels */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Labels</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">[Options]</h3>
						<span className='label demo-a fill-normal'>fill-normal</span>
						<span className='label demo-a fill-primary'>fill-primary</span>
						<span className='label demo-a fill-secondary'>fill-secondary</span>
						<span className='label demo-a fill-dark'>fill-dark</span>
						<br /><br />
						<span className='label demo-a line-normal'>line-normal</span>
						<span className='label demo-a line-primary'>line-primary</span>
						<span className='label demo-a line-secondary'>line-secondary</span>
						<span className='label demo-a line-dark'>line-dark</span>
						<br /><br />
						<span className='label demo-a none-normal'>none-normal</span>
						<span className='label demo-a none-primary'>none-primary</span>
						<span className='label demo-a none-secondary'>none-secondary</span>
						<span className='label demo-a none-dark'>none-dark</span>
						<br /><br />
						<span className='label demo-a fill-item1'>fill-item1</span>
						<span className='label demo-a fill-item2'>fill-item2</span>
						<span className='label demo-a fill-item3'>fill-item3</span>

						<h3 className="content-h3">module-a (Basic Label)</h3>
						<span className='label module-a'>module-a</span>

						<h3 className="content-h3">demo-b (Items Label)</h3>
						<span className='label demo-a line-item1'>module-a</span>
						<span className='label demo-a line-item2'>module-a</span>
						<span className='label demo-a line-item3'>module-a</span>

						<h3 className="content-h3">demo-c (States Label)</h3>
						<span className='label demo-b fill-normal'>module-b</span>
						<span className='label demo-b fill-primary'>module-b</span>
						<span className='label demo-b fill-secondary'>module-b</span>
						<span className='label demo-b fill-dark'>module-b</span>
					</div>
				</section>
				{/* // Labels */}

				<hr className="divider module-a" />

				{/* Dividers */}
				<section className='section module-guide'>
					<div className="section-header">
						<h2 className='section-h2'>Dividers</h2>
					</div>
					<div className="section-body">
						<h3 className="content-h3">module-a (Section Divider)</h3>
						<hr className="divider module-a" />
					</div>
				</section>
				{/* // Dividers */}
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default ElementPage;