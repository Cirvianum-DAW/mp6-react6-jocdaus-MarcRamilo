//Genera el component App. Prova a utilitzar una d'aquestes draceres per generar-lo en forma de component amb arrow function i export (rafce). De moment no cal fer res més. Ens servirà per provar alguns components inicialment.
/* Afegeix-lo puntualment al teu App per veure si funciona i es visualitza correctament. dau.jsx */
import React from 'react';
import './Dau.css';
import LuckyN from './LuckyN';

const App = () => {
  return (
    <div className="app p-4" >
      <h1>Lucky Dice Game</h1>
      <> <LuckyN /> </>
     
    </div>
  );
}

export default App;
