// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import {
//   BsStar,
//   BsStarFill,
//   BsStarHalf,
//   BsCart,
//   BsHeart,
//   BsShare,
// } from "react-icons/bs";

// import ProductDetailsLoading from "./productDetailsLoading";
// import SlideProduct from "../../components/slideProducts/SlideProduct"

// function ProductDetails() {
//   const { id } = useParams();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const [loadingrelatedProducts, setLoadingRelatedProducts] = useState(true);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
        

//         const res = await fetch(
//           `https://dummyjson.com/products/${id}`
//         );

//         const data = await res.json();

//         setProduct(data);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   useEffect(() => {
//     const fetchRelatedProducts = async () => {
//       if (!product) return;

//       try {
//         setLoadingRelatedProducts(true);

//         const res = await fetch(
//           `https://dummyjson.com/products/category/${product.category}`
//         );

//         const data = await res.json();

//         setRelatedProducts(
//           data.products.filter((item) => item.id !== product.id)
//         );
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoadingRelatedProducts(false);
//       }
//     };

//     fetchRelatedProducts();
//   }, [product]);

//   if (loading) {
//     return <ProductDetailsLoading />;
//   }

//   if (!product) {
//     return <p>Product not found</p>;
//   }

//   return (
//     <div>
//       <div className="item-details">
//         <div className="container">

//           <div className="img_item">

//             <div className="big_img">
//               <img
//                 id="big_img"
//                 src={product.images[0]}
//                 alt={product.title}
//               />
//             </div>

//             <div className="sma_img">
//               {product.images.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt={product.title}
//                   onClick={() => {
//                     document.getElementById("big_img").src = img;
//                   }}
//                 />
//               ))}
//             </div>

//           </div>

//           <div className="details_item">

//             <h1 className="name">
//               {product.title}
//             </h1>

//             <div className="stars">
//               <BsStar />
//               <BsStar />
//               <BsStar />
//               <BsStarFill />
//               <BsStarHalf />
//             </div>

//             <p className="price">
//               ${product.price}
//             </p>

//             <h4>
//               Availability:
//               <span>{product.availabilityStatus}</span>
//             </h4>

//             <h4>
//               Brand:
//               <span>{product.brand}</span>
//             </h4>

//             <p className="desc">
//               {product.description}
//             </p>

//             <h4 className="stock">
//               Stock:
//               <span>{product.stock}</span>
//             </h4>

//             <button className="btn">
//               Add to cart <BsCart />
//             </button>

//             <div className="icons">
//               <span>
//                 <BsHeart />
//               </span>

//               <span>
//                 <BsShare />
//               </span>
//             </div>

//           </div>

//         </div>
//       </div>

//       {loadingrelatedProducts ? (
//         <p>loading........</p>
//       ) : (
//         <SlideProduct
//           data={relatedProducts}
//           title={product.category.replace("-", " ")}
//         />
//       )}
//     </div>
//   );
// }

// export default ProductDetails;
////////////////////////////////////////////////////////////////////////
// 
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTransition from "../../components/PageAnmation"

import {
  BsStar,
  BsStarFill,
  BsStarHalf,
  BsCart,
  BsHeart,
  BsShare,
} from "react-icons/bs";

import ProductDetailsLoading from "./productDetailsLoading";
import SlideProduct from "../../components/slideProducts/SlideProduct";

import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState("");

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loadingRelatedProducts, setLoadingRelatedProducts] = useState(true);

  // ==============================
  // Fetch Product
  // ==============================
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        setProduct(data);

        // أول صورة تكون الصورة الرئيسية
        if (data.images?.length > 0) {
          setSelectedImage(data.images[0]);
        }
      } catch (error) {
        console.error("Product Error:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // ==============================
  // Fetch Related Products
  // ==============================
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (!product?.category) return;

      try {
        setLoadingRelatedProducts(true);

        const response = await fetch(
          `https://dummyjson.com/products/category/${product.category}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch related products");
        }

        const data = await response.json();

        const filteredProducts = data.products.filter(
          (item) => item.id !== product.id
        );

        setRelatedProducts(filteredProducts);
      } catch (error) {
        console.error("Related Products Error:", error);
        setRelatedProducts([]);
      } finally {
        setLoadingRelatedProducts(false);
      }
    };

    fetchRelatedProducts();
  }, [product]);

  // ==============================
  // Loading
  // ==============================
  if (loading) {
    return <ProductDetailsLoading />;
  }

  // ==============================
  // Product Not Found
  // ==============================
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <p>Sorry, we couldn't find this product.</p>
      </div>
    );
  }

  // ==============================
  // Product Data
  // ==============================
  const images = product.images || [];

  const discountPrice =
    product.discountPercentage > 0
      ? product.price -
        (product.price * product.discountPercentage) / 100
      : product.price;

  const rating = product.rating || 0;

  // ==============================
  // Rating Stars
  // ==============================
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<BsStarFill key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<BsStarHalf key={i} />);
      } else {
        stars.push(<BsStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <PageTransition key={id}>
      <div className="product-details-page">

      {/* =========================
          Product Details
      ========================== */}
      <section className="item-details">
        <div className="container">

          {/* =========================
              Images
          ========================== */}
          <div className="img-item">

            {/* Main Image */}
            <div className="big-img">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt={product.title}
                />
              )}
            </div>

            {/* Thumbnails */}
            <div className="small-img">
              {images.slice(0, 4).map((image, index) => (
                <button
                  type="button"
                  key={index}
                  className={`thumbnail ${
                    selectedImage === image ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                  />
                </button>
              ))}
            </div>

          </div>

          {/* =========================
              Product Information
          ========================== */}
          <div className="details-item">

            {/* Category */}
            <p className="product-category">
              {product.category?.replaceAll("-", " ")}
            </p>

            {/* Title */}
            <h1 className="product-name">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="rating-box">

              <div className="stars">
                {renderStars()}
              </div>

              <span className="rating-number">
                {rating.toFixed(1)}
              </span>

              <span className="rating-text">
                Rating
              </span>

            </div>

            {/* Price */}
            <div className="price-box">

              <span className="product-price">
                ${discountPrice.toFixed(2)}
              </span>

              {product.discountPercentage > 0 && (
                <>
                  <span className="old-price">
                    ${product.price.toFixed(2)}
                  </span>

                  <span className="discount">
                    -{product.discountPercentage.toFixed(0)}%
                  </span>
                </>
              )}

            </div>

            {/* Product Info */}
            <div className="product-info">

              <div className="info-row">
                <span className="info-label">
                  Availability
                </span>

                <span className="info-value">
                  {product.availabilityStatus || "Available"}
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">
                  Brand
                </span>

                <span className="info-value">
                  {product.brand || "N/A"}
                </span>
              </div>

              <div className="info-row">
                <span className="info-label">
                  Category
                </span>

                <span className="info-value">
                  {product.category?.replaceAll("-", " ")}
                </span>
              </div>

            </div>

            {/* Description */}
            <div className="description-box">

              <h3>Product Description</h3>

              <p>
                {product.description}
              </p>

            </div>

            {/* Stock */}
            <div className="stock-box">

              <span>
                Stock:
              </span>

              <strong>
                {product.stock}
              </strong>

              {product.stock <= 10 && (
                <small>
                  Only few items left!
                </small>
              )}

            </div>

            {/* Buttons */}
            <div className="action-buttons">

              <button
                type="button"
                className="add-to-cart"
              >
                Add to cart
                <BsCart />
              </button>

              <button
                type="button"
                className="action-icon"
                aria-label="Add to wishlist"
              >
                <BsHeart />
              </button>

              <button
                type="button"
                className="action-icon"
                aria-label="Share product"
              >
                <BsShare />
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          Related Products
      ========================== */}
      {!loadingRelatedProducts &&
        relatedProducts.length > 0 && (
          <SlideProduct
            data={relatedProducts}
            title={`${product.category?.replaceAll("-", " ")} Products`}
          />
        )}

    </div>
    </PageTransition>
  );
}

export default ProductDetails;

