import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, rating, price }) {

    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct__img" src={image} alt=""/>
            <div className="checkproduct__info">
                <p className="checkoutproduct__title">{title}</p>
                <p className="checkoutproduct__price">
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutproduct__rating">
            {Array(rating)
                    .fill()
                    .map((_) => (
                        <p><span role="img" aria-labelledby="star">⭐</span></p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct 
