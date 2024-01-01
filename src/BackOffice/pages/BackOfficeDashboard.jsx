import React from 'react';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsExclamationTriangleFill,
  BsGraphUp,
} from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,Legend, ResponsiveContainer } from 'recharts';

function BackOfficeDashboard() {
  const data = [
    { date: 'Jan', blocked: 5, unblocked: 12 },
    { date: 'Feb', blocked: 8, unblocked: 15 },
    { date: 'Mar', blocked: 10, unblocked: 18 },
    { date: 'Apr', blocked: 6, unblocked: 11 },
    { date: 'May', blocked: 12, unblocked: 20 },
    // ... Ajoutez d'autres données pour chaque mois
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>BACK OFFICE DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>BLOCKED TRANSFERS</h3>
            <BsExclamationTriangleFill className='card_icon' />
          </div>
          <h1>8</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>TRANSACTION TREND</h3>
            <BsGraphUp className='card_icon' />
          </div>
          <h1>7%</h1>
        </div>
      </div>

      <div className='charts'>
      <ResponsiveContainer width="90%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="blocked" stackId="a" fill="#FF0000" name="Bloqués" />
        <Bar dataKey="unblocked" stackId="a" fill="#00FF00" name="Débloqués" />
      </BarChart>
    </ResponsiveContainer>
      </div>
    </main>
  );
}

export default BackOfficeDashboard;
