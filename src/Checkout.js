import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
          <img 
            className="checkout__ad" 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            /> 
            {basket.length === 0 ? (
                <div>
                    <h2>Your Basket Is Empty!!!</h2>
                    <p>You have no item in your basket.To buy one or more item click "Add to Cart" next to the item.</p>
                </div>
            ) : (
                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>
                    {basket.map(function add(item) {
                        return(
                            <CheckoutProduct
                            id= {item.id}
                            title= {item.title}
                            image= {item.image}
                            rating= {item.rating}
                            price= {item.price}
                        />
                        )
                    })}
                </div>
            )}
             </div> 
             <div className="checkout__right">
                 <Subtotal/>
             </div>
        </div>
    )
}

export default Checkout
