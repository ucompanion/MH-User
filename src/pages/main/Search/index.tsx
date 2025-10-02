import { Icon, SearchForm } from '../../../components/ui';
import { PageBody, PageHeader } from '../../../components/layouts';
import SecPopular from './sections/SecPopular';
import SecRegion from './sections/SecRegion';

interface PageProps {
    menu?: string;
	// pageCase?: string; // case prop이 있을 수도, 없을 수도 있음
}

const Search: React.FC<PageProps> = (props) => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<SearchForm val="" />
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody menuClass="search-wrap">
				{/* Section: 인기검색어 */}
				<SecPopular />

				{/* Section: 고민분위 */}
				<SecRegion />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default Search;