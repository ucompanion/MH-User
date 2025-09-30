const regionItemsData = [
    { id: 'item1', name: 'img-region-01.png', text: '目', },
    { id: 'item2', name: 'img-region-02.png', text: '鼻' },
    { id: 'item3', name: 'img-region-03.png', text: 'バスト/\n体型' },
    { id: 'item4', name: 'img-region-04.png', text: '輪郭' },
    { id: 'item5', name: 'img-region-05.png', text: '毛髪' },
    { id: 'item6', name: 'img-region-06.png', text: '脱毛' },
    { id: 'item7', name: 'img-region-07.png', text: 'リフト・\n注入' },
    { id: 'item8', name: 'img-region-08.png', text: '美肌治療' },
    { id: 'item9', name: 'img-region-09.png', text: '歯科' },
    { id: 'item10', name: 'img-region-10.png', text: '漢方・\nその他' },
];

const SecRegion = () => {
    return (
        <section className='section module-a'>
            <div className="section-header">
                <h2 className="section-h2">気になる<em>部位</em>はありますか？</h2>
            </div>
            <div className="section-body">
                <ul className='region-list'>
                    {regionItemsData.map((item) => (
                        <li className='region-item' key={item.id}>
                            <button type='button' className='btn'>
                                <img src={"/MH-User/images/contents/"+item.name} alt="" />
                                <span>{item.text}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default SecRegion;