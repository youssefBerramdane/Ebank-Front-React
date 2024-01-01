import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Gab from "./GAB/Gab";
import Login from "./Authentication/Login";
import Servir from "./Agent/ServireEspece/Servir";
import Home from "./BackOffice/pages/BackOfficeDashboard";
import { useState } from "react";
import Header from "./BackOffice/components/Header";
import Sidebar from "./BackOffice/components/Sidebar";
import TransferConsultation from "./BackOffice/pages/TransferConsultation";
import NotificationResend from "./BackOffice/pages/NotificationResend";
import BlockTransfer from './BackOffice/pages/block';
import UnblockTransfer from './BackOffice/pages/UnblockTransfer';
import SetTransferLimit from './BackOffice/pages/PlafondSettings';
import NavbarGab from './layout/NavbarGab';


function App() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
   
     <div>
      <Routes>
        <Route path='/' element={ <>
            <NavbarGab />
            <Login />
            </>
            }/>
          <Route path="/gab" element={
            <>
            <NavbarGab />
            <Gab/>
            </>
            
          }/>
          <Route path="login" element={
          <>
          <NavbarGab />
          <Login/>
          </>
          
          
          }/>
          <Route path="agent/servir" element ={
           <>
           <NavbarGab />
           <Servir/>
           </>
            
          }/>

          <Route path="/backoffice" element={
             <div className='grid-container'>
              <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              <Home />
            </div>
          } />
          <Route path="/transfers" element={
             <div className='grid-container'>
                 <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              <TransferConsultation />
            </div>
          } />
          <Route path="/notifications" element={
             <div className='grid-container'>
                 <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              <NotificationResend />
            </div>
          } />

         <Route path="/block" element={
             <div className='grid-container'>
                 <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              <BlockTransfer />
            </div>
          } />
          <Route path="/unblock" element={
             <div className='grid-container'>
                 <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              <UnblockTransfer />
            </div>
          } />

          <Route path="/limit-settings" element={
             <div className='grid-container'>
                 <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              <SetTransferLimit />
            </div>
          } />
      </Routes>
   
    </div>
  
    
  )
}

export default App;