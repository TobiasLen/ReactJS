import React from 'react'
import { useCart } from '../context/CartContext';


const Cart = () => {

    const { cart, removeFromCart } = useCart();

    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);
    };

    return (
        <div> {cart.length == 0 ? (
            <p>Tu carrito se encuentra vacio</p>
        ) : (
            <ul>
                {cart.map(product => {
                    return (
                        <li key={product.id}>
                            <div>
                                <p>{product.title}</p>
                                <p>${product.price}</p>
                            </div>
                        </li>
                    )
                }
                )}
            </ul>
        )
        }
            </div>
    );
};

export default Cart