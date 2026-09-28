import React, { useContext } from 'react'
import { CartContext } from '../../components/context/CartContext'
import { BsTrash } from "react-icons/bs";
import "./cart.css"
import PageTransition from "../../components/PageAnmation"

function Cart() {
    const { cartItem, IncreasedQuntity, decreasedQuntity, removefromcart } = useContext(CartContext)
    console.log(cartItem)
    const total = cartItem.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
       <PageTransition>
         <div className='checH'>
            <div className="checkout">
                <div className="orderssummary">
                    <h1>order summary</h1>
                    <div className="items">
                        {cartItem.length === 0 ? (
                            <p>your cart is empty</p>
                        ) : (
                            cartItem.map((item, index) => {
                                return (
                                    <div className="item_cart" key={index}>
                                        <div className="image_name">
                                            <div className="img_item">
                                                <img src={item.images[0]} alt="" />

                                            </div>
                                            <div className="content">
                                                <h4>{item.title}</h4>
                                                <p className='price_item'>${item.price}</p>
                                                <div className="quantity_control">
                                                    <button onClick={() => IncreasedQuntity(item.id)}>+</button>
                                                    <span className="quntity">{item.quantity}</span>
                                                    <button onClick={() => decreasedQuntity(item.id)}>-</button>

                                                </div>
                                            </div>

                                        </div>
                                        <button onClick={() => removefromcart(item.id)} className="delete_item">
                                            <BsTrash />
                                        </button>

                                    </div>
                                )
                            })
                        )}

                    </div>
                    <div className="bottom_summary">
                        <div className="shop_table">
                            <p>total</p>
                            <span className='total_checkout'>${total.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="button_div">
                        <button type='submit'>place order</button>
                    </div>


                </div>
            </div>
        </div>
       </PageTransition>
    )
}

export default Cart