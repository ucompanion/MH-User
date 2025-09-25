import { Icon } from "../../../components/ui";

const doctorItems = [
    {
        id: 'item1',
        link: './detail/ad-promotion-1', // 데모링크
        imageSrc: '/MH-User/images/data/thumb-doctor-01.jpg',
        nameKO: '김태규',
        nameCC: '代表院長',
        agencyKO: '브라운성형외과',
        agencyCC: 'ソウル・江南',
        tags: ["脂肪吸引", "リフトアップ"],
    },
    {
        id: 'item2',
        link: './detail/ad-promotion-2',
        imageSrc: '/MH-User/images/data/thumb-doctor-02.jpg',
        nameKO: '김태규',
        nameCC: '代表院長',
        agencyKO: '브라운성형외과',
        agencyCC: 'ソウル・江南',
        tags: ["脂肪吸引", "リフトアップ"],
    },
    {
        id: 'item3',
        link: './detail/ad-promotion-3',
        imageSrc: '/MH-User/images/data/thumb-doctor-03.jpg',
        nameKO: '김태규',
        nameCC: '代表院長',
        agencyKO: '브라운성형외과',
        agencyCC: 'ソウル・江南',
        tags: ["脂肪吸引", "リフトアップ"],
    },
];

const SecDoctor = () => {
    return (
        <section className='section module-a'>
            <div className="section-header mar-b10">
                <h2 className="section-h2">気になる部位に合った<em>医師</em>は誰ですか？</h2>
                <button type='button' className='btn btn-more'>
                    <Icon name='icn-more' />
                </button>
            </div>
            <div className="section-body">
                <ul className="doctor-list">
                {doctorItems.map((item) => (
                    <li className="doctor-item" key={item.id}>
                        <div className="doctor-card" role="link">
                            <div className="doctor-image">
                                <div className="thumb">
                                    <img src={item.imageSrc} alt={item.nameCC} />
                                </div>
                            </div>
                            <div className="doctor-cont">
                                <p className="title">{item.nameKO} ({item.nameCC})</p>
                                <p className="agency">{item.agencyKO} ({item.agencyCC})</p>
                                <div className="tags">
                                    {item.tags.map((tag, index) => (
                                        <span className="label module-a" key={index}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </section>
    )
}
export default SecDoctor;