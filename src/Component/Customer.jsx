import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../Styles/main.css";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';



function Customer() {
    return ( 
        <section className="customer" id="customer">
            <div className="container">
                <h2 class="section-title">What our customer are saying</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    grabCursor={true}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="customer-Swiper"
                    >
                    <SliderButtons/>
                    <SwiperSlide>
                        <div className="card">
                            <div className="card-inner">
                                <img src="./about-profile.png" alt="" />
                                <div className="card-inner-text">
                                    <h2>Ibiloye Olusegun</h2>
                                    <p>Founder QRC</p>
                                </div>
                            </div>
                            <div className="card-detail">
                                <p>"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely"</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className="card">
                                <div className="card-inner">
                                    <img src="./about-profile.png" alt="" />
                                    <div className="card-inner-text">
                                        <h2>Ibiloye Kelvin</h2>
                                        <p>Founder QRC</p>
                                    </div>
                                </div>
                                <div className="card-detail">
                                    <p>"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely"</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className="card">
                                <div className="card-inner">
                                    <img src="./about-profile.png" alt="" />
                                    <div className="card-inner-text">
                                        <h2>Ibiloye Kayode</h2>
                                        <p>Founder QRC</p>
                                    </div>
                                </div>
                                <div className="card-detail">
                                    <p>"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely"</p>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className="card">
                                <div className="card-inner">
                                    <img src="./about-profile.png" alt="" />
                                    <div className="card-inner-text">
                                        <h2>Ibiloye Ogo'oluwa</h2>
                                        <p>Founder QRC</p>
                                    </div>
                                </div>
                                <div className="card-detail">
                                    <p>"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls or administrative hassle) and securely"</p>
                                </div>
                            </div>
                    </SwiperSlide>
                </Swiper>
                   
            </div>
        </section>
     );
}

export default Customer;

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="customer-button">
            <button onClick={()=> swiper.slidePrev()}><FaArrowLeft/></button>
            <button onClick={()=> swiper.slideNext()}><FaArrowRight/></button>
        </div>
    )
}
