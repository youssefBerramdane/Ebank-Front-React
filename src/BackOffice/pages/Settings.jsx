import React from 'react';
import { BsFillGearFill } from 'react-icons/bs';

function Settings() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>SETTINGS</h3>
      </div>

      <div className="settings-content">
        <div className="settings-card">
          <BsFillGearFill className="card_icon" />
          <h3>Paramètres de Compte</h3>
          <p>Modifier votre mot de passe, les informations personnelles, etc.</p>
        </div>

        <div className="settings-card">
          <BsFillGearFill className="card_icon" />
          <h3>Paramètres de Notification</h3>
          <p>Gérer vos préférences de notification et d'alertes.</p>
        </div>

        <div className="settings-card">
          <BsFillGearFill className="card_icon" />
          <h3>Paramètres Avancés</h3>
          <p>Personnaliser les fonctionnalités avancées de l'application.</p>
        </div>
      </div>
    </main>
  );
}

export default Settings;
