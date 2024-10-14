import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "/wireless-headphone.png"
import img2 from "/grooming.png"
import img3 from "/video-games.png"
import sale from "/sale_2.svg"

function Section3({ apiLimit50 }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(apiLimit50);
                const fetchedData = res.data.products;
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        // console.log(data);
    }, [data]);

    function getRandomItems(arr, num) {
        const shuffled = [...arr].sort(() => 0.5 - Math.random()); // สุ่มการเรียงลำดับ
        return shuffled.slice(0, num); // เลือก num อันจาก array
    }

    const randomData = getRandomItems(data, 8); // สุ่ม 8 อันจาก data

    return (
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto flex flex-wrap justify-start items-center  -solid -gray-300 bg-white w-2/3 h-auto pb-10">
                <div className="header flex items-end w-full my-5">
                    <p className="text-2xl font-bold ml-5">Today's best deal</p>
                </div>
                <div className="flex flex-wrap justify-center gap-12">
                    {
                        randomData.map(res => (
                            <div key={res.id} className="w-64 h-auto p-2 relative">
                                <div className="relative">
                                    <Link to={`/product/${res.id}`}>
                                        <img src={res.thumbnail} className="w-full h-auto  transition-all duration-300 hover:scale-110" />
                                    </Link>
                                    <img src={sale} className="absolute top-0 left-0 z-20 w-12" />
                                </div>
                                <p className="text-lg font-bold mt-1">{res.title}</p>
                                <div className="flex mt-0.5">
                                    <img />
                                    <p className="mr-1 font-bold text-gray-400 line-through">${res.price}</p>
                                    <p className="font-bold">${parseFloat((res.price - (res.price * res.discountPercentage / 100)).toFixed(2))}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-center items-center w-2/3 mt-8  gap-x-14">
                <div className="w-96 h-64 bg-gray-200 relative">
                    <p className="text-6xl font-bolder p-5 z-20 relative">Wireless Headphones</p>
                    <p className="text-gray-400  ml-5 z-10">Starting at $49</p>
                    <Link to="/allproducts">
                        <button className="text-white font-bold bg-sky-500 w-1/4 rounded-md ml-5 mt-2 p-2 z-10">Shop Now</button>
                    </Link>
                    <img src={img1} className="z-10 absolute inset-5 w-36 ml-44 object-cover" />
                </div>
                <div className="w-96 h-64 bg-gray-300 relative">
                    <p className="text-6xl font-bolder p-5 z-20 relative">Hair <br />Clipper</p>
                    <p className="text-gray-400 ml-5 z-10">Starting at $49</p>
                    <Link to="/allproducts">
                        <button className="text-white font-bold bg-sky-500 w-1/4 rounded-md ml-5 mt-2 p-2 z-10">Shop Now</button>
                    </Link>
                    <img src={img2} className="z-10 absolute inset-5 w-20 ml-52 mt-2 object-cover" />
                </div>
                <div className="w-96 h-64 bg-yellow-200 relative">
                    <p className="text-6xl font-bolder p-5 z-20 relative ">Video Games</p>
                    <p className="text-gray-400 ml-5 z-10">Starting at $49</p>
                    <Link to="/allproducts">
                        <button className="text-white font-bold bg-sky-500 w-1/4 rounded-md ml-5 mt-2 p-2 z-10">Shop Now</button>
                    </Link>
                    <img src={img3} className="z-10 absolute inset-5 w-36 ml-52 mt-2 object-cover" />
                </div>
            </div>
        </div>
    )
}

export default Section3;
