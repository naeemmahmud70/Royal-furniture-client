import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
import './Review.css'
import Loading from '../../Shared/Loading/Loading';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(' https://aqueous-taiga-74185.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <section className="mt-5">
            <div className="d-flex justify-content-center">
                <div className="text-center under-line">
                    <h1 className="fw-bold">Customer Reviews</h1>
                    <span className=""></span>
                </div>
            </div>
            <div className="m-5">
                {reviews.length === 0 && <Loading></Loading>}
            </div>
            <div >
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        320: {
                            width: 320,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 3,
                        },
                        1440: {
                            width: 1440,
                            slidesPerView: 4,
                        },
                        1919: {
                            width: 1919,
                            slidesPerView: 5,
                        },
                    }}
                >
                    {
                        reviews.map(review =>

                            <SwiperSlide>
                                <ReviewCard review={review} key={review._id} > </ReviewCard>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;