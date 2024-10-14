import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Products from "./components/products";
import Detail from "./components/Deatil";
import AllProducts from "./components/allProducts";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // เปิด modal เมื่อหน้าเว็บโหลด
  useEffect(() => {
    setIsModalOpen(true); // เปิด modal เมื่อหน้าเว็บโหลด
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // เมื่อ modal เปิด, ซ่อน scroll
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // ทำความสะอาดหลังจาก useEffect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const apiLimit50 = "https://dummyjson.com/products?limit=50";
  const apiCategories = "https://dummyjson.com/products/categories";
  const apiComment = 'https://dummyjson.com/comments';
  const apiRandomUser = 'https://dummyjson.com/users';

  const [dataCategories, setDataCategories] = useState([]);

  const [urlLaptop, setUrlLaptop] = useState("");
  const [dataLaptop, setDataLaptop] = useState([]);

  const [urlTablet, setUrlTablet] = useState("");
  const [dataTablet, setDataTablet] = useState([]);

  const [urlMobileAccessories, setUrlMobileAccessories] = useState("");
  const [dataMobileAccessories, setDataMobileAccessories] = useState([]);

  const [urlHomeDecoration, setUrlHomeDecoration] = useState("");
  const [dataHomeDecoration, setDataHomeDecoration] = useState([]);

  const [urlKitchenAccessories, setUrlKitchenAccessories] = useState("");
  const [dataKitchenAccessories, setDataKitchenAccessories] = useState([]);

  const [urlMensShirts, setUrlMensShirts] = useState("");
  const [dataMensShirts, setDataMensShirts] = useState([]);

  const [urlWomensDresses, setUrlWomensDresses] = useState("");
  const [dataWomensDresses, setDataWomensDresses] = useState([]);

  const [dataComment, setDataComment] = useState([]);
  const [dataRandomUser, setDataRandomUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiCategories);
        const dataCategories = response.data;

        const responseComment = await axios.get(apiComment);
        const dataComment = responseComment.data.comments;

        const responseRandomUser = await axios.get(apiRandomUser);
        const dataRandomUser = responseRandomUser.data.users;

        setDataCategories(dataCategories);
        setDataComment(dataComment);
        setDataRandomUser(dataRandomUser);

        setUrlHomeDecoration(dataCategories[4].url);
        setUrlKitchenAccessories(dataCategories[5].url);
        setUrlLaptop(dataCategories[6].url);
        setUrlMensShirts(dataCategories[7].url);
        setUrlMobileAccessories(dataCategories[10].url);
        setUrlTablet(dataCategories[16].url);
        setUrlWomensDresses(dataCategories[20].url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchDataProduct = async () => {
      if (urlLaptop && urlTablet && urlMobileAccessories && urlHomeDecoration && urlMensShirts && urlWomensDresses) {
        try {
          const resLaptop = await axios.get(urlLaptop);
          const dataLaptop = resLaptop.data.products;

          const resTablet = await axios.get(urlTablet);
          const dataTablet = resTablet.data.products;

          const resMobileAccessories = await axios.get(urlMobileAccessories);
          const dataMobileAccessories = resMobileAccessories.data.products;

          const resHomeDecoration = await axios.get(urlHomeDecoration);
          const dataHomeDecoration = resHomeDecoration.data.products;

          const resKitchenAccessories = await axios.get(urlKitchenAccessories);
          const dataKitchenAccessories = resKitchenAccessories.data.products;

          const resMensShirts = await axios.get(urlMensShirts);
          const dataMensShirtss = resMensShirts.data.products;

          const resWomensDresse = await axios.get(urlWomensDresses);
          const dataWomensDresse = resWomensDresse.data.products;

          setDataLaptop(dataLaptop);
          setDataTablet(dataTablet);
          setDataMobileAccessories(dataMobileAccessories);
          setDataHomeDecoration(dataHomeDecoration);
          setDataKitchenAccessories(dataKitchenAccessories);
          setDataMensShirts(dataMensShirtss);
          setDataWomensDresses(dataWomensDresse);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchDataProduct();
  }, [urlLaptop, urlTablet, urlMobileAccessories, urlHomeDecoration, urlMensShirts, urlWomensDresses]);

  console.log(dataCategories);
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <BrowserRouter>
        <Routes>
          {/* Route สำหรับหน้าแรก (home) */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Section1 />
                <Section2 dataCategories={dataCategories} />
                <Section3 apiLimit50={apiLimit50} />
                <Section4
                  dataLaptop={dataLaptop}
                  dataTablet={dataTablet}
                  dataMobileAccessories={dataMobileAccessories}
                  dataHomeDecoration={dataHomeDecoration}
                  dataKitchenAccessories={dataKitchenAccessories}
                  dataMensShirts={dataMensShirts}
                  dataWomensDresses={dataWomensDresses}
                />
                <Section5 dataComment={dataComment} dataRandomUser={dataRandomUser} />
                <Footer />
              </>
            }
          />

          {/* Route สำหรับหน้า products ตาม category */}
          <Route path="/:category" element={
            <>
              <Header />
              <Products />
              <Footer />
            </>
          } />

          {/* หน้า Product Detail */}
          <Route
            path="/product/:productId"
            element={
              <>
                <Header />
                <Detail /> {/* แสดงหน้า Detail */}
                <Footer />
              </>
            }
          />
          {/* หน้า AllProduct*/}
          <Route
            path="/allproducts"
            element={
              <>
                <Header />
                <AllProducts apiCategories={apiCategories}/>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      {/* Modal จะปรากฏทันทีเมื่อเปิดหน้าเว็บ */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;


