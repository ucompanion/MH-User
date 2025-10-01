import { useState } from "react";
import { Checkbox } from "../../../../components/ui"

const regionItemsData = [
    { id: 'item1', text: '目' },
    { id: 'item2', text: '鼻' },
    { id: 'item3', text: 'バスト/\n体型' },
    { id: 'item4', text: '輪郭' },
    { id: 'item5', text: '毛髪' },
    { id: 'item6', text: '脱毛' },
    { id: 'item7', text: 'リフト・注入' },
    { id: 'item8', text: '美肌治療' },
    { id: 'item9', text: '歯科' },
    { id: 'item10', text: '漢方・その他' },
    { id: 'item11', text: '目' },
    { id: 'item12', text: '鼻' },
    { id: 'item13', text: 'バスト/\n体型' },
    { id: 'item14', text: '輪郭' },
    { id: 'item15', text: '毛髪' },
    { id: 'item16', text: '脱毛' },
    { id: 'item17', text: 'リフト・注入' },
    { id: 'item18', text: '美肌治療' },
    { id: 'item19', text: '歯科' },
    { id: 'item20', text: '漢方・その他' },
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
                <div className="section-step">3/4</div>
                <h1 className="section-h1">관심있는 시술이 있나요?</h1>
                <p className="section-explain">최대 N개까지 선택할 수 있어요.</p>
            </div>
            <div className="section-body">
                <div className='frm-checkbox-group demo-c'>
                    {regionItemsData.map((item) => (
                        <Checkbox
                            name="regionChk"
                            module="demo-c"
                            key={item.id}
                            value={item.id}
                            checked={regiongChk[item.id] || false}
                            disabled={false}
                            onChange={() => handleCheckboxClick(item.id)}
                        >
                            {item.text}
                        </Checkbox>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default SecStepA;