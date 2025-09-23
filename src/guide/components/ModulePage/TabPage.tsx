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

				<h3 className="content-h3">module-b</h3>
				<Tabs
					id="tabModuleA"
					defaultActiveKey="profile"
					className="tab demo-b"
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
			</div>
		</section>
	)
}
export default TabPage;