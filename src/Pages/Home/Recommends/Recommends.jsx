import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

const Recommends = () => {
    const [recommends, setRecommends] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const salads = data.filter(salad => salad.category === 'salad')
                setRecommends(salads);
            })
    }, [])
    console.log(recommends);
    return (
        <section>
            <SectionTitle
                subheading={"Should Try"}
                heading={"Chef Recommends"}
            ></SectionTitle>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        recommends.map(recommend =>
                            <SwiperSlide key={recommend._id} className="mb-10">
                                <div className="card w-96 bg-base-100 shadow-xl  min-h-[500px]">
                                    <figure className="px-10 pt-10">
                                        <img src={recommend.image} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{recommend.name}</h2>
                                        <p>{recommend.recipe}</p>
                                        <div className="card-actions">
                                            <button className="btn bg-gray-300 border-b-4 mt-3 hover:border-b-yellow-600 border-b-yellow-600 border-0 text-yellow-600 uppercase">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Recommends;