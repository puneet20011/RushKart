import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { useGetTopProductsQuery } from "../slices/productsApiSlice";

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    // <Carousel pause="hover" className="bg-primary mb-4">
    //   {products.map((product) => (
    //     <Carousel.Item key={product._id}>
    //       <Link to={`/product/${product._id}`}>
    //         <Image src={product.image} alt={product.name} fluid />
    //         <Carousel.Caption className="carousel-caption">
    //           <h2>
    //             {product.name} (${product.price})
    //           </h2>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   ))}
    // </Carousel>
    <Carousel
      pause="hover"
      className="mb-4"
      style={{ backgroundColor: "black" }}
    >
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <div className="row d-flex align-items-center">
            <div className="col-md-6 text-center">
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid />
                <Carousel.Caption className="carousel-caption">
                  <h2>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-center text-white p-3">
              <p>{product.description}</p>
              <p>
                ⭐{" "}
                {product.rating ? product.rating.toFixed(1) : "No rating yet"} (
                {product.numReviews} reviews)
              </p>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
