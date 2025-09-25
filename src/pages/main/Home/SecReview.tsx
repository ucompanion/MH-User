import { Icon } from "../../../components/ui";

const reviewItems = [
    {
        id: 'item1',
        link: './detail/ad-promotion-1', // 데모링크
        avataSrc: '/MH-User/images/data/avata-user-01.jpg',
        beforeSrc: '/MH-User/images/data/thumb-review-01-before.jpg',
        afterSrc: '/MH-User/images/data/thumb-review-01-after.jpg',
        nicname: 'グローバル美人',
        date: '2025.09.24',
        title: '二重切開・鼻プロテーゼ',
        summary: "手術から半年ほど経ち、ようやく鼻が自然に落ち着いてきました。全体的にとても満足しています。",
    },
    {
        id: 'item2',
        link: './detail/ad-promotion-1', // 데모링크
        avataSrc: '/MH-User/images/data/avata-user-02.png',
        beforeSrc: '/MH-User/images/data/thumb-review-02-before.jpg',
        afterSrc: '/MH-User/images/data/thumb-review-02-after.jpg',
        nicname: 'グローバル美人',
        date: '2025.09.24',
        title: '二重切開・鼻プロテーゼ',
        summary: "手術から半年ほど経ち、ようやく鼻が自然に落ち着いてきました。全体的にとても満足しています。",
    },
];

const SecReview = () => {
    return (
        <section className='section module-a'>
            <div className="section-header">
                <h2 className="section-h2"><em>生のレビュー</em>を確認してみましょう！</h2>
                <button type='button' className='btn btn-more'>
                    <Icon name='icn-more' />
                </button>
            </div>
            <div className="section-body">
                <ul className="review-list">
                {reviewItems.map((item) => (
                    <li className="review-item" key={item.id}>
                        <div className="review-card" role="link">
                            <div className="review-profile">
                                <div className="avata">
                                    <img src={item.avataSrc} alt={item.nicname} />
                                </div>
                                <div className="cont">
                                    <p className="nicname">{item.nicname}</p>
                                    <p className="date">施術日<span>{item.date}</span></p>
                                </div>
                            </div>
                            <div className="review-image">
                                <div className="thumb">
                                    <img src={item.beforeSrc} alt="before review" />
                                    <span className="label">Before</span>
                                </div>
                                <div className="thumb">
                                    <img src={item.afterSrc} alt="after review" />
                                    <span className="label">After</span>
                                </div>
                            </div>
                            <div className="review-cont">
                                <p className="title">{item.title}</p>
                                <p className="summery">{item.summary}</p>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </section>
    )
}
export default SecReview;