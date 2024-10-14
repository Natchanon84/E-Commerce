// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // นำเข้าดาวจาก react-icons

// // ฟังก์ชันสำหรับแสดงผลดาว
// function StarRating({ rating }) {
//     const stars = [];

//     for (let i = 1; i <= 5; i++) {
//         if (i <= rating) {
//             stars.push(<FaStar key={i} className="text-yellow-500" />); // ดาวเต็ม
//         } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
//             stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />); // ครึ่งดาว
//         } else {
//             stars.push(<FaRegStar key={i} className="text-gray-400" />); // ดาวว่าง
//         }
//     }

//     return <div className="flex">{stars}</div>;
// }

// function Detail() {
//     const { productId } = useParams();
//     const api = `https://dummyjson.com/products/`;
//     const [productDetail, setProductDetail] = useState(null);
//     const [selectedImage, setSelectedImage] = useState(""); // ตั้งค่าเริ่มต้นเป็น string ว่างๆ

//     useEffect(() => {
//         const fetchProductDetail = async () => {
//             try {
//                 const response = await axios.get(`${api}${productId}`);
//                 setProductDetail(response.data);
//                 setSelectedImage(response.data.thumbnail); // ตั้งค่า selectedImage หลังจากดึงข้อมูล
//             } catch (error) {
//                 console.log(error);
//             }
//         };
//         fetchProductDetail();
//     }, [productId]);

//     if (!productDetail) {
//         return <p>Loading product details...</p>;
//     }

//     return (
//         <div className="container mx-auto p-10">
//             <div className="w-full h-screen flex flex-wrap justify-between">
//                 <div className="w-3/6 h-4/6 ">
//                     {/* รูป thumbnail ขนาดใหญ่ */}
//                     <img
//                         src={selectedImage} // ใช้ selectedImage เป็นค่าแสดงผล
//                         alt={productDetail.title}
//                         className="w-full max-w-full max-h-96 object-contain mb-8 mx-auto transition-all duration-300 hover:scale-110"
//                     />

//                     {/* รูปภาพอื่นๆ ใช้ map */}
//                     <div className="flex flex-row justify-center gap-2 flex-wrap">
//                         {productDetail.images.map((image, index) => (
//                             <img
//                                 key={index}
//                                 src={image}
//                                 alt={`product image ${index + 1}`}
//                                 className={`max-w-40 max-h-40 mb-2 cursor-pointer border-2 ${selectedImage === image ? "border-gray-500" : "border-gray-300"
//                                     }`} // ใช้ condition เพื่อเปลี่ยนสีกรอบเมื่อเลือกภาพ
//                                 onClick={() => setSelectedImage(image)} // คลิกที่รูปเล็กจะเปลี่ยน selectedImage
//                             />
//                         ))}
//                     </div>
//                 </div>
//                 <div className="w-full sm:w-3/6 h-auto  rounded-lg p-8 space-y-6">
//                     <h1 className="text-4xl font-extrabold text-gray-800">{productDetail.title}</h1>
//                     <p className="text-lg text-gray-600 leading-relaxed">{productDetail.description}</p>
//                     <div className="flex flex-col items-start gap-4">
//                         <span className="text-3xl font-bold text-gray-900">
//                             ${productDetail.price}
//                         </span>
//                         <p className="text-sm text-gray-500">Quantity: {productDetail.stock}</p>
//                     </div>
//                     <div className="flex gap-4">
//                         <button className="py-2 px-6 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition duration-200 ease-in-out transform hover:scale-105">
//                             Add to Cart
//                         </button>
//                         <button className="py-2 px-6 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200 ease-in-out transform hover:scale-105">
//                             Buy Now
//                         </button>
//                     </div>
//                 </div>

//                 {/* รีวิวสินค้า */}
//                 <div className="w-full h-52 flex flex-wrap gap-5 p-5">
//                     {productDetail.reviews.map((review, index) => (
//                         <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto border rounded-lg p-5 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
//                             {/* คอมเมนต์ */}
//                             <p className="my-2 text-gray-600">{review.comment}</p>
//                             {/* สตาร์เรตติ้ง */}
//                             <StarRating rating={review.rating} />
//                             <div className="flex flex-col mt-4 text-right">
//                                 {/* ข้อมูลผู้รีวิว */}
//                                 <p className="font-bold text-gray-500">{review.reviewerName}</p>
//                                 <p className="text-xs text-gray-400">{review.reviewerEmail}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Detail;



import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // นำเข้าดาวจาก react-icons

// ฟังก์ชันสำหรับแสดงผลดาว
function StarRating({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-500" />); // ดาวเต็ม
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />); // ครึ่งดาว
        } else {
            stars.push(<FaRegStar key={i} className="text-gray-400" />); // ดาวว่าง
        }
    }

    return <div className="flex">{stars}</div>;
}

function Detail() {
    const { productId } = useParams();
    const api = `https://dummyjson.com/products/`;
    const [productDetail, setProductDetail] = useState(null);
    const [selectedImage, setSelectedImage] = useState(""); // ตั้งค่าเริ่มต้นเป็น string ว่างๆ

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await axios.get(`${api}${productId}`);
                setProductDetail(response.data);
                setSelectedImage(response.data.thumbnail); // ตั้งค่า selectedImage หลังจากดึงข้อมูล
            } catch (error) {
                console.log(error);
            }
        };
        fetchProductDetail();
    }, [productId]);

    if (!productDetail) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="container mx-auto p-10">
            <div className="w-full h-screen flex flex-wrap justify-between bg-gray-50">
                {/* แสดงรูปภาพสินค้า */}
                <div className="w-full sm:w-3/6 h-auto p-6">
                    <img
                        src={selectedImage} // ใช้ selectedImage เป็นค่าแสดงผล
                        alt={productDetail.title}
                        className="w-full max-w-full max-h-96 object-contain mb-8 mx-auto transition-all duration-300 hover:scale-105"
                    />

                    {/* รูปภาพเล็ก */}
                    <div className="flex flex-row justify-center gap-2 flex-wrap">
                        {productDetail.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`product image ${index + 1}`}
                                className={`max-w-40 max-h-40 mb-2 cursor-pointer border-2 ${selectedImage === image ? "border-gray-500" : "border-gray-300"
                                    }`} // ใช้ condition เพื่อเปลี่ยนสีกรอบเมื่อเลือกภาพ
                                onClick={() => setSelectedImage(image)} // คลิกที่รูปเล็กจะเปลี่ยน selectedImage
                            />
                        ))}
                    </div>
                </div>

                {/* ข้อมูลสินค้า */}
                <div className="w-full sm:w-3/6 h-auto p-6">
                    <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{productDetail.title}</h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-4 indent-7">{productDetail.description}</p>
                    <div className="flex flex-col items-start gap-4 mb-6">
                        <span className="text-3xl font-bold text-gray-900">
                            ${productDetail.price}
                        </span>
                        <p className="text-sm text-gray-500">Quantity: {productDetail.stock}</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="py-2 px-6 rounded-lg bg-sky-500 text-white font-semibold hover:bg-sky-600 transition duration-200 ease-in-out transform hover:scale-105">
                            Add to Cart
                        </button>
                        <button className="py-2 px-6 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-200 ease-in-out transform hover:scale-105">
                            Buy Now
                        </button>
                    </div>
                </div>

                {/* รีวิวสินค้า */}
                <div className="w-full h-auto flex flex-wrap gap-5 p-5">
                    {productDetail.reviews.map((review, index) => (
                        <div key={index} className="w-full sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto border rounded-lg p-5 bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                            <p className="my-2 text-gray-600">{review.comment}</p>
                            <StarRating rating={review.rating} />
                            <div className="flex flex-col mt-4 text-right">
                                <p className="font-bold text-gray-500">{review.reviewerName}</p>
                                <p className="text-xs text-gray-400">{review.reviewerEmail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Detail;
