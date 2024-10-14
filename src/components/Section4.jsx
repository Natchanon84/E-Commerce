import { Link } from "react-router-dom";
import banner from "/banner.jpg"
import banner2 from "/banner2.jpg"
function Section4({ dataLaptop, dataTablet, dataMobileAccessories, dataHomeDecoration, dataKitchenAccessories, dataMensShirts, dataWomensDresses }) {

    // ฟังก์ชันสำหรับการสุ่มเลือก 4 รายการ
    const getRandomItems = (arr, num) => {
        const shuffled = arr.sort(() => 0.5 - Math.random()); // สุ่มข้อมูล
        return shuffled.slice(0, num); // เลือก 4 รายการแรก
    };
    const randomLaptop = getRandomItems(dataLaptop, 4);
    const randomTablet = getRandomItems(dataTablet, 4);
    const randomMobileAccessories = getRandomItems(dataMobileAccessories, 4);
    const randomHomeDecoration = getRandomItems(dataHomeDecoration, 4);
    const randomKitchenAccessories = getRandomItems(dataKitchenAccessories, 4);
    const randomMensShirts = getRandomItems(dataMensShirts, 4);
    const randomWomensDresses = getRandomItems(dataWomensDresses, 4);


    return (
        <div className="bg-gray-50">
            <div className="container mx-auto flex flex-wrap justify-center items-center bg-white w-2/3 h-auto pb-10">
                <div className="header flex flex-row items-end w-full mb-0">
                    <p className="text-2xl font-bold ml-5 mt-3">Laptops</p>
                    <Link to={`/laptops`}>
                        <button className="text-xl font-bold text-sky-500 ml-5 justify-end">See more</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    {randomLaptop.length > 0 ? (
                        randomLaptop.map(res => (
                            <div key={res.id} className="flex flex-col w-60">
                                <Link to={`/product/${res.id}`}>
                                    <img src={res.thumbnail} className="transition-all duration-300 hover:scale-110" />
                                </Link>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <p className="font-bold text-gray-500">${res.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>


            <div className="container mx-auto flex flex-wrap justify-center items-center  -solid -gray-300 bg-white w-2/3 h-auto pb-10 mt-10">
                <div className="header flex flex-row items-end w-full mb-0">
                    <p className="text-2xl font-bold ml-5 mt-3">Mobile Accessories</p>
                    <Link to={`/mobile-accessories`}>
                        <button className="text-xl font-bold text-sky-500 ml-5 justify-end">See more</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-12 mt-5">
                    {randomMobileAccessories.length > 0 ? (
                        randomMobileAccessories.map(res => (
                            <div key={res.id} className="flex flex-col w-60">
                                <Link to={`/product/${res.id}`}>
                                    <img src={res.thumbnail} className="transition-all duration-300 hover:scale-110" />
                                </Link>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <p className="font-bold text-gray-500">${res.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>


            <div className="container mx-auto flex flex-wrap justify-center items-center  -solid -gray-300 bg-white w-2/3 h-auto pb-10 mt-10">
                <div className="header flex flex-row items-end w-full mb-0">
                    <p className="text-2xl font-bold ml-5 mt-3">Tablet</p>
                    <Link to={`/tablets`}>
                        <button className="text-xl font-bold text-sky-500 ml-5 justify-end">See more</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    {randomTablet.length > 0 ? (
                        randomTablet.map(res => (
                            <div key={res.id} className="flex flex-col w-60">
                                <Link to={`/product/${res.id}`}>
                                    <img src={res.thumbnail} className="transition-all duration-300 hover:scale-110" />
                                </Link>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <p className="font-bold text-gray-500">${res.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>


            <div className="constiner flex justify-center mt-10 w-2/3 m-auto">
                <Link to="/laptops">
                    <img src={banner} className="w-full" />
                </Link>
            </div>


            <div className="container mx-auto flex flex-wrap justify-center items-center  -solid -gray-300 bg-white w-2/3 h-auto pb-10 mt-10">
                <div className="header flex flex-row items-end w-full mb-0">
                    <p className="text-2xl font-bold ml-5 mt-3">Home Decoration</p>
                    <Link to={`/home-decoration`}>
                        <button className="text-xl font-bold text-sky-500 ml-5 justify-end">See more</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-12 mt-5">
                    {randomHomeDecoration.length > 0 ? (
                        randomHomeDecoration.map(res => (
                            <div key={res.id} className="flex flex-col w-60">
                                <Link to={`/product/${res.id}`}>
                                    <img src={res.thumbnail} className="transition-all duration-300 hover:scale-110" />
                                </Link>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <p className="font-bold text-gray-500">${res.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>


            <div className="container mx-auto flex flex-wrap justify-center items-center  -solid -gray-300 bg-white w-2/3 h-auto pb-10 mt-10">
                <div className="header flex flex-row items-end w-full mb-0">
                    <p className="text-2xl font-bold ml-5 mt-3">Kitchen Accessories</p>
                    <Link to={`/kitchen-accessories`}>
                        <button className="text-xl font-bold text-sky-500 ml-5 justify-end">See more</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-12 mt-5">
                    {randomKitchenAccessories.length > 0 ? (
                        randomKitchenAccessories.map(res => (
                            <div key={res.id} className="flex flex-col w-60">
                                <Link to={`/product/${res.id}`}>
                                    <img src={res.thumbnail} className="transition-all duration-300 hover:scale-110" />
                                </Link>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <p className="font-bold text-gray-500">${res.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>

            <div className="constiner flex justify-center mt-10 w-2/3 m-auto">
                    <Link to="/allproducts">
                    <img src={banner2} className="w-full" />
                    </Link>

                
            </div>


            <div className="container mx-auto flex flex-wrap justify-center items-center  -solid -gray-300 bg-white w-2/3 h-auto pb-10 mt-10">
                <div className="header flex flex-row items-end w-full mb-0">
                    <p className="text-2xl font-bold ml-5 mt-3">Mens Shirts</p>
                    <Link to={`/mens-shirts`}>
                        <button className="text-xl font-bold text-sky-500 ml-5 justify-end">See more</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-12 mt-5">
                    {randomMensShirts.length > 0 ? (
                        randomMensShirts.map(res => (
                            <div key={res.id} className="flex flex-col w-60">
                                <Link to={`/product/${res.id}`}>
                                    <img src={res.thumbnail} className="transition-all duration-300 hover:scale-110" />
                                </Link>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <p className="font-bold text-gray-500">${res.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>


            <div className="container mx-auto flex flex-wrap justify-center items-center  -solid -gray-300 bg-white w-2/3 h-auto pb-10 mt-10">
                <div className="header flex flex-row items-end w-full mb-0">
                    <p className="text-2xl font-bold ml-5 mt-3">Womens Dresses</p>
                    <Link to={`/womens-dresses`}>
                        <button className="text-xl font-bold text-sky-500 ml-5 justify-end">See more</button>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-center gap-12 mt-5">
                    {randomWomensDresses.length > 0 ? (
                        randomWomensDresses.map(res => (
                            <div key={res.id} className="flex flex-col w-60">
                                <Link to={`/product/${res.id}`}>
                                    <img src={res.thumbnail} className="transition-all duration-300 hover:scale-110" />
                                </Link>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <p className="font-bold text-gray-500">${res.price}</p>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Section4
