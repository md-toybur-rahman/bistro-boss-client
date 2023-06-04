import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel centerMode centerSlidePercentage={70} autoPlay infiniteLoop>
                <div>
                    <img src="https://i.ibb.co/2qDkPRY/01.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/sb3m6W8/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/7KMCZQM/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/p1MWGHR/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/nr3pG3r/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/m6QBHJt/06.png" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;