import { Parallax } from 'react-parallax';

const Cover = ({ image, title, }) => {
    return (
        <Parallax
            blur={{ min: -30, max: 30 }}
            bgImage={image}
            bgImageAlt="the menu"
            strength={400}
        >
            <div>
                <div className="hero h-[600px]">
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-center text-white bg-black bg-opacity-30 w-4/6 py-20">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                            <p className="mb-5 uppercase text-md font-bold">Would you like to try a dish?</p>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;