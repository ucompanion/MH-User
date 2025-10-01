import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const PopoverPage = () => {
	const popover = (
		<Popover id="popover-basic">
			<Popover.Header as="h3">팝오버 제목</Popover.Header>
			<Popover.Body>
				여기에 팝오버 내용을 입력하면 돼.
			</Popover.Body>
		</Popover>
	);
	return (
		<section className='section module-guide'>
			<div className="section-header">
				<h2 className='section-h2'>Popover</h2>
			</div>
			<div className="section-body">
				<h3 className="content-h3">Content Title</h3>
				<OverlayTrigger trigger="click" placement="auto" overlay={popover} rootClose>
					<button type='button'>클릭하면 팝오버가 나타나!</button>
				</OverlayTrigger>
			</div>
		</section>
	)
}
export default PopoverPage;