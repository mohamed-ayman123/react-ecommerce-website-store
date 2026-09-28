// import React, { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// function CartProvidert({ children }) {
//     //favorites
// const [favorites, setFavorites] = useState(() => {
//     const savedFav = localStorage.getItem("favoritesItem");
//     return savedFav ? JSON.parse(savedFav) : [];
// });

// const addToFavorites = (item) => {
//     setFavorites((prev) => {
//         if (prev.some((i) => i.id === item.id)) {
//             return prev;
//         }

//         return [...prev, item];
//     });
// };

// useEffect(() => {
//     localStorage.setItem("favoritesItem", JSON.stringify(favorites));
// }, [favorites]);

// }
///////////////////////////////////////////////
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    // =========================
    // Cart
    // =========================

    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("cartItem");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Add To Cart
    const addToCart = (item) => {
        setCartItem((prev) => {

            const isExist = prev.some(
                (i) => i.id === item.id
            );

            if (isExist) {
                return prev;
            }

            return [
                ...prev,
                {
                    ...item,
                    quantity: 1,
                },
            ];
        });
    };

    // Increase Quantity
    const IncreasedQuntity = (id) => {
        setCartItem((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity + 1,
                      }
                    : item
            )
        );
    };

    // Decrease Quantity
    const decreasedQuntity = (id) => {
        setCartItem((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity:
                              item.quantity > 1
                                  ? item.quantity - 1
                                  : 1,
                      }
                    : item
            )
        );
    };

    // Remove From Cart
    const removefromcart = (id) => {
        setCartItem((prev) =>
            prev.filter((item) => item.id !== id)
        );
    };

    // Save Cart
    useEffect(() => {
        localStorage.setItem(
            "cartItem",
            JSON.stringify(cartItem)
        );
    }, [cartItem]);


    // =========================
    // Favorites
    // =========================
    

    const [favorites, setFavorites] = useState(() => {
        const savedFavorites =
            localStorage.getItem("favoritesItem");

        return savedFavorites
            ? JSON.parse(savedFavorites)
            : [];
    });

    const addToFavorites = (item) => {
        setFavorites((prev) => {

            const isExist = prev.some(
                (i) => i.id === item.id
            );

            if (isExist) {
                return prev;
            }

            return [...prev, item];
        });
    };

    // Save Favorites
    useEffect(() => {
        localStorage.setItem(
            "favoritesItem",
            JSON.stringify(favorites)
        );
    }, [favorites]);


    // =========================
    // Provider
    // =========================

    return (
        <CartContext.Provider
            value={{
                cartItem,
                addToCart,
                IncreasedQuntity,
                decreasedQuntity,
                removefromcart,
                favorites,
                addToFavorites,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;