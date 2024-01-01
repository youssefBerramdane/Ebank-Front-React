// import React, { useState } from 'react';

// // Composant pour l'interface de blocage d'un transfert individuel par le Back Office
// function BlockTransferForm({ transferData, blockTransfer }) {
//   const [blockedReason, setBlockedReason] = useState('');
  
//   const handleBlockTransfer = () => {
//     // Appeler la fonction pour bloquer le transfert avec la raison donnée
//     blockTransfer(transferData.id, blockedReason);
//   };

//   return (
//     <div>
//       <h2>Blocage du Transfert</h2>
//       <p>ID du Transfert: {transferData.id}</p>
//       <p>Expéditeur: {transferData.sender}</p>
//       <p>Destinataire: {transferData.recipient}</p>
//       <input
//         type="text"
//         placeholder="Motif de blocage"
//         value={blockedReason}
//         onChange={(e) => setBlockedReason(e.target.value)}
//       />
//       <button onClick={handleBlockTransfer}>Bloquer Transfert</button>
//     </div>
//   );
// }

// // Composant pour l'interface du batch de blocage
// function BatchBlockTransfer({ processBatchBlock }) {
//   return (
//     <div>
//       <h2>Batch de Blocage</h2>
//       <button onClick={processBatchBlock}>Exécuter Batch de Blocage</button>
//     </div>
//   );
// }

// // Composant pour le batch de déshérence
// function BatchDeshérence({ processBatchDeshérence }) {
//   return (
//     <div>
//       <h2>Batch de Déshérence</h2>
//       <button onClick={processBatchDeshérence}>Exécuter Batch de Déshérence</button>
//     </div>
//   );
// }

// // Exemple d'utilisation des composants avec des données statiques
// const sampleTransferData = [
//   { id: 1, sender: 'John Doe', recipient: 'Alice Smith', status: 'pending' },
//   { id: 2, sender: 'Jane Smith', recipient: 'Bob Johnson', status: 'completed' },
// ];

// function Block() {
//   const blockTransfer = (transferId, reason) => {
//     // Simuler le blocage du transfert avec les données statiques
//     console.log(`Transfert bloqué - ID: ${transferId}, Motif: ${reason}`);
//   };

//   const processBatchBlock = () => {
//     // Simuler le traitement du batch de blocage avec les données statiques
//     console.log('Traitement du batch de blocage exécuté');
//   };

//   const processBatchDeshérence = () => {
//     // Simuler le traitement du batch de déshérence avec les données statiques
//     console.log('Traitement du batch de déshérence exécuté');
//   };

//   return (
//     <div>
//       <BlockTransferForm transferData={sampleTransferData[0]} blockTransfer={blockTransfer} />
//       <BatchBlockTransfer processBatchBlock={processBatchBlock} />
//       <BatchDeshérence processBatchDeshérence={processBatchDeshérence} />
//     </div>
//   );
// }

// export default Block;

import React, { useState } from 'react';

function BlockTransfer() {
  const [selectedTransfer, setSelectedTransfer] = useState(null);
  const [blockReason, setBlockReason] = useState('');
  const [batchBlockEnabled, setBatchBlockEnabled] = useState(false);


  // Liste statique de transferts (à remplacer par les données récupérées depuis le backend)
  const transferList = [
    { id: 1, reference: 'REF001' },
    { id: 2, reference: 'REF002' },
    { id: 3, reference: 'REF003' },
  ];

  // Fonction pour sélectionner un transfert à bloquer
  const selectTransfer = (transfer) => {
    setSelectedTransfer(transfer);
  };


  // Fonction pour bloquer un transfert sélectionné
  const blockSelectedTransfer = () => {
    // Ici, vous enverriez une requête à votre API Backend pour effectuer le blocage du transfert sélectionné
    // Avec la raison de blocage spécifiée par 'blockReason'

    // Après le succès du blocage, réinitialisez les états
    setSelectedTransfer(null);
    setBlockReason('');
    // Ajoutez d'autres actions après le blocage
  };

  return (
    <div className="block-transfer-container">
      <h2>Blocage de Transfert</h2>
      {/* Afficher la liste des transferts à bloquer */}
      <ul>
        {/* Générez dynamiquement la liste des transferts à bloquer */}
        {transferList.map((transfer) => (
          <li key={transfer.id}>
            <span>{transfer.reference}</span>
            <button onClick={() => selectTransfer(transfer)}>Bloquer</button>
          </li>
        ))}
      </ul>

      {/* Formulaire pour la raison de blocage */}
      {selectedTransfer && (
        <div className="block-reason-form">
          <h3>Raison du Blocage</h3>
          <textarea
            value={blockReason}
            onChange={(e) => setBlockReason(e.target.value)}
            placeholder="Raison du blocage..."
          ></textarea>
          <button onClick={blockSelectedTransfer}>Bloquer le Transfert</button>
        </div>
      )}

      {/* Bouton pour activer le Batch de Blocage */}
      <div className="batch-block-container">
        <h3>Batch de Blocage</h3>
        <button onClick={() => setBatchBlockEnabled(!batchBlockEnabled)}>
          {batchBlockEnabled ? 'Désactiver Batch de Blocage' : 'Activer Batch de Blocage'}
        </button>
      </div>
    </div>
  );
}

export default BlockTransfer;

