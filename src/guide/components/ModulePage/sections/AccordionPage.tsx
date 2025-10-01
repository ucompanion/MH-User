import { Accordion } from "react-bootstrap";

const AccordionPage = () => {
	return (
		<section className='section module-guide'>
			<div className="section-header">
				<h2 className='section-h2'>Accordions</h2>
			</div>
			<div className="section-body">
				<h3 className="content-h3">module-a</h3>
				<Accordion defaultActiveKey="0">
					<Accordion.Item eventKey="0">
						<Accordion.Header>Accordion Item #1</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
					<Accordion.Item eventKey="1">
						<Accordion.Header>Accordion Item #2</Accordion.Header>
						<Accordion.Body>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
							minim veniam, quis nostrud exercitation ullamco laboris nisi ut
							aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
							culpa qui officia deserunt mollit anim id est laborum.
						</Accordion.Body>
					</Accordion.Item>
				</Accordion>
			</div>
		</section>
	)
}
export default AccordionPage;