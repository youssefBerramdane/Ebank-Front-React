// import React, { useState } from 'react';

// // Supposons que transferData contient les données des transferts
// const transferData = [
//   { id: 1, reference: 'REF123', status: 'à servir' },
//   { id: 2, reference: 'REF456', status: 'en cours' },
//   { id: 3, reference: 'REF789', status: 'à servir' },
//   // ... Autres données de transfert
// ];

// function NotificationResend() {
//   const [transfers, setTransfers] = useState(transferData);

//   const handleResend = (id) => {
//     // Ici, vous pouvez implémenter la logique pour renvoyer la notification pour le transfert avec l'ID spécifié
//     // Par exemple, mettre à jour l'état du transfert dans la base de données ou envoyer une nouvelle notification
//     console.log(`Renvoyer la notification pour le transfert avec l'ID ${id}`);
//   };

//   return (
//     <div className="notification-resend-container">
//       <h2>Renvoi des Notifications</h2>
//       <table className="transfer-table">
//         <thead>
//           <tr>
//             <th>Référence</th>
//             <th>Statut</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transfers.map((transfer) => (
//             <tr key={transfer.id}>
//               <td>{transfer.reference}</td>
//               <td>{transfer.status}</td>
//               <td>
//                 {transfer.status === 'à servir' ? (
//                   <button onClick={() => handleResend(transfer.id)} disabled={transfer.status !== 'à servir'}>
//                     Renvoyer Notification
//                   </button>
//                 ) : (
//                   <button disabled>Renvoyer Notification</button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default NotificationResend;

import React, { useState } from 'react';

function NotificationResend() {
  const [transfers, setTransfers] = useState([
    { id: 1, reference: 'REF123', status: 'à servir' },
    { id: 2, reference: 'REF456', status: 'en cours' },
    { id: 3, reference: 'REF789', status: 'à servir' },
    // ... Autres données de transfert
  ]);

  const handleResend = (id) => {
    // Ici, vous pouvez implémenter la logique pour renvoyer la notification pour le transfert avec l'ID spécifié
    // Par exemple, mettre à jour l'état du transfert dans la base de données ou envoyer une nouvelle notification
    console.log(`Renvoyer la notification pour le transfert avec l'ID ${id}`);
  };

  return (
    <div className="notification-resend-container">
      <h2>Renvoi des Notifications</h2>
      <table className="transfer-table">
        <thead>
          <tr>
            <th>Référence</th>
            <th>Statut</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map((transfer) => (
            <tr key={transfer.id}>
              <td>{transfer.reference}</td>
              <td>{transfer.status}</td>
              <td>
                {transfer.status === 'à servir' ? (
                  <button onClick={() => handleResend(transfer.id)} disabled={transfer.status !== 'à servir'}>
                    Renvoyer Notification
                  </button>
                ) : (
                  <button disabled>Renvoyer Notification</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NotificationResend;
