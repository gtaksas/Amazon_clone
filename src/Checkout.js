import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
               <img 
                    className="checkout__ad"
                    src="https://lineardesign.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg"
                    alt=""
                />
                <div className="checkout__title">
                    <h3>Hello, {user.email}</h3>
                    <h2 className="checkout__title">Your shopping Cart</h2>

                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                </div>
            </div>

            <div className="checkot__right">
                <Subtotal />
            </div>

        </div>
    )
}

export default Checkout
