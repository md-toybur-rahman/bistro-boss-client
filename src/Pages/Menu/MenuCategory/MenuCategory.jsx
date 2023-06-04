import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import { Link } from 'react-router-dom';


const MenuCategory = ({ items, title, coverImg, category }) => {
    return (
        <div className="pt-10 mb-28">
            {
                title && <Cover image={coverImg} title={title}></Cover>
            }
            <div className="grid gap-10 md:grid-cols-2 my-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/order/${category}`}>
                <button className="btn btn-outline text-Black border-1 border-b-4 border-b-yellow-600 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;