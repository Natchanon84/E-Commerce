import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function AllProducts({ apiCategories }) {
    const [dataCategories, setDataCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(apiCategories);
                const dataResponse = response.data;
                setDataCategories(dataResponse);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [apiCategories]); // เพิ่ม apiCategories ใน dependency array

    const imgBeauty = "https://png.pngtree.com/png-clipart/20230511/original/pngtree-3d-skin-care-products-exquisite-care-set-png-image_9157466.png";
    const imgFragrances = "https://img.freepik.com/premium-photo/perfume-bottle-isolated-white-background_900706-23621.jpg";
    const imgFurniture = "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/thumbnail.png";
    const imgGroceries = "https://cookesales.ca/wp-content/uploads/2020/03/PAPER50LB.jpg";
    const imgHomeDecoration = "https://cdn.dummyjson.com/products/images/home-decoration/Family%20Tree%20Photo%20Frame/thumbnail.png";
    const imgKitchenAccessories = "https://cdn.dummyjson.com/products/images/kitchen-accessories/Boxed%20Blender/thumbnail.png";
    const imgLaptops = "https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png";
    const imgMensShirts = "https://www.louisboyd.co.uk/media/catalog/product/imp/ort/P8675-38-0-001.jpg?width=240&height=300&store=default&image-type=small_image";
    const imgMensShoes = "https://cdn.dummyjson.com/products/images/mens-shoes/Puma%20Future%20Rider%20Trainers/thumbnail.png";
    const imgMensWatches = "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Cellini%20Moonphase/thumbnail.png";
    const imgMobileAccessories = "https://cdn.dummyjson.com/products/images/mobile-accessories/Amazon%20Echo%20Plus/thumbnail.png";
    const imgMotorcycle = "https://cdn.dummyjson.com/products/images/motorcycle/Generic%20Motorcycle/thumbnail.png";
    const imgSkinCare = "https://png.pngtree.com/png-clipart/20230501/original/pngtree-skin-care-products-3d-white-png-image_9129533.png";
    const imgSmartphones = "https://static0.makeuseofimages.com/wordpress/wp-content/uploads/2024/10/apple-iphone-16-plus-on-a-white-background.jpg";
    const imgSportsAccessories = "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Racket/thumbnail.png";
    const imgSunglasses = "https://sunglass.la/cdn/shop/products/1476a_c6e3c050-452e-446b-9013-db034333681b_2000x.jpg?v=1556565334";
    const imgTablets = "https://cdn.dummyjson.com/products/images/tablets/iPad%20Mini%202021%20Starlight/thumbnail.png";
    const imgTops = "https://image.goxip.com/mAYdphe6FjV6Nc3SS7vreCzNP9Y=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fcdn.yoox.biz%2F10%2F10242759LW_14_F.JPG";
    const imgVehicle = "https://i.ebayimg.com/images/g/zgwAAOSwLphmWYBU/s-l400.jpg";
    const imgWomensBags = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/40/4227262/1.jpg?7900";
    const imgWomensDresses = "https://i5.walmartimages.com/seo/Womens-Casual-Dress-Retro-Style-Tutu-Round-Sleeveless-White-Background-Black-Print-Dress_6719e6fc-7302-4e2a-8800-06bcff239a00.3af05abec29835aa7ab98972d5c88303.jpeg";
    const imgWomensJewellery = "https://m.media-amazon.com/images/I/51A99-0Qw4L._AC_.jpg";
    const imgWomensShoes = "https://cdn.dummyjson.com/products/images/womens-shoes/Red%20Shoes/thumbnail.png";
    const imgWomensWatches = "https://cdn.dummyjson.com/products/images/womens-watches/IWC%20Ingenieur%20Automatic%20Steel/thumbnail.png";

    const getImageUrl = (name) => {
        switch (name) {
            case "Beauty":
                return imgBeauty;
            case "Fragrances":
                return imgFragrances;
            case "Furniture":
                return imgFurniture;
            case "Groceries":
                return imgGroceries;
            case "Home Decoration":
                return imgHomeDecoration;
            case "Kitchen Accessories":
                return imgKitchenAccessories;
            case "Laptops":
                return imgLaptops;
            case "Mens Shirts":
                return imgMensShirts;
            case "Mens Shoes":
                return imgMensShoes;
            case "Mens Watches":
                return imgMensWatches;
            case "Mobile Accessories":
                return imgMobileAccessories;
            case "Motorcycle":
                return imgMotorcycle;
            case "Skin Care":
                return imgSkinCare;
            case "Smartphones":
                return imgSmartphones;
            case "Sports Accessories":
                return imgSportsAccessories;
            case "Sunglasses":
                return imgSunglasses;
            case "Tablets":
                return imgTablets;
            case "Tops":
                return imgTops;
            case "Vehicle":
                return imgVehicle;
            case "Womens Bags":
                return imgWomensBags;
            case "Womens Dresses":
                return imgWomensDresses;
            case "Womens Jewellery":
                return imgWomensJewellery;
            case "Womens Shoes":
                return imgWomensShoes;
            case "Womens Watches":
                return imgWomensWatches;
            default:
                return "https://via.placeholder.com/150"; // รูปภาพดีฟอลต์

        }
    }
    console.log(dataCategories);

    return (
        <>
        <p className="w-full text-center text-2xl font-bold ">All Product</p>
            <div className="container mx-auto w-full flex flex-wrap gap-5 mt-5 pb-10">
                {dataCategories.map((res) => (
                    <div key={res.slug}>
                        <Link to={`/${res.name.toLowerCase().replace(/\s+/g, '-')}`}>
                            <div className="gap-5 border p-3 flex flex-col bg-white transition-all duration-300 hover:scale-110">
                                <div className="w-64 ">
                                    <img src={getImageUrl(res.name)} alt={res.name} className="w-full  pb-5" />

                                </div>
                                <p>{res.name}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>

      
    );
}

export default AllProducts;
