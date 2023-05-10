import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
  let message;

  if(cart.length === 0){
    message = <p>Please add some product</p>;

  }
  else{
    message = <div>
      <h3>Borolooox</h3>
      <p><small>Thanks for giving your money</small></p>
    </div>
  }
  return (
    <div>
      <h2 className={cart.length === 1 ? 'aqua' : 'red'}>Order Summary: {cart.length}</h2>
      <p className={`bold ${cart.length === 3 ? 'aqua': 'green'}`}>Something</p>
      {
        cart.length > 2
       ? <span className='orange'>Aro Kino</span>
        : <span>Fokira</span>
       }
      {message}
      {
        cart.map(tshirt => <p 
          key={tshirt._id}>
          {tshirt.name} 
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button></p>)
      }
      {
        cart.length === 2 && <p>Double Bonanza!!!</p>
      }
      {
        cart.length === 3 ||  <h3>Tinta to hoilona!!</h3>
      }
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element, components
 * 2. ternary operator: condition ?  'for true' or 'fasle'
 * 3. Logical  &&: (if the condition is true then the next thing will be displayed)
 * 4. Logical ||  (if the condition is false then the next thing will be displayed)
 */


/***
 *  CONDITIONAL CSS CLASS
 * 1. use ternary
 * 2. ternary inside template string
 */