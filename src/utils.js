//Pots fer-te un arxiu utils.js on tenir les teves eines. En aquest cas com ho faries si:
// Els nostres daus tenen 6 cares (1 a 6)
// Necessitem una funció que simuli un tir de dau.
// Necessitem simular també diversos intents o tirades amb els possibles resultats del dau.
// Estaria bé un botó que ens permetès anar tirant els daus fins que guanyéssim.
// Important Pensa que el teu component es renderitzarà cada vegada que canviï l'estat de les teves variables del useState. És a dir, quan modifiquem una variable d'estat de les definides amb useState (a través del "set..." normalment), si aquesta canvia, el component tornarà a renderitzar-se. Ara bé, el valor de l'estat no canvia fins que el component es torna a renderitzar! Això ho haurem de tenir sempre molt present!!!

// Pots aprofitar aquest funcionament del useState i els components per fer que en cada tir de dau sigui el responsable d'un nou renderitzat del component. Això és el que anomenem re-render.
// Funció per simular un tir de dau
export const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  
  // Funció per simular diversos intents de tirades amb els possibles resultats del dau
  export const rollMultipleDice = (numDice) => {
    const rolls = [];
    for (let i = 0; i < numDice; i++) {
      rolls.push(rollDice());
    }
    return rolls;
  }
  