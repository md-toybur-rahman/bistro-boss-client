import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
// import { useState, useEffect } from "react";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popularItem = menu.filter(item => item.category === 'popular')

    return (
        <section>
            <SectionTitle
                subheading={"Popular Items"}
                heading={"From Our Menu"}>

            </SectionTitle>
            <div className="grid gap-10 md:grid-cols-2 mb-20">
                {
                    popularItem.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;