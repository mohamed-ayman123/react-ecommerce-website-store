// // import React from 'react'

// // function productDetailsLoading() {
// //   return (
// //       <div>
// //               <div className="item-details">
// //                   <div className="container">
// //                       <div className="img_item">
// //                           <div className="big_img">
// //                               <img id="big_img" src={product.images[0]} alt={product.title} />

// //                           </div>
// //                           <div className="sma_img">
// //                               {product.images.map((img, index) => {
// //                                   <img key={index} src={img} alt={product.title} onClick={() => document.getElementById(big_img).src = img} />
// //                               })}

// //                           </div>
// //                       </div>
// //                       <div className="details_item">
// //                           <h1 className="name">{product.title}</h1>
// //                           <div className="stars">
// //                               <BsStar />
// //                               <BsStar />
// //                               <BsStar />
// //                               <BsStarFill />
// //                               <BsStarHalf />
// //                           </div>
// //                           <p className="price">${product.price}</p>
// //                           <h4>avaibility <span>{product.availabilityStatus}</span></h4>
// //                           <h4>Brand <span>{product.brand}</span></h4>
// //                           <p className="desc">{product.description}</p>
// //                           <h4 className="stock">Stock <span>{product.stock}</span></h4>
// //                           <button className="btn">
// //                               add to cart <BsCart />
// //                           </button>
// //                           <div className="icons">

// //                               <span><BsHeart /></span>
// //                               <span><BsShare /></span>
// //                           </div>
// //                       </div>
// //                   </div>

// //               </div>

// // )
// // }

// // export default productDetailsLoading
// //////////////////////////////////////////////////////////////////////////

// import React from "react";



// function ProductDetailsLoading() {
//     return (
//         <div className="loadin_item">
//             <div className="item-details">
//                 <div className="container">

//                     <div className="img_items"></div>

//                     <div className="details_item">
//                         <h5 className="loading_textDetailsitem"></h5>
//                         {/* <h5 className="loading_textDetailsitem"></h5>
//                         <h5 className="loading_textDetailsitem"></h5>
//                         <h5 className="loading_textDetailsitem"></h5> */}
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ProductDetailsLoading;
//////////////////////////////////////////////////////////////

import React from "react";

// import "./productDetailsLoading.css";

function ProductDetailsLoading() {
  return (
    <section className="loading-item">
      <div className="loading-container">

        {/* Images Skeleton */}
        <div className="loading-images">

          <div className="loading-big-image"></div>

          <div className="loading-small-images">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {/* Details Skeleton */}
        <div className="loading-details">

          <div className="loading-category"></div>

          <div className="loading-title"></div>

          <div className="loading-rating"></div>

          <div className="loading-price"></div>

          <div className="loading-line"></div>

          <div className="loading-line"></div>

          <div className="loading-description"></div>

          <div className="loading-description"></div>

          <div className="loading-description short"></div>

          <div className="loading-button"></div>

        </div>

      </div>
    </section>
  );
}

export default ProductDetailsLoading;


