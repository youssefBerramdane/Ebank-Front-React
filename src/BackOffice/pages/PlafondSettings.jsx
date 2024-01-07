// import React, { useState } from 'react';

// const PlafondSettings = () => {
//   // Statut de l'édition
//   const [editMode, setEditMode] = useState(false);

//   // Données des plafonds
//   const [dailyLimit, setDailyLimit] = useState(1000);
//   const [transactionTypeLimit, setTransactionTypeLimit] = useState({
//     national: 500,
//     international: 100,
//     onlinePayment: 200
//   });

//   // Fonction pour activer le mode édition
//   const handleEditClick = () => {
//     setEditMode(!editMode);
//   };

//   // Fonction pour sauvegarder les modifications
//   const handleSaveClick = () => {
//     // Implémenter la logique pour sauvegarder les données modifiées
//     setEditMode(false);
//     // Effectuer les requêtes API ou actions nécessaires pour enregistrer les changements
//   };

//   return (
//     <div className="plafond-settings">
//       <h2>Paramètres de Plafond</h2>
//       <div className="plafond-section">
//         <h3>Plafond Journalier</h3>
//         {editMode ? (
//           <input
//             type="number"
//             value={dailyLimit}
//             onChange={(e) => setDailyLimit(e.target.value)}
//           />
//         ) : (
//           <p>{dailyLimit}</p>
//         )}
//       </div>
//       {/*  */}
//       <div className="button-container">
//         {editMode ? (
//           <button onClick={handleSaveClick}>Enregistrer</button>
//         ) : (
//           <button onClick={handleEditClick}>Modifier</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PlafondSettings;


import React, { useState } from 'react';

const SetTransferLimit = () => {
  const [dailyLimit, setDailyLimit] = useState(0);

  const handleSetLimit = () => {
    // Logique pour envoyer le 'dailyLimit' au backend
    // Envoie de la limite journalière à l'API backend

    // Réinitialisation de l'état après avoir défini le plafond
    setDailyLimit(0);
    // Afficher une confirmation ou gérer les étapes suivantes si nécessaire
  };

  return (
    <div className="set-transfer-limit-container">
      <h2>Paramétrage du Plafond Journalier</h2>
      <div className="input-container">
        <label htmlFor="dailyLimit">Plafond Journalier :</label>
        <input
          type="number"
          id="dailyLimit"
          value={dailyLimit}
          onChange={(e) => setDailyLimit(e.target.value)}
          placeholder="Entrez le plafond journalier"
          className="input-field"
        />
      </div>
      <button onClick={handleSetLimit} className="set-limit-button">
        Définir le Plafond
      </button>
    </div>
  );
};

export default SetTransferLimit;
