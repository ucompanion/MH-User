import { Icon, Nodata, SearchForm } from '../../../components/ui';
import { PageBody, PageHeader } from '../../../components/layouts';

interface PageProps {
    menu?: string;
	// pageCase?: string; // case prop이 있을 수도, 없을 수도 있음
}

const SearchNodata: React.FC<PageProps> = (props) => {
	return (
		<div className='page template-b'>
			{/* PageHeader */}
			<PageHeader>
				<div className="title-area">
					<button type='button' className='btn btn-back'>
						<Icon name='icn-back'/>
						<span className="blind">뒤로가기</span>
					</button>
					<SearchForm val="코" />
				</div>
			</PageHeader>
			{/* // PageHeader */}

			{/* PageBody */}
			<PageBody pageName="search-wrap">
				<Nodata
					name='module-a'
					title='검색결과가 없습니다.'
					summary='고민 부위와 후기를 검색해 보세요.'
				 />
			</PageBody>
			{/* // PageBody */}
		</div>
	)
}
export default SearchNodata;