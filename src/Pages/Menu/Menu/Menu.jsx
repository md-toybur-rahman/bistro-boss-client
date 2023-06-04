// import { Helmet } from 'react-helmet-async';
import Cover from '../../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import useHelmet from '../../../Hooks/useHelmet';



const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            {useHelmet('Menu')}
            <Cover image={"https://i.ibb.co/Tc7scwK/banner3.jpg"} title="Our Menu"></Cover>
            {/* main cover */}
            <SectionTitle subheading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert menu items */}
            <MenuCategory items={dessert} category="dessert" title={"Dessert"} coverImg="https://i.ibb.co/M6SXtTv/dessert-bg.jpg"></MenuCategory>
            {/* Soup menu items */}
            <MenuCategory items={soup} category="soup" title={"Soup"} coverImg="https://i.ibb.co/BzgwfVt/soup-bg.jpg"></MenuCategory>
            {/* salad menu items */}
            <MenuCategory items={salad} category="salad" title={"Salad"} coverImg="https://i.ibb.co/Qcq97HD/salad-bg.jpg"></MenuCategory>
            {/* pizza menu items */}
            <MenuCategory items={pizza} category="pizza" title={"Pizza"} coverImg="https://i.ibb.co/rt4wH2Z/pizza-bg.jpg"></MenuCategory>

        </div>
    );
};

export default Menu;