import React, { useState } from 'react';

function UnblockTransfer() {
  const [selectedTransfer, setSelectedTransfer] = useState(null);
  const [unlockReason, setUnlockReason] = useState('');
  const [unlockOptions] = useState([
    'Bloqué après expiration du délai',
    'Bloqué client donneur d’ordre soupçons',
    'Bloqué client bénéficiaire soupçons',
    'Autre'
  ]);
  const [selectedOption, setSelectedOption] = useState('');

  const blockedTransferList = [
    { id: 1, reference: 'ABC123', status: 'Bloqué' },
    { id: 2, reference: 'DEF456', status: 'Bloqué' },
    // Ajoutez d'autres transferts bloqués
  ];

  const selectTransfer = (transfer) => {
    setSelectedTransfer(transfer);
  };

  const unblockSelectedTransfer = () => {
    if (selectedTransfer && selectedOption !== '' && (selectedOption !== 'Autre' || unlockReason.trim() !== '')) {
      // Appel à l'API Backend pour débloquer le transfert avec le motif spécifié
      // Ici, vous enverriez une requête à votre API Backend pour effectuer le déblocage

      // Réinitialisation des états après le déblocage réussi
      setSelectedTransfer(null);
      setUnlockReason('');
      setSelectedOption('');
      // Afficher un message de confirmation ou gérer d'autres actions nécessaires
    } else {
      // Gérer le cas où le transfert ou la raison de déblocage n'est pas sélectionné
      // Afficher un message d'erreur ou demander de sélectionner un transfert et une raison de déblocage
    }
  };

  return (
    <div className="unblock-transfer-container">
        <br/>
      <h2>Déblocage de Transfert</h2>
      <ul>
        {/* Liste des transferts bloqués */}
        {/* Générer dynamiquement la liste des transferts bloqués */}
        {/* Chaque élément de la liste a un bouton pour le sélectionner */}
        {/* Exemple de structure */}
        {blockedTransferList.map((transfer) => (
          <li key={transfer.id}>
            <span>{transfer.reference}</span>
            <br/>
            <button onClick={() => selectTransfer(transfer)}>Sélectionner</button>
          </li>
        ))}
      </ul>

      {/* Formulaire pour le déblocage avec motif */}
      {selectedTransfer && (
        <div className="unblock-reason-form">
          <h3>Motif de Déblocage</h3>
          <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="">Sélectionner un motif</option>
            {unlockOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {selectedOption === 'Autre' && (
            <textarea
              value={unlockReason}
              onChange={(e) => setUnlockReason(e.target.value)}
              placeholder="Saisir le motif de déblocage..."
            ></textarea>
          )}
          <br/>
          <br/>
          <button className='buttUn' onClick={unblockSelectedTransfer}>Débloquer le Transfert</button>
        </div>
      )}
    </div>
  );
}

export default UnblockTransfer;
