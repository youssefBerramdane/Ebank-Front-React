// TransferConsultation.jsx

import React, { useState } from 'react';


const transferData = [
    {
      id: 1,
      sender: 'John Doe',
      recipient: 'Alice Smith',
      amount: 500,
      status: 'Pending',
      reference: 'REF123',
      clientId: 'CLT456',
      date: '2023-12-28',
      // Autres champs de données
    },
    {
      id: 2,
      sender: 'Jane Smith',
      recipient: 'Bob Johnson',
      amount: 300,
      status: 'Completed',
      reference: 'REF456',
      clientId: 'CLT789',
      date: '2023-12-29',
      // Autres champs de données
    },
    // Ajoutez d'autres objets de transfert avec des données différentes
  ];
  

function TransferConsultation() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTransfers, setFilteredTransfers] = useState(transferData);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = transferData.filter((transfer) =>
      transfer.sender.toLowerCase().includes(term) ||
      transfer.recipient.toLowerCase().includes(term) ||
      transfer.status.toLowerCase().includes(term) ||
      transfer.reference.toLowerCase().includes(term) ||
      transfer.clientId.toLowerCase().includes(term) ||
      transfer.date.toLowerCase().includes(term)
      // Ajoutez d'autres critères de recherche (pièce d'identité, N° GSM, etc.) ici
    );
    setFilteredTransfers(filtered);
  };

  return (
    <div className="transfer-consultation-container">
      <input
        type="text"
        placeholder="Rechercher par expéditeur, destinataire, statut, référence, etc..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <table className="transfer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Expéditeur</th>
            <th>Destinataire</th>
            <th>Montant</th>
            <th>Statut</th>
            <th>Référence</th>
            <th>Date</th>
            {/* Ajoutez d'autres en-têtes de colonne selon les critères */}
          </tr>
        </thead>
        <tbody>
          {filteredTransfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.id}</td>
              <td>{transfer.sender}</td>
              <td>{transfer.recipient}</td>
              <td>{transfer.amount}</td>
              <td>{transfer.status}</td>
              <td>{transfer.reference}</td>
              <td>{transfer.date}</td>
              {/* Ajoutez d'autres colonnes selon les critères */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransferConsultation;
