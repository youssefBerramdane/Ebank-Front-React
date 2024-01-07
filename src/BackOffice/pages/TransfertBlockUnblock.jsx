import React, { useState } from 'react';

const TransfertBlockUnblock = () => {
  const [transferts, setTransferts] = useState([
    { id: 1, montant: 500, bloqué: false },
    { id: 2, montant: 300, bloqué: true },
    { id: 3, montant: 700, bloqué: false },
    // ... Ajoutez d'autres transferts ici si nécessaire
  ]);

  const toggleBloque = (id) => {
    const updatedTransferts = transferts.map((transfert) =>
      transfert.id === id ? { ...transfert, bloqué: !transfert.bloqué } : transfert
    );
    setTransferts(updatedTransferts);
  };

  return (
    <div>
      <h1>Blocage/Déblocage des Transferts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Montant</th>
            <th>État</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transferts.map((transfert) => (
            <tr key={transfert.id}>
              <td>{transfert.id}</td>
              <td>{transfert.montant}</td>
              <td>{transfert.bloqué ? 'Bloqué' : 'Débloqué'}</td>
              <td>
                <button onClick={() => toggleBloque(transfert.id)}>
                  {transfert.bloqué ? 'Débloquer' : 'Bloquer'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransfertBlockUnblock;
