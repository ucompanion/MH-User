import { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import type SwiperClass from 'swiper';
import 'swiper/css';

const SwiperPage = () => {
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
		<section className='section module-guide'>
			<div className="section-header">
				<h2 className='section-h2'>Swiper</h2>
			</div>
			<div className="section-body">
				<h3 className="content-h3">demo-a</h3>
                <div className="swiper-custom" ref={swiperCustomElRef}>
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
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
                        <SwiperSlide style={{ background: '#f0f0f0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>Slide 1</div>
                        </SwiperSlide>
                        <SwiperSlide style={{ background: '#e0e0e0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>Slide 2</div>
                        </SwiperSlide>
                        <SwiperSlide style={{ background: '#d0d0d0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>Slide 3</div>
                        </SwiperSlide>
                        <SwiperSlide style={{ background: '#c0c0c0', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div>Slide 4</div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="swiper-navigation">
                        <button type='button' className="swiper-navigation-prev"></button>
                        <button type='button' className="swiper-navigation-next"></button>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className='swiper-autoplay'>
                        <button className="swiper-autoplay-start" onClick={handlePlay}><span className="blind">자동 재생 시작</span></button>
                        <button className="swiper-autoplay-pause" onClick={handlePause}><span className="blind">자동 재생 정지</span></button>
                    </div>
                </div>
			</div>
		</section>
	)
}
export default SwiperPage;