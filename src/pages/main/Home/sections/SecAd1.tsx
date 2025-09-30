import { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type SwiperClass from 'swiper';
import 'swiper/css';

const adSlides = [
    {
        id: 'item1',
        link: './detail/ad-promotion-1', // 데모링크
        imageSrc: '/MH-User/images/data/img-ad-01.png',
        altText: '이벤트 광고 1',
    },
    {
        id: 'item2',
        link: './detail/ad-promotion-2',
        imageSrc: '/MH-User/images/data/img-ad-02.png',
        altText: '새로운 서비스 광고 2',
    },
    {
        id: 'item3',
        link: './detail/ad-promotion-3',
        imageSrc: '/MH-User/images/data/img-ad-03.png',
        altText: '기간 한정 할인 광고 3',
    },
    {
        id: 'item4',
        link: './detail/ad-promotion-4',
        imageSrc: '/MH-User/images/data/img-ad-04.png',
        altText: '기간 한정 할인 광고 3',
    },
];

const SecAd1 = () => {
    const swiperRef = useRef<SwiperClass | null>(null);
    const swiperCustomElRef = useRef<HTMLDivElement>(null);

    const updateRunningClass = useCallback(() => {
        if (swiperCustomElRef.current && swiperRef.current) {
            const isAutoplayRunning = swiperRef.current.autoplay.running;
            if (isAutoplayRunning) {
                swiperCustomElRef.current.classList.remove('is-pause');
            } else {
                swiperCustomElRef.current.classList.add('is-pause');
            }
        }
    }, []);

    const handlePlay = () => {
        if (swiperRef.current && swiperRef.current.autoplay.running === false) {
            swiperRef.current.autoplay.start();
        }
    };

    const handlePause = () => {
        if (swiperRef.current && swiperRef.current.autoplay.running === true) {
            swiperRef.current.autoplay.stop();
        }
    };
	return (
        <section className='section fluid'>
            <div className="section-header blind">
                <h2 className="section-h2">병원 광고 배너</h2>
            </div>
            <div className="section-body">
                <div className="swiper-custom ad-swiper" ref={swiperCustomElRef}>
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        threshold={3}
                        pagination={{
                            el: '.ad-swiper .swiper-pagination',
                            clickable: false,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false, // 사용자 상호작용 후에도 자동 재생 유지
                            // pauseOnMouseEnter: true, // (선택 사항) 마우스가 슬라이드 위에 있을 때 자동 재생 일시정지
                        }}
                        // onSlideChange={(swiper: SwiperClass) => console.log('Swiper 변경됨', swiper)}
                        onSwiper={(swiper: SwiperClass) => {
                            swiperRef.current = swiper;
                            updateRunningClass();
                        }}
                        onAutoplayStart={updateRunningClass}
                        onAutoplayStop={updateRunningClass}
                    >
                    {adSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <a href={slide.link} target='_blank' rel='noopener noreferrer'>
                                <img src={slide.imageSrc} alt={slide.altText} />
                            </a>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <div className="swiper-controller">
                        <div className="swiper-pagination"></div>
                        <div className='swiper-autoplay'>
                            <button className="swiper-autoplay-start" onClick={handlePlay}><span className="blind">자동 재생 시작</span></button>
                            <button className="swiper-autoplay-pause" onClick={handlePause}><span className="blind">자동 재생 정지</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	)
}
export default SecAd1;