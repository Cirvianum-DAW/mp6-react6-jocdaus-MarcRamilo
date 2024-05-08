//Aquest component només haurà d'assegurar-se de mostrar el valor del dau. Aquest valor li arribarà a través d'un prop.

import React from 'react';
import './Dau.css'; // assuming Dau.css is in the same directory

const Dau = ({ value }) => {
  return (
    <div className={`dau dau--${value}`}>
      {value}
      {/* {console.log(value)} */}
    </div>
  );
}

export default Dau;


