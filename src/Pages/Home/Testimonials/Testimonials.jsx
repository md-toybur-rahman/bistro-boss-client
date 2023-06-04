import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Rating, RoundedStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    const myStyles = {
        itemShapes: RoundedStar,
        activeFillColor: 'rgb(202, 138, 4)',
        inactiveFillColor: 'rgb(107, 114, 128)'
    }
    return (
        <section className="my-20">
            <SectionTitle
                subheading={"What Our Client Say"}
                heading={"Testimonials"}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="text-center m-24 flex flex-col items-center gap-10">
                                <Rating
                                    style={{ maxWidth: 200 }}
                                    value={review.rating}
                                    itemStyles={myStyles}
                                    readOnly
                                />
                                <p>{review.details}</p>
                                <h3 className="text-4xl text-yellow-600">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;