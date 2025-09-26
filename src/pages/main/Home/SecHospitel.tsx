import ScrollContainer from "react-indiana-drag-scroll";
import 'react-indiana-drag-scroll/dist/style.css';
import { Icon } from '../../../components/ui';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const hospitelKeywordData = [
    { id: 'item1', text: '脂肪吸引' },
    { id: 'item2', text: '脂肪移植' },
    { id: 'item3', text: '小顔注射' },
    { id: 'item4', text: '目の修正手術' },
    { id: 'item5', text: '脂肪吸引' },
    { id: 'item6', text: '脂肪移植' },
    { id: 'item7', text: '小顔注射' },
    { id: 'item8', text: '目の修正手術' },
];

const hospitelSlides = [
    {
        id: 'item1',
        link: './detail/ad-promotion-1', // 데모링크
        imageSrc: '/MH-User/images/data/thumb-hospitel-01.png',
        title: '제이앤성형외과',
        city: 'ソウル 江南区',
    },
    {
        id: 'item2',
        link: './detail/ad-promotion-2',
        imageSrc: '/MH-User/images/data/thumb-hospitel-02.png',
        title: '노엘의원',
        city: 'ソウル 瑞草区',
    },
    {
        id: 'item3',
        link: './detail/ad-promotion-3',
        imageSrc: '/MH-User/images/data/thumb-hospitel-03.png',
        title: '올리브성형외과',
        city: 'ソウル',
    },
];

const SecHospitel = () => {
	return (
        <section className='section module-a'>
            <div className="section-header mar-b10">
                <h2 className="section-h2">施術別 <em>人気の病院</em>はどこですか？</h2>
                <button type='button' className='btn btn-more'>
                    <Icon name='icn-more' />
                </button>
            </div>
            <div className="section-body">
                <ScrollContainer className="keyword-scroll">
                    <ul className='keyword-list'>
                        {hospitelKeywordData.map((item) => (
                            <li key={item.id}>
                                <button type='button' className='btn'>
                                    <span>{item.text}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </ScrollContainer>
                <ScrollContainer className="hospitel-scroll">
                    <ul className='hospitel-list'>
                    {hospitelSlides.map((slide) => (
                        <li className="hospitel-item" key={slide.id}>
                            <div className="hospitel-card" role="link">
                                <div className="hospitel-imge">
                                    <div className="thumb">
                                        <img src={slide.imageSrc} alt={slide.title} />
                                    </div>
                                </div>
                                <div className="hospitel-cont">
                                    <p className="title">{slide.title}</p>
                                    <p className="city">{slide.city}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                </ScrollContainer>
            </div>
        </section>
	)
}
export default SecHospitel;