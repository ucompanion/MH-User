import ScrollContainer from "react-indiana-drag-scroll";
import 'react-indiana-drag-scroll/dist/style.css';

const popularKeywordData = [
    { id: 'popular1', text: '脂肪吸引' },
    { id: 'popular2', text: '脂肪移植' },
    { id: 'popular3', text: '小顔注射' },
    { id: 'popular4', text: '目の修正手術' },
    { id: 'popular5', text: '脂肪吸引' },
    { id: 'popular6', text: '脂肪移植' },
    { id: 'popular7', text: '小顔注射' },
    { id: 'popular8', text: '目の修正手術' },
];

const SecPopular = () => {
    return (
        <ScrollContainer className='section popular-section'>
            <div className="section-header">
                <h2 className="section-h2">人気キーワード</h2>
            </div>
            <div className="section-body">
                <ul className='keyword-list'>
                    {popularKeywordData.map((item) => (
                        <li key={item.id}>
                            <button type='button' className='btn'>
                                <span>{item.text}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </ScrollContainer>

    )
}
export default SecPopular;