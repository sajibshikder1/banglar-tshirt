import React, { useContext } from 'react';
import { MoneyContext, RingContext } from '../Grandpa/Grandpa';

const Sister = () => {
  const [money] = useContext(MoneyContext);
  const ring = useContext(RingContext);

  return (
    <div>
      <h2>Sister</h2>
      <p>Grandpa Money: {money}</p>
      <p><small>Ring:{ring}</small></p>
      
    </div>
  );
};

export default Sister;