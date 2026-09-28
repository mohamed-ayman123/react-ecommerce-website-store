// // import React, { useContext } from "react";
// // import {
// //     BsStar,
// //     BsStarFill,
// //     BsStarHalf,
// //     BsCart,
// //     BsHeart,
// //     BsShare,
// //     BsCheck 
// // } from "react-icons/bs";
// // import { Link, useNavigate } from "react-router-dom";

// // import { CartContext } from "../context/CartContext";
// // import toast from "react-hot-toast";


// // function Products({ item }) {
// //     const navigate=useNavigate()

// //     const { cartItem, addToCart } = useContext(CartContext);

// //     console.log(cartItem);
// //     const isInCart = cartItem.some(i=>i.id===item.id)
// //     const handelToCart=()=>{
// //         addToCart(item)
// //         toast.success(
// //             <div className="toast-wrapper">
// //                 <img src={item.images[0]} alt="" className="toast_img"/>
// //                 <div className="toast_content">
// //                     <strong>{item.title}</strong>
// //                     add to cart
// //                     <div>
// //                         <button className="btn" onClick={()=>navigate("/cart")}>
// //                             view cart
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>
// //             ,
// //         {
// //             duration: 3500
// //         }
// //         )

// //     }

   

// //     return (
// //         <div className={`product ${isInCart ?'in-cart':''}`}>

// //             <Link to={`/products/${item.id}`}>
// //             <span className="statue_cart"><BsCheck/> in cart</span>

// //                 <div className="img_product">
// //                     <img src={item.images[0]} alt="" />
// //                 </div>

// //                 <p className="name_product">
// //                     {item.title}
// //                 </p>

// //                 <div className="stars">
// //                     <BsStar />
// //                     <BsStar />
// //                     <BsStar />
// //                     <BsStarFill />
// //                     <BsStarHalf />
// //                 </div>

// //                 <p className="price">
// //                     <span>
// //                         {item.price}
// //                     </span>
// //                 </p>

// //             </Link>

// //             <div className="icons">

// //                 <span className="btn_Addcart" onClick={handelToCart}>
// //                     <BsCart />
// //                 </span>

// //                 <span>
// //                     <BsHeart />
// //                 </span>
// //                 <span>
// //                     <BsShare />
// //                 </span>

// //             </div>

// //         </div>
// //     );
// // }

// // export default Products;
// //////////////////////////////////////////////////////////////

// import React, { useContext } from "react";
// import {
//     BsStar,
//     BsStarFill,
//     BsStarHalf,
//     BsCart,
//     BsHeart,
//     BsShare,
//     BsCheck,
// } from "react-icons/bs";
// import { Link, useNavigate } from "react-router-dom";

// import { CartContext } from "../context/CartContext";
// import toast from "react-hot-toast";

// function Products({ item }) {
//     const navigate = useNavigate();

//     const { cartItem, addToCart,addToFavorites,favorites } = useContext(CartContext);

//     const isInCart = cartItem.some((i) => i.id === item.id);

//     const handleToCart = () => {
//         addToCart(item);

//         toast.success(
//             <div className="toast-wrapper">
//                 <img
//                     src={item.images[0]}
//                     alt={item.title}
//                     className="toast_img"
//                 />

//                 <div className="toast_content">
//                     <strong>{item.title}</strong>

//                     <p>Added to cart</p>

//                     <div>
//                         <button
//                             className="btn"
//                             onClick={() => navigate("/cart")}
//                         >
//                             View Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>,
//             {
//                 duration: 3500,
//             }
//         );
//     };
//     //favorites
//    const handleAddToFavorites = () => {
//     addToFavorites(item);
//     toast.success(`${item.title} added to favorite`);
// };


//     return (
//         <div className={`product ${isInCart ? "in-cart" : ""}`}>

//             <Link to={`/products/${item.id}`}>

//                 {isInCart && (
//                     <span className="statue_cart">
//                         <BsCheck /> In Cart
//                     </span>
//                 )}

//                 <div className="img_product">
//                     <img
//                         src={item.images[0]}
//                         alt={item.title}
//                     />
//                 </div>

//                 <p className="name_product">
//                     {item.title}
//                 </p>

//                 <div className="stars">
//                     <BsStar />
//                     <BsStar />
//                     <BsStar />
//                     <BsStarFill />
//                     <BsStarHalf />
//                 </div>

//                 <p className="price">
//                     <span>{item.price}</span>
//                 </p>

//             </Link>

//             <div className="icons">

//                 <span
//                     className="btn_Addcart"
//                     onClick={handleAddToFavorites}
//                 >
//                     <BsCart />
//                 </span>

//                 <span onClick={handAddToFavarites} >
//                     <BsHeart />
//                 </span>

//                 <span>
//                     <BsShare />
//                 </span>

//             </div>

//         </div>
//     );
// }

// export default Products;
//////////////////////////////////////////////////////////////////////////
import React, { useContext } from "react";

import {
    BsStar,
    BsStarFill,
    BsStarHalf,
    BsCart,
    BsHeart,
    BsShare,
    BsCheck,
} from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import toast from "react-hot-toast";

function Products({ item }) {
    const navigate = useNavigate();

    const {
        cartItem,
        addToCart,
        addToFavorites,
        favorites,
        // removefromcartid
    } = useContext(CartContext);

    // =========================
    // Check Cart
    // =========================

    const isInCart = cartItem.some(
        (i) => i.id === item.id
    );

    // =========================
    // Check Favorites
    // =========================

    const isFavorite = favorites.some(
        (i) => i.id === item.id
    );

    // =========================
    // Add To Cart
    // =========================

    const handleToCart = () => {
        addToCart(item);

        toast.success(
            <div className="toast-wrapper">
                <img
                    src={item.images?.[0]}
                    alt={item.title}
                    className="toast_img"
                />

                <div className="toast_content">
                    <strong>{item.title}</strong>

                    <p>Added to cart</p>

                    <button
                        className="btn"
                        onClick={() => navigate("/cart")}
                    >
                        View Cart
                    </button>
                </div>
            </div>,
            {
                duration: 3500,
            }
        );
    };

    // =========================
    // Add To Favorites
    // =========================

    const handleAddToFavorites = () => {
        addToFavorites(item);
        // removefromcartid(item.id)

        toast.success(
            `${item.title} added to favorites`
        );
    };

    // =========================
    // UI
    // =========================

    return (
        <div
            className={`product ${
                isInCart ? "in-cart" : ""
            }`}
        >
            <Link to={`/products/${item.id}`}>
                {isInCart && (
                    <span className="statue_cart">
                        <BsCheck /> In Cart
                    </span>
                )}

                <div className="img_product">
                    <img
                        src={item.images?.[0]}
                        alt={item.title}
                    />
                </div>

                <p className="name_product">
                    {item.title}
                </p>

                <div className="stars">
                    <BsStar />
                    <BsStar />
                    <BsStar />
                    <BsStarFill />
                    <BsStarHalf />
                </div>

                <p className="price">
                    <span>{item.price}</span>
                </p>
            </Link>

            <div className="icons">
                {/* Cart */}

                <span
                    className="btn_Addcart"
                    onClick={handleToCart}
                >
                    <BsCart />
                </span>

                {/* Favorites */}

                <span
                    onClick={handleAddToFavorites}
                    className={
                        isFavorite
                            ? "favorite-active"
                            : ""
                    }
                >
                    <BsHeart />
                </span>

                {/* Share */}

                <span>
                    <BsShare />
                </span>
            </div>
        </div>
    );
}

export default Products;