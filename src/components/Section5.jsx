import { Link } from "react-router-dom"
import banner3 from "/banner3.jpg"
import logo1 from "/logo1.svg"
import logo2 from "/logo2.svg"
import logo3 from "/logo3.svg"
import logo4 from "/logo4.svg"
import logo5 from "/logo5.svg"
import logo6 from "/logo6.svg"
import star from "/star.svg"
import supportTeam from "/support-team.png"
import letter from "/letter.svg"
import icon from "/shopping.svg"

function Section5({ dataComment, dataRandomUser }) {
    // ฟังก์ชันสำหรับการสุ่มเลือก 4 รายการ
    const getRandomItems = (arr, num) => {
        const shuffled = arr.sort(() => 0.5 - Math.random()); // สุ่มข้อมูล
        return shuffled.slice(0, num); // เลือก 4 รายการแรก
    };

    const rendomComment = getRandomItems(dataComment, 8)
    const rendomUser = getRandomItems(dataRandomUser, 8)


    // console.log(rendomUser);

    return (
        <div className="bg-gray-50 pt-10">
            <div className="container mx-auto flex flex-wrap justify-center items-center  bg-white w-2/3">
                <div className="w-2/4 h-full flex flex-col justify-start items-start pl-5">
                    <p className="text-gray-400 font-bold mb-5">Brand's deal</p>
                    <p className="text-3xl font-bold">Save up to $200 on select </p>
                    <p className="text-3xl font-bold">Samsung washing machine</p>
                    <p className="text-gray-400 mt-10">Tortor purus et quis aenean tempus tellus fames.</p>
                    <Link to="/allproducts" >
                        <button className="text-xl font-bold bg-sky-500 mt-10 justify-end text-white py-2 px-5 rounded-md">Shop Now</button>
                    </Link>
                </div>
                <img src={banner3} className="h-full w-2/4" />
            </div>

            <div className="container mx-auto flex flex-wrap justify-start items-center w-2/3 mt-5">
                <p className="text-2xl font-bold w-full mb-5">Top brands</p>

                <div className="container w-full  flex">
                    <div className="w-1/6 h-28 flex items-center justify-center  bg-white">
                        <img src={logo1} />
                    </div>
                    <div className="w-1/6 h-28 flex items-center justify-center  bg-white">
                        <img src={logo2} />
                    </div>
                    <div className="w-1/6 h-28 flex items-center justify-center  bg-white">
                        <img src={logo3} />
                    </div>
                    <div className="w-1/6 h-28 flex items-center justify-center  bg-white">
                        <img src={logo4} />
                    </div>
                    <div className="w-1/6 h-28 flex items-center justify-center  bg-white">
                        <img src={logo5} />
                    </div>
                    <div className="w-1/6 h-28 flex items-center justify-center  bg-white">
                        <img src={logo6} />
                    </div>
                </div>
            </div>


            <div className="container mx-auto flex flex-wrap justify-center items-center w-2/3 mt-24">
                <p className="text-2xl font-bold w-full mb-5">What is everyone saying?</p>

                <div className="container w-full flex flex-wrap justify-evenly gap-8">
                    {rendomComment.length > 0 ? (
                        rendomComment.map((res, index) => (
                            <div key={res.id} className="w-72 h-48 flex flex-col items-start justify-evenly  bg-white p-5">
                                <div className="flex flex-row ">
                                    <img src={star} className="w-3" />
                                    <img src={star} className="w-3" />
                                    <img src={star} className="w-3" />
                                    <img src={star} className="w-3" />
                                    <img src={star} className="w-3" />
                                </div>
                                <p className="text-lg mt-1 ">{res.body}</p>


                                {/* แสดงข้อมูลของ user ที่ตรงกับ comment นั้น */}
                                {rendomUser[index] && (
                                    <div className="flex justify-start item-center w-full h-10 ">
                                        <img src={rendomUser[index].image} className="w-1/6 rounded-full border-blue-200 border-2" />
                                        <p className="flex items-center pl-2 font-bold text-gray-600">{rendomUser[index].firstName} {rendomUser[index].lastName}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-between items-center w-2/3 mt-24 bg-white relative pt-10 pb-10">
                <div className="w-full border-b-2 border-gray-300 relative z-0">
                </div>
                <div className="w-1/5 h-full flex flex-col justify-evenly p-3">
                    <p className="underline underline-offset-4 text-md py-5">Expert advice</p>
                    <p className="text-3xl font-bold">123-456-7890</p>
                </div>
                <div className="w-1/5 h-full flex flex-col justify-evenly p-3">
                    <p className="underline underline-offset-4 text-md py-5">Customer service</p>
                    <p className="text-3xl font-bold">1-222-345-6789</p>
                </div>
                <div className="w-1/5 h-full flex flex-col justify-evenly p-3">
                    <p className="underline underline-offset-4 text-md py-5">Have any questions?</p>
                    <p className="text-3xl font-bold">Contact us</p>
                </div>
                <div className="w-1/5 h-full flex flex-col justify-evenly p-3">
                    <p className="underline underline-offset-4 text-md py-5"></p>
                    <p className="text-3xl font-bold"></p>
                </div>
                <img src={supportTeam} className="absolute  right-0 transform  z-10 bg-white" />
            </div>

            <div className="container mx-auto flex flex-wrap justify-between items-center  bg-white w-2/3 pt-10">
                <div className="w-1/4 h-full flex flex-row justify-between item-center p-3 border-r-2">
                    <img src={letter} className="w-1/4" />
                    <p className="text-xl font-bold pl-2 pt-2">Subscribe to our newsletter</p>
                </div>
                <div className="w-1/4 h-full flex flex-col justify-evenly p-6 ">
                    <p>Sign up for all the latest news and special offers</p>
                </div>
                <div className="w-2/4 h-full flex flex-col justify-evenly p-3">
                    <form className="w-full">
                        <input type="email" className="border w-3/4 text-xl p-3 focus:outline-none" placeholder="E-mail" />
                        <button type="submit" className="p-3 bg-sky-800 w-1/4 text-white text-xl font-bold hover:bg-sky-400">Submit</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-wrap justify-between items-center  bg-white w-full  border-t-2 px-60 h-80">
                <div className=" w-1/4 flex flex-col items-center justify-center gap-5 h-full">
                    <img src={icon} className="w-1/4 " />
                    <p className="text-3xl font-bold">StoreOHO</p>
                </div>
                <div className=" w-1/4 flex flex-col h-full p-10 gap-3">
                    <p className="text-3xl font-bold">Shop</p>

                    <a href="/allproducts" className="text-sky-500 transition-all duration-100 hover:scale-105 ">Hot deals</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Categories</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Brands</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Rebates</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Weekly deals</a>
                </div>
                <div className=" w-1/4  flex flex-col h-full p-10 gap-3">
                    <p className="text-3xl font-bold">Need help?</p>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Contact</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Order tracking</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">FAQs</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Return policy</a>
                    <a href="/allproducts" className="text-sky-500 duration-100 hover:scale-105">Privacy policy</a>
                </div>
                <div className=" w-1/4 flex flex-col h-full p-10 gap-3">
                    <p className="text-3xl font-bold">Contact</p>
                    <a href="/allproducts" className="text-sky-500 ">123 Fifth Avenue, New York, NY</a>
                    <a href="/allproducts" className="text-sky-500 ">10160</a>
                    <a href="/allproducts" className="text-sky-500 ">contact@info.com</a>
                    <a href="/allproducts" className="text-sky-500 ">929-242-6868</a>
                </div>
            </div>
        </div>
    )
}

export default Section5