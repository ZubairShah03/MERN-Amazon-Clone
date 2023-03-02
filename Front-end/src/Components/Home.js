import React, { useEffect, useState } from "react";
import "../css/Home.css";
import Footer from "./Footer";
import Product from "./Product";

function Home() {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const response = await fetch("http://localhost:5000/productDetails");
    setProduct(await response.json());
    // console.log(product);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="home">
      <div className="home_container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner home_image">
            <div className="carousel-item active">
              <img
                src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>

        {product.map((value) => {
          return (
            <div className="home_row">
              <Product
                id="12321341"
                title={value.title}
                price={value.price}
                image={value.image}
                rating={value.rating}
              />
            </div>
          );
        })}
        <Footer />
      </div>
    </div>
  );
}

export default Home;
