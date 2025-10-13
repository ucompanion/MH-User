import React, { useRef, useEffect, useState, useCallback } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Checkbox } from '../../../../components/ui';

interface ChecklistItem {
    id: string;
    text: string;
    children?: ChecklistItem[];
}

interface TabData {
    id: string;
    title: string;
    content: ChecklistItem[];
}

const TAB_DATA: TabData[] = [
    {
        id: 'tab1',
        title: '코',
        content: [
            { id: 'tab1_level2_1', text: '코 필러/코끝', children: [
                { id: 'tab1_level3_1', text: '코 필러 종류1' },
                { id: 'tab1_level3_2', text: '코 필러 종류2' },
                { id: 'tab1_level3_3', text: '코 하이코' },
            ]},
            { id: 'tab1_level2_2', text: '콧볼/콧대 라인', children: [
                { id: 'tab1_level3_4', text: '콧볼 축소 주사' },
                { id: 'tab1_level3_5', text: '콧대 보형물' },
            ]},
            { id: 'tab1_level2_3', text: '전체 코 성형', children: [
                { id: 'tab1_level3_6', text: '개방형 코 성형' },
                { id: 'tab1_level3_7', text: '비개방형 코 성형' },
            ]}
        ],
    },
    {
        id: 'tab2',
        title: '눈',
        content: [
            { id: 'tab2_level2_1', text: '쌍꺼풀', children: [
                { id: 'tab2_level3_1', text: '매몰법' },
                { id: 'tab2_level3_2', text: '절개법' },
                { id: 'tab2_level3_3', text: '부분절개법' },
            ]},
            { id: 'tab2_level2_2', text: '눈매 교정', children: [
                { id: 'tab2_level3_4', text: '비절개 눈매 교정' },
                { id: 'tab2_level3_5', text: '절개 눈매 교정' },
            ]},
            { id: 'tab2_level2_3', text: '트임 성형', children: [
                { id: 'tab2_level3_6', text: '앞트임' },
                { id: 'tab2_level3_7', text: '뒤트임' },
                { id: 'tab2_level3_8', text: '밑트임' },
            ]}
        ],
    },
    {
        id: 'tab3',
        title: '피부',
        content: [
            { id: 'tab3_level2_1', text: '여드름/모공', children: [
                { id: 'tab3_level3_1', text: '아쿠아 필' },
                { id: 'tab3_level3_2', text: '프락셀 레이저' },
            ]},
            { id: 'tab3_level2_2', text: '색소/홍조', children: [
                { id: 'tab3_level3_3', text: '토닝' },
                { id: 'tab3_level3_4', text: 'IPL' },
            ]},
        ],
    },
    {
        id: 'tab4',
        title: '입술',
        content: [
            { id: 'tab4_level2_1', text: '여드름/모공', children: [
                { id: 'tab4_level3_1', text: '아쿠아 필' },
                { id: 'tab4_level3_2', text: '프락셀 레이저' },
            ]},
            { id: 'tab4_level2_2', text: '색소/홍조', children: [
                { id: 'tab4_level3_3', text: '토닝' },
                { id: 'tab4_level3_4', text: 'IPL' },
            ]},
        ]
    },
    {
        id: 'tab5',
        title: '얼굴라인',
        content: [
            { id: 'tab5_level2_1', text: '여드름/모공', children: [
                { id: 'tab5_level3_1', text: '아쿠아 필' },
                { id: 'tab5_level3_2', text: '프락셀 레이저' },
            ]},
            { id: 'tab5_level2_2', text: '색소/홍조', children: [
                { id: 'tab5_level3_3', text: '토닝' },
                { id: 'tab5_level3_4', text: 'IPL' },
            ]},
        ]
    },
    {
        id: 'tab6',
        title: '지방/체형',
        content: [
            { id: 'tab6_level2_1', text: '여드름/모공', children: [
                { id: 'tab6_level3_1', text: '아쿠아 필' },
                { id: 'tab6_level3_2', text: '프락셀 레이저' },
            ]},
            { id: 'tab6_level2_2', text: '색소/홍조', children: [
                { id: 'tab6_level3_3', text: '토닝' },
                { id: 'tab6_level3_4', text: 'IPL' },
            ]},
        ]
    },
];

// 이 부분을 컴포넌트 외부에 배치하여 한 번만 초기화
const processTabData = (data: TabData[]) => {
    const itemMap = new Map<string, ChecklistItem>();
    const parentMap = new Map<string, string>(); // childId -> parentId

    data.forEach(tab => {
        // 탭 자체는 ChecklistItem으로 모델링하지 않으므로 itemMap에 직접 추가하지 않음
        // 하지만 부모-자식 관계 추적을 위해 부모 ID로서의 tab.id는 알고 있어야 함

        tab.content.forEach(dep2Item => {
            itemMap.set(dep2Item.id, dep2Item);
            parentMap.set(dep2Item.id, tab.id); // dep2의 부모는 탭 ID

            dep2Item.children?.forEach(dep3Item => {
                itemMap.set(dep3Item.id, dep3Item);
                parentMap.set(dep3Item.id, dep2Item.id); // dep3의 부모는 dep2 ID
            });
        });
    });
    return { itemMap, parentMap };
};
const { itemMap, parentMap } = processTabData(TAB_DATA);

interface MyCustomScrollspyTabsProps {
    onSelectedItemsChange: (selected: ChecklistItem[]) => void;
    pageActionHeight: number;
}

const SecStepB = ({ onSelectedItemsChange, pageActionHeight }: MyCustomScrollspyTabsProps) => {
    /////////////////////////////////////////// 체크 박스 //////////////////////////////////////////////
    // 체크기능: useState
    const [selectedItems, setSelectedItems] = useState<{ [id: string]: boolean }>({}); // 체크박스 상태 관리
    const tabKeys = TAB_DATA.map(tab => tab.id); // 탭 키를 TAB_DATA에서 동적으로 생성

    // 체크기능: 모든 체크박스 ID를 추출하는 헬퍼 함수
    const getAllItemIds = useCallback((items: ChecklistItem[]): string[] => {
        let ids: string[] = [];
        items.forEach(item => {
            ids.push(item.id);
            if (item.children) {
                ids = ids.concat(getAllItemIds(item.children));
            }
        });
        return ids;
    }, []);

    // 체크기능: 부모-자식 관계를 기반으로 부모의 체크 상태를 업데이트하는 함수
    const updateParentCheckboxState = useCallback((currentSelectedItems: { [id: string]: boolean }, changedItemId: string) => {
        const newItems = { ...currentSelectedItems };
        let currentChildId: string | undefined = changedItemId;

        // 변경된 항목부터 부모 체인을 따라 올라가며 업데이트
        while (currentChildId) {
            const parentId = parentMap.get(currentChildId);
            if (!parentId) break;
            const parentItem = itemMap.get(parentId);
            let childrenOfParent: ChecklistItem[] | undefined;
            if (parentItem) {
                childrenOfParent = parentItem.children;
            } else if (tabKeys.includes(parentId)) {
                const tabData = TAB_DATA.find(tab => tab.id === parentId);
                childrenOfParent = tabData?.content;
            }

            // 모든 자식들이 체크되었는지 확인
            if (childrenOfParent && childrenOfParent.length > 0) {
                const allChildrenChecked = childrenOfParent.every(child => !!newItems[child.id]);
                newItems[parentId] = allChildrenChecked;
            } else {
            }
            currentChildId = parentId;
        }
        return newItems;
    }, [tabKeys]);

    // 체크기능: 체크박스 클릭 핸들러
    const handleCheckboxClick = useCallback((clickedId: string) => {
        setSelectedItems(prevSelectedItems => {
            let newSelectedItems = { ...prevSelectedItems };
            const currentStatus = !!prevSelectedItems[clickedId];

            // 클릭된 항목의 ID를 기반으로 해당 항목과 모든 하위 항목을 찾음
            const findItemAndDescendants = (idToFind: string, items: ChecklistItem[]): ChecklistItem | undefined => {
                for (const item of items) {
                    if (item.id === idToFind) {
                        return item;
                    }
                    if (item.children) {
                        const foundChild = findItemAndDescendants(idToFind, item.children);
                        if (foundChild) return foundChild;
                    }
                }
                return undefined;
            };

            // 탭 데이터를 순회하며 클릭된 항목을 찾음
            let clickedItem: ChecklistItem | undefined = undefined;
            for (const tab of TAB_DATA) {
                clickedItem = findItemAndDescendants(clickedId, tab.content);
                if (clickedItem) break;
            }

            if (!clickedItem) return prevSelectedItems; // 찾지 못하면 상태 변경 없음

            // 해당 항목과 모든 하위 항목의 ID를 가져옴
            const idsToToggle = getAllItemIds([clickedItem]);

            // 상태 토글
            idsToToggle.forEach(id => {
                newSelectedItems[id] = !currentStatus;
            });

            newSelectedItems = updateParentCheckboxState(newSelectedItems, clickedId);

            return newSelectedItems;
        });
    }, [getAllItemIds, updateParentCheckboxState]);

    // 선택된 항목이 변경될 때마다 부모 컴포넌트에 전달하는 useEffect
    useEffect(() => {
        const currentlySelectedFullItems: ChecklistItem[] = [];
        Object.keys(selectedItems).forEach(id => {
            if (selectedItems[id]) {
                const fullItem = itemMap.get(id);
                if (fullItem) {
                    currentlySelectedFullItems.push(fullItem);
                }
            }
        });
        onSelectedItemsChange(currentlySelectedFullItems);
    }, [selectedItems, onSelectedItemsChange]);

    /////////////////////////////////////////// 스파이 스크롤 //////////////////////////////////////////////
    // 스파이스크롤: useState
    const [activeTabKey, setActiveTabKey] = useState<string>('tab1');
    const tabsRef = useRef<HTMLDivElement>(null);

    // 스파이스크롤: Dom 계산처리
    useEffect(() => {
        const stickyTabsHeight = tabsRef.current ? tabsRef.current.offsetHeight : 0;
        const scrollOffset = stickyTabsHeight + 10;
        const handleScroll = () => {
            const currentScrollY = window.scrollY || document.documentElement.scrollTop;
            // const effectiveViewportBottom = window.innerHeight - pageActionHeight;
            let newActiveKey = '';
            for (let i = tabKeys.length - 1; i >= 0; i--) {
                const key = tabKeys[i];
                const section = document.getElementById(key);
                if (section) {
                    if (currentScrollY + scrollOffset >= section.offsetTop) {
                        newActiveKey = key;
                        break;
                    }
                }
            }

            if (newActiveKey && newActiveKey !== activeTabKey) {
                setActiveTabKey(newActiveKey);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        console.log('pageActionHeight:', pageActionHeight);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeTabKey, tabKeys, pageActionHeight]);

    // 스파이스크롤: 탭 활성화
    const handleTabSelect = useCallback((key: string | null) => {
        if (key) {
            setActiveTabKey(key);
            const section = document.getElementById(key);
            const stickyTabsHeight = tabsRef.current ? tabsRef.current.offsetHeight : 0;
            if (section) {
                window.scrollTo({
                    top: section.offsetTop - stickyTabsHeight,
                    behavior: 'smooth',
                });
            }
        }
    }, []);

    // 스파이스크롤: 마지막 패널의 공간처리
    const calculatePaddingBottom = useCallback(() => {
        const stickyHeight = tabsRef.current ? tabsRef.current.offsetHeight : 0;
        const viewportHeight = window.innerHeight;
        const lastTabKey = tabKeys[tabKeys.length - 1];
        const lastTabPaneElement = document.getElementById(lastTabKey);
        const lastContentInnerElement = lastTabPaneElement?.querySelector('.medical-checklist') as HTMLDivElement;
        const lastContentInnerHeight = lastContentInnerElement ? lastContentInnerElement.offsetHeight : 0;
        const availableViewportHeightBelowSticky = viewportHeight - stickyHeight - pageActionHeight;
        let neededPadding = Math.max(0, availableViewportHeightBelowSticky - lastContentInnerHeight);
        const minExtraPadding = 0;
        return Math.max(neededPadding, minExtraPadding);
    }, [tabKeys, pageActionHeight]);

    useEffect(() => {
        const currentlySelectedFullItems: ChecklistItem[] = [];
        Object.keys(selectedItems).forEach(id => {
        if (selectedItems[id]) {
            const fullItem = itemMap.get(id);
            if (fullItem) {
            currentlySelectedFullItems.push(fullItem);
            }
        }
        });
        onSelectedItemsChange(currentlySelectedFullItems);
    }, [selectedItems, onSelectedItemsChange]);

    return (
        <section className='section module-b'>
            <div className="section-header">
                <div className="section-step">3/4</div>
                <h1 className="section-h2">관심있는 시술이 있나요?</h1>
                <p className="section-explain">최대 N개까지 선택할 수 있어요.</p>
            </div>
            <div className="section-body">
                <div className='tab-sticky' ref={tabsRef}>
                    <Tabs
                        id="manualScrollspyTabs"
                        activeKey={activeTabKey}
                        onSelect={handleTabSelect}
                        className="tab demo-a"
                    >
                        {TAB_DATA.map(tab => (
                            <Tab key={tab.id} eventKey={tab.id} title={tab.title} />
                        ))}
                    </Tabs>
                </div>

                <Tab.Content style={{ paddingBottom: `${calculatePaddingBottom()}px` }}>
                    {TAB_DATA.map(tab => (
                        <Tab.Pane key={tab.id} eventKey={tab.id} id={tab.id} className='active show'>
                            <div className="medical-checklist">
                                <h2 className="category-title">{tab.title}</h2>
                                {tab.content.length > 0 ? (
                                    <ul className='dep2-list'> {/* 2뎁스 목록 시작 */}
                                        {tab.content.map((dep2Item) => (
                                            <li className='dep2-item' key={dep2Item.id}>
                                                <div className="dep2-chk">
                                                    <Checkbox
                                                        name="procedureChk" // name 변경: regionChk -> procedureChk 등 더 적절한 이름으로
                                                        className="module-a"
                                                        value={dep2Item.id}
                                                        checked={selectedItems[dep2Item.id] || false}
                                                        onChange={() => handleCheckboxClick(dep2Item.id)}
                                                        disabled={false}
                                                    >
                                                        {dep2Item.text}
                                                    </Checkbox>
                                                </div>
                                                {dep2Item.children && dep2Item.children.length > 0 && (
                                                    <ul className='dep3-list'> {/* 3뎁스 목록 시작 */}
                                                        {dep2Item.children.map((dep3Item) => (
                                                            <li className='dep3-item' key={dep3Item.id}>
                                                                <div className="dep3-chk">
                                                                    <Checkbox
                                                                        name="procedureChk"
                                                                        className="module-a"
                                                                        value={dep3Item.id}
                                                                        checked={selectedItems[dep3Item.id] || false}
                                                                        onChange={() => handleCheckboxClick(dep3Item.id)}
                                                                        disabled={false}
                                                                    >
                                                                        {dep3Item.text}
                                                                    </Checkbox>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>해당 부위의 시술 정보가 없습니다.</p>
                                )}
                            </div>
                        </Tab.Pane>
                    ))}
                </Tab.Content>
            </div>
        </section>
    );
};

export default SecStepB;