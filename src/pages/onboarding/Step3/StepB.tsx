import { Collapse } from 'react-bootstrap';
import { PageBody } from '../../../components/layouts';
import { useCallback, useEffect, useRef, useState } from 'react';
import SecStepB from './sections/SecStepB';

interface ChecklistItem {
    id: string;
    text: string;
    children?: ChecklistItem[];
}

const StepA = () => {
	// 토글
	const [open, setOpen] = useState(false);
    const pageActionRef = useRef<HTMLDivElement>(null);
    const [pageActionHeight, setPageActionHeight] = useState(0);
    const updatePageActionHeight = useCallback(() => {
        if (pageActionRef.current) {
            setPageActionHeight(pageActionRef.current.offsetHeight);
        }
    }, []);
	useEffect(() => {
        updatePageActionHeight();
		window.addEventListener('resize', updatePageActionHeight);
		return () => {
			window.removeEventListener('resize', updatePageActionHeight);
		};
	}, [updatePageActionHeight]);

	// 체크박스결과목록
	const [selectedChecklist, setSelectedChecklist] = useState<ChecklistItem[]>([]);
	const handleSelectedItemsUpdate = useCallback((selected: ChecklistItem[]) => {
		setSelectedChecklist(selected);
	}, []);
	return (
		<div className='page template-c'>
			<h1 className="blind">Onboarding</h1>

			{/* PageBody */}
			<PageBody menuClass="onboarding-wrap" optionClass="has-page-action">
				{/* Section: 관심있는 시술 선택 */}
				<SecStepB
					onSelectedItemsChange={handleSelectedItemsUpdate}
					pageActionHeight={pageActionHeight}
				/>

				<div className='page-action-sticky' ref={pageActionRef}>
					<div className='page-action'>
						<div className='medical-checklist-result'>
							<div className="total">
								<em>{selectedChecklist.length}</em>&nbsp;개 선택
								<button type='button' className='btn'
									onClick={() => setOpen(!open)}
									aria-controls="medicalChecklistCollapse"
									aria-expanded={open}
								>
									<span className='blind'>토글</span>
								</button>
							</div>
							<Collapse in={open}
								onEntered={updatePageActionHeight} // 펼치는 애니메이션 끝난 후 실행
								onExited={updatePageActionHeight}  // 접는 애니메이션이 끝난 후 실행
							>
								<div id="medicalChecklistCollapse">
									{selectedChecklist.length > 0 ? (
										<ul className='flex-w gap-10'>
										{selectedChecklist.map(item => (
											<li key={item.id}>{item.text}</li>
										))}
										</ul>
									) : (
										<p>선택된 시술이 없습니다.</p>
									)}
								</div>
							</Collapse>
						</div>
						<div className='btn-group module-a'>
							<button type='button' className='btn module-a line-normal'>
								<span>이전</span>
							</button>
							<button type='button' className='btn module-a fill-primary' disabled={true}>
								<span>다음</span>
							</button>
						</div>
					</div>
				</div>
			</PageBody>
			{/* // PageBody */}

		</div>
	)
}
export default StepA;