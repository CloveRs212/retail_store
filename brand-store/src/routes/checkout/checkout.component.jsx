import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-items/checkout-items.components';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext);
  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-clock'>
          <span>Product</span>
        </div>
        <div className='header-clock'>
          <span>Discription</span>
        </div>
        <div className='header-clock'>
          <span>Quantity</span>
        </div>
        <div className='header-clock'>
          <span>Price</span>
        </div>
        <div className='header-clock'>
        <span>Remove</span>
        </div>
      </div>
        {
          cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <span className='total'>Total: 0</span>
    </div>
  )
};


export default Checkout;