

const MenuItem = ( { item } ) => {
    const { image, price, name, recipe} = item;
    return (
        <div className="flex gap-2">
            <img className="w-[120px]" style={{borderRadius: "0 50% 50% 50%"}} src={image} alt="" />
            <div>
                <h3 className="uppercase text-lg">{name}-------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">{price}</p>
        </div>
    );
};

export default MenuItem;