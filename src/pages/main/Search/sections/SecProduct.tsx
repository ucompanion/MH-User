import { Icon } from "../../../../components/ui";

const productItemsData = [
    {
        id: 'double_eyelid_1',
        imageSrc: '/MH-User/images/data/thumb-product-01.png',
        title: '二重埋没法',
        summary: '糸でまぶたを留めて自然な二重を作る人気施術です。',
        price: '₩150,000 (約 ¥15,000)',
        sale: '30%OFF',
    },
    {
        id: 'rhinoplasty_2',
        imageSrc: '/MH-User/images/data/thumb-product-02.png',
        title: '鼻整形',
        summary: '鼻の形を整え、顔全体のバランスを改善します。',
        price: '₩500,000 (約 ¥50,000)',
        sale: '15%OFF',
    },
    {
        id: 'lifting_3',
        imageSrc: '/MH-User/images/data/thumb-product-03.png',
        title: 'リフティング',
        summary: 'たるんだ皮膚を引き上げ、若々しい印象を取り戻します。',
        price: '₩800,000 (約 ¥80,000)',
        sale: undefined, // sale이 없는 경우
    },
];

const SecProduct = () => {
    return (
        <section className='section module-a'>
            <div className="section-header">
                <h2 className="section-h2">部位別 <em>人気の商品</em>は何ですか？</h2>
                <button type='button' className='btn btn-more'>
                    <Icon name='icn-more' />
                </button>
            </div>
            <div className="section-body">
                <ul className="product-list">
                    {productItemsData.map((item) => (
                        <li className='product-item' key={item.id}>
                            <div className="product-card" role="link">
                                <div className="product-imge">
                                    <div className="thumb">
                                        <img src={item.imageSrc} alt={item.title} />
                                    </div>
                                </div>
                                <div className="product-cont">
                                    <p className="title">{item.title}</p>
                                    <p className="summary">{item.summary}</p>
                                    <p className="price">{item.price}</p>
                                    {item.sale && <p className="sale">{item.sale}</p>}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default SecProduct;