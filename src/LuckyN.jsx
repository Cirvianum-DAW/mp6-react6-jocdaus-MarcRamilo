import React, { useState } from 'react';
import Dice from './Dice';
import { rollMultipleDice } from './utils'; // Importa la función para simular tiradas de dados
import './LuckyN.css';

const LuckyN = () => {
  const [rolls, setRolls] = useState([]); // Inicializa rolls como un array vacío
  const [win, setWin] = useState(null); // Inicializa win como null para indicar que el juego está en progreso
  const randommNumbeInici = Math.floor(Math.random() * 12) +1 ;
  const [targetSum, setTargetSum] = useState(randommNumbeInici); // Inicializa targetSum como 0 para indicar que aún no se ha generado SetTrgetSum és una funció que ens permetrà canviar el valor de targetSum en qualsevol moment.
  const handleRollDice = () => {
    // Simula el lanzamiento de x dados
    const newRolls = rollMultipleDice(2);

    // Reiniciar los dados con la nueva tirada
    setRolls(newRolls);

    // Comprobar si la suma de los dados es igual a la suma objetivo
    const sum = newRolls.reduce((acc, roll) => acc + roll, 0);
    if (sum === targetSum) {
      setWin(true); // Establecer win en true si la suma es igual a la suma objetivo
    } else {
      setWin(false); // Establecer win en false si la suma no es igual a la suma objetivo
    }
  }

  const generateTargetSum = () => {
    // Generar una suma objetivo aleatoria entre 3 y 18 (suma de tres dados entre 1 y 6)
    const randomTargetSum = Math.floor(Math.random() * 12) +1 ;
    setTargetSum(randomTargetSum);
  }

  const resetGame = () => {
    setRolls([]);
    setWin(null); // Restablecer win a null para indicar reinicio del juego
    generateTargetSum(); // Generar un nuevo número objetivo
  }

  let resultMessage = "";
  if (win !== null) {
    resultMessage = win ? "Has guanyat!" : "Has perdut...";

  }

  //win css 
  const winClass = win === true ? "win" : win === false ? "lose" : "";


  return (
    <div className="lucky-n p-4">
      <h2>Prova sort! La suma ha de ser de {targetSum}</h2>
      {  <p className={winClass}>{resultMessage}</p>}
      <Dice rolls={rolls} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={handleRollDice}>Tira el dau</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={resetGame}>Reinicia el joc</button>
    </div>
  );
}

export default LuckyN;
