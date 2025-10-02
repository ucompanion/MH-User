import { Icon } from '../../../components/ui';
import { PageBody, PageFooter, PageHeader } from '../../../components/layouts';
import TabPage from './sections/TabPage';
import AccordionPage from './sections/AccordionPage';
import PopoverPage from './sections/PopoverPage';
import ModalPage from './sections/ModalPage';
import SwiperPage from './sections/SwiperPage';

const ModulePage = () => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<h1 className="page-h1">Modules Components</h1>
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="template-b">
				<TabPage />
				<hr className="divider module-a" />
				<AccordionPage />
				<hr className="divider module-a" />
				<PopoverPage />
				<hr className="divider module-a" />
				<ModalPage />
				<hr className="divider module-a" />
				<SwiperPage />
			</PageBody>
			{/* // PageBody */}

			<PageFooter />
		</div>
	)
}
export default ModulePage;