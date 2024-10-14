import { Link } from "react-router-dom"

function Section1() {

    return (

        <div className=" flex flex-col justify-end items-center height bg-cover  bg-center bg-no-repeat" style={{ backgroundImage: "url('/imgSection1_4.jpg')" }}>
            <div className="w-full flex justify-end" >
                <div className="w-96 h-4-6 bg-white p-6 mr-52 shadow-2xl rounded-xl">
                    <h1 className="text-start h1 ">Tech and Fashion, Delivered to Your Door</h1>

                    <p className="indent-3 mb-10 mt-2 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptas animi dolores veniam, quibusdam sint quis.
                    </p>
                    <br />
                    <Link to="/allproducts">
                        <button className="m-0 p-2 bg-black text-white rounded-xl">Shop Now</button>
                    </Link>
                </div>
            </div>

            <div className="w-2/3 h-24 mt-36 flex ">
                <div className="w-1/4 m-2 pl-2 flex flex-col flex-wrap justify-center items-center  bg-white rounded-xl">
                    <img src="./shipping.svg" className="icon w-10 pl-1" />
                    <p className=" w-3/4 font-bold">Free shipping</p>
                    <p className=" w-3/4 text-gray-500/80 text-sm">When you spend $80 or more</p>
                </div>
                <div className="w-1/4 m-2 pl-2 flex flex-col flex-wrap justify-center items-start  bg-white rounded-xl">
                    <img src="./message.svg" className="icon w-10 pl-1" />
                    <p className="w-3/4 font-bold">We are available 24/7</p>
                    <p className="w-auto text-gray-500/80 text-sm">Need help? contact us anytime</p>
                </div>
                <div className="w-1/4 m-2 pl-2 flex flex-col flex-wrap justify-center items-start  bg-white rounded-xl">
                    <img src="./refresh.svg" className="icon w-10 pl-1" />
                    <p className=" w-4/4 font-bold">Satisfied or return</p>
                    <p className=" w-3/4 text-gray-500/80 text-sm">Easy 30-day return policy</p>
                </div>
                <div className="w-1/4 m-2 pl-2 flex flex-col flex-wrap justify-center items-start  bg-white rounded-xl ">
                    <img src="./credit-card.svg" className="icon w-10 pl-1" />
                    <p className=" w-4/4 font-bold">100% secure payments</p>
                    <p className=" w-3/4 text-gray-500/80 text-sm">Visa, Mastercard, Stripe, PayPal</p></div>
            </div>
        </div>
    )
}

export default Section1