import { Icon } from '../../../components/ui';
import { PageBody, PageFooter, PageHeader } from '../../../components/layouts';
import TabPage from './TabPage';
import AccordionPage from './AccordionPage';
import PopoverPage from './PopoverPage';
import ModalPage from './ModalPage';

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
			<PageBody template="template-a">
				<TabPage />
				<AccordionPage />
				<PopoverPage />
				<ModalPage />
			</PageBody>
			{/* // PageBody */}

			<PageFooter />
		</div>
	)
}
export default ModulePage;