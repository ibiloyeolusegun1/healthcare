import React from "react";
import "../Styles/main.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';

// import "swiper/swiper.min.css";
// import "swiper/modules/pagination/pagination.min.css";




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
                    className="mySwiper"
                    >
                    <SwiperSlide>
                        <div className="row">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
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
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="row">
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
                        </div>
                    </SwiperSlide>
                </Swiper>
                   
            </div>
        </section>
     );
}

export default Customer;