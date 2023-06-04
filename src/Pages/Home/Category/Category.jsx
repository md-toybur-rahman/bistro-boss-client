import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section>
            <SectionTitle
                subheading={"From 11.00am to 10.00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/qMxTcbP/slide1.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/SvdRYN9/slide2.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/XYzMJNx/slide3.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/qMxTcbP/slide1.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/3S4GWVt/slide4.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Desserts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/qMxTcbP/slide1.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/SvdRYN9/slide2.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/XYzMJNx/slide3.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/qMxTcbP/slide1.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Salad</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/3S4GWVt/slide4.jpg" alt="" />
                        <h3 className="text-4xl uppercase text-center -mt-16 text-white  mb-20">Desserts</h3>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default Category;