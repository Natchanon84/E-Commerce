import { Link } from 'react-router-dom';

function Section2({ dataCategories }) {
    const urlImgFurniture = "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png";
    const urlImgHomeDecoration = "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png";
    const urlImgKitchenAccessories = "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png";
    const urlImgMobileAccessories = "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png";
    const urlImgSmartphones = "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2024/10/apple-iphone-16-plus-on-a-white-background.jpg";
    const urlImgTablets = "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png";

    const getImageUrl = (name) => {
        switch (name) {
            case "Furniture":
                return urlImgFurniture;
            case "Home Decoration":
                return urlImgHomeDecoration;
            case "Kitchen Accessories":
                return urlImgKitchenAccessories;
            case "Mobile Accessories":
                return urlImgMobileAccessories;
            case "Smartphones":
                return urlImgSmartphones;
            case "Tablets":
                return urlImgTablets;
            default:
                return "";
        }
    };

    return (
        <div className="bg-gray-50 pt-10">
            <div className="container mx-auto flex flex-wrap gap-16 justify-center items-center  -solid -gray-300 bg-white pt-8 pb-24 w-2/3">
                {dataCategories
                    .filter(res => ["Furniture", "Home Decoration", "Kitchen Accessories", "Tablets", "Smartphones", "Mobile Accessories"].includes(res.name))
                    .map(res => (
                        <div key={res.name}>
                            <Link to={`/${res.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                <div className="box w-80 h-80">
                                    <img src={getImageUrl(res.name)} alt={res.name} className="w-full h-full transition-all duration-300 hover:scale-110" />
                                    <p className="text-center text-xl mt-2 font-bold ">{res.name}</p>
                                    <p className="text-center text-xs font-bold text-black/40">{Math.floor(Math.random() * (15 - 5 + 1)) + 5} PRODUCTS</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Section2;
