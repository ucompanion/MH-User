import { useState } from "react";
import { Checkbox } from "../../../../components/ui"; // Checkbox 컴포넌트 수정 반영

// `id`는 string 타입이므로, `Record<string, boolean>`에 맞게 정의
const regionItemsData = [
    { id: 'item1', filename: 'img-region-01.png', text: '目' },
    { id: 'item2', filename: 'img-region-02.png', text: '鼻' },
    { id: 'item3', filename: 'img-region-03.png', text: 'バスト/\n体型' },
    { id: 'item4', filename: 'img-region-04.png', text: '輪郭' },
    { id: 'item5', filename: 'img-region-05.png', text: '毛髪' },
    { id: 'item6', filename: 'img-region-06.png', text: '脱毛' },
    { id: 'item7', filename: 'img-region-07.png', text: 'リフト・注入' },
    { id: 'item8', filename: 'img-region-08.png', text: '美肌治療' },
    { id: 'item9', filename: 'img-region-09.png', text: '歯科' },
    { id: 'item10', filename: 'img-region-10.png', text: '漢方・その他' },
];

const SecStepA = () => {
    const initialCheckboxStates: Record<string, boolean> = regionItemsData.reduce(
        (acc, item) => ({ ...acc, [item.id]: false }), {}
    );
    const [regiongChk, setRegiongChk] = useState<Record<string, boolean>>(initialCheckboxStates);
    const handleCheckboxClick = (itemId: string) => {
        setRegiongChk(prevStates => ({
            ...prevStates,
            [itemId]: !prevStates[itemId],
        }));
    };

    return (
        <section className='section module-b'>
            <div className="section-header">
                <div className="section-step">2/4</div>
                <h1 className="section-h2">고민하는 부위가 어딘가요?</h1>
                <p className="section-explain">최대 N개까지 선택할 수 있어요.</p>
            </div>
            <div className="section-body">
                <ul className='region-choice-list'>
                    {regionItemsData.map((item) => (
                        <li className='region-item' key={item.id}>
                            <Checkbox
                                name="regionChk"
                                className="region"
                                value={item.id}
                                checked={regiongChk[item.id] || false}
                                disabled={false}
                                onChange={() => handleCheckboxClick(item.id)}
                            >
                                <span className="label-img">
                                    <img src={"/MH-User/images/contents/" + item.filename} alt="" />
                                </span>
                                <span className="label-txt">{item.text}</span>
                            </Checkbox>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default SecStepA;