import { useParams } from "react-router-dom";  
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Products() {
    const api = "https://dummyjson.com/products/category/";
    const { category } = useParams();

    const [dataProducts, setDataProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${api}${category}`);
                setDataProducts(response.data.products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [category]);
    // console.log(dataProducts);

    return (
        <>
            <h1 className="text-2xl font-bold text-center w-full">{category.toUpperCase()}</h1>
            <div className="container mx-auto flex flex-wrap py-5 px-20 gap-5">
                {dataProducts.length > 0 ? (
                    dataProducts.map(res => (
                        <div key={res.id}>
                            <div className="container gap-5 border p-3 flex flex-col ">
                                <Link to={`/product/${res.id}`}>
                                    <img
                                        src={res.thumbnail}
                                        alt={res.title}
                                        className="w-full h-full transition-all duration-300 hover:scale-110 pb-5" 
                                    />
                                    <p className="text-center">{res.title}</p>
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading products...</p>
                )}
            </div>

        </>


    );
};

export default Products;

