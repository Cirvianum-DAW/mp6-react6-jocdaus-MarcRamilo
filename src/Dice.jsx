//Aquest component esperarà rebre un array de números corresponent amb la jugada dels daus que s'han tirat i per cada número generarà un component Dau amb el valor corresponent. Cap estat ni cap esdeveniment.


// Path: src/Dice.jsx
import React from 'react';
import Dau from './Dau';
import './Dice.css';

const Dice = ({ rolls }) => {
  return (
    <div className="Dice">
      {rolls.map((roll, index) => ( // Mapea cada tirada de dado a un component Dau
        <Dau key={index} value={roll} /> // Passa el valor de la tirada com a prop al component Dau
      ))}
    </div>
  );
}

export default Dice;



