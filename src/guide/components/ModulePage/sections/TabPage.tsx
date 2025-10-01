import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const TabPage = () => {
	return (
		<section className='section module-guide'>
			<div className="section-header">
				<h2 className='section-h2'>Tabs</h2>
			</div>
			<div className="section-body">
				<h3 className="content-h3">demo-a</h3>
				<Tabs
					id="tabModuleA"
					defaultActiveKey="profile"
					className="tab demo-a"
				>
					<Tab eventKey="home" title="Home">
						Tab content for Home
					</Tab>
					<Tab eventKey="profile" title="Profile">
						Tab content for Profile
					</Tab>
					<Tab eventKey="contact" title="Contact">
						Tab content for Contact
					</Tab>
				</Tabs>

				<h3 className="content-h3">demo-b</h3>
				<Tabs
					id="tabModuleA"
					defaultActiveKey="tab1"
					className="tab demo-b"
				>
					<Tab eventKey="tab1" title="코">
						코
					</Tab>
					<Tab eventKey="tab2" title="눈">
						눈
					</Tab>
					<Tab eventKey="tab3" title="피부">
						피부
					</Tab>
					<Tab eventKey="tab4" title="입술">
						입술
					</Tab>
					<Tab eventKey="tab5" title="얼굴라인">
						얼굴라인
					</Tab>
					<Tab eventKey="tab6" title="지방/체형">
						지방/체형
					</Tab>
				</Tabs>
			</div>
		</section>
	)
}
export default TabPage;