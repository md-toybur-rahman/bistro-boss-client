import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './Features.css'


const Features = () => {
    return (
        <section className="features-item bg-fixed text-white pt-10 my-20">
            <SectionTitle
                subheading={"Check it out"}
                heading={"Featured Item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36 gap-10">
                <div>
                    <img src="https://i.ibb.co/HYNT19z/featured.jpg" alt="" />
                </div>
                <div>
                    <p className="text-lg">Aug 20, 2029</p>
                    <p className="uppercase text-lg">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis facilis mollitia aspernatur odio vel culpa possimus adipisci placeat, voluptate, nisi sit laudantium harum autem asperiores sunt consequuntur quae, esse explicabo nemo doloribus non? Rerum quisquam sit nesciunt illum quae corporis quod sapiente? Sapiente vel suscipit, minima ab magni eos? Ullam!</p>
                    <button className="btn btn-outline text-white border-0 border-b-4 border-b-yellow-600 mt-4">Order Now</button>
                </div>
            </div>
        </section>
    );
};

export default Features;