// import React, { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
// import logo from "../../img/logo.png"
// import { BsHeart,BsCart } from 'react-icons/bs'
// import "./header.css"
// import { CartContext } from '../context/CartContext'
// import SearchBox from './SearchBox'
// const [searchTerm,setsearchTerm]=useState("")




// function TopHeader() {
//     const {cartItem}=useContext(CartContext)

//   return (
//     <div className='top_header'>
//         <div className="container">
//             <Link className='logo' to="/"><img src={logo} alt="logo" /></Link>
//            <SearchBox/>
//             <div className="header_icons">
//                 <div className="icon">
//                     <BsHeart/>
//                     <span className='count'>0

//                     </span>

//                 </div>
//                 <div className="icon">
//                    <Link to="/cart">
//                     <BsCart/>
//                     <span className='count'>{cartItem.length}</span>
//                    </Link>

//                 </div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default TopHeader


///////////////////////////////////////
import React, { useContext } from "react";

import { Link } from "react-router-dom";

import logo from "../../img/logo.png";

import {
    BsHeart,
    BsCart,
} from "react-icons/bs";

import "./header.css";

import { CartContext } from "../context/CartContext";

import SearchBox from "./SearchBox";

function TopHeader() {
    const {
        cartItem,
        favorites,
    } = useContext(CartContext);

    return (
        <div className="top_header">
            <div className="container">

                {/* Logo */}

                <Link
                    className="logo"
                    to="/"
                >
                    <img
                        src={logo}
                        alt="logo"
                    />
                </Link>

                {/* Search */}

                <SearchBox />

                {/* Header Icons */}

                <div className="header_icons">

                    {/* Favorites */}

                    <div className="icon">
                        <Link to="/favorites">
                            <BsHeart />

                            <span className="count">
                                {favorites.length}
                            </span>
                        </Link>
                    </div>

                    {/* Cart */}

                    <div className="icon">
                        <Link to="/cart">
                            <BsCart />

                            <span className="count">
                                {cartItem.length}
                            </span>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default TopHeader;