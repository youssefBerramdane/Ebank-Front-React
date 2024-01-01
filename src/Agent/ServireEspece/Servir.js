import React, { useRef, useState } from 'react'
import'./Servir.css';
import "bootstrap/dist/css/bootstrap.min.css";
export default function Servir() {
    const reference=useRef('');
    const [current,setCurrent]=useState("search");
    const SearchPayiment=(e)=>{
        e.preventDefault();
        console.log(reference.current.value)
        setCurrent("loading")
        setCurrent("verification")
    }
  return (
    <div className="page">
        <div className='card'>
            <div className="card-header">SERVIR UN TRANSFERT EN ESPECE DEPUIS LA CONSOLE AGENT</div>
             <div className='card-body'>
                {current==="search" && <div>
                <h3>Saisir le référence du transfert</h3>
                <form className='form mt-3'>
                    <div>
                        <label className='form-label'>Référence</label>
                        <input className='form-control' type="number" ref={reference} />
                    </div>
                    <div className='text-end mt-3'>
                        <button  onClick={SearchPayiment} className='btn btn-outline-success'>Search</button>
                    </div>
                </form>
                </div>}
                {current==="loading" && <div className="spinner-grow d-flex" role="status">
                <span className="sr-only ms-5">Loading...</span>
                </div>}
                {current==="verification" && <div className='verification p-4'>
                    <h5 className='text-primary'>Les informations du donneur d’ordre :</h5>
                    <div className='d-flex flex-column'>
                        <div className='d-flex justify-content-between'>
                            <h6>ID</h6>
                            <p>{"id"}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Nom & prénom</h6>
                            <p>{"Nom & prénom"}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Date d’émission</h6>
                            <p>{"Date d’émission"}</p>
                        </div>
                        <h5 className='text-success'>Les informations de l’opération du transfert :</h5>
                        <div className='d-flex justify-content-between'>
                            <h6>Montant à servir au client</h6>
                            <p>{"Montant à servir au client"}</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h6>Nom & prénom du bénéficiaire saisie lors du transfert</h6>
                            <p>{"Montant à servir au client"}</p>
                        </div>
                        <div className='text-center'>
                            <button onClick={()=>setCurrent("KYC")} className='btn btn-success'>Saisir les données KYC</button>
                        </div> 
                    </div>
                    </div>}
                {current==="KYC" && <div className='kyc'>
                        <form>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Titre</label>
                                <select>
                                    <option value="M" key="M">M</option>
                                    <option value="Mme" key="Mme">Mme</option>
                                </select>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Prénom</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Type de pièce d'identité* </label>
                                <select>
                                    <option value="Passport" key="Passport">Passport</option>
                                    <option value="carte d'identité nationale" key="carte d'identité nationale">carte d'identité nationale</option>
                                </select>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>N° pièce d'identité</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Validité pièce d'identité</label>
                                <input className='form-control' type="date" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Date de naissance</label>
                                <input className='form-control' type="date" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Pays de nationalité</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Adresse légale</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Ville</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>GSM</label>
                                <input className='form-control' type="text" required />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <label className='form-label'>Email </label>
                                <input className='form-control' type="email" />
                            </div>
                            <div className='text-center'>
                                <button className='btn btn-outline-success'>Valider</button>
                            </div>
                        </form>
                    </div>}

            </div>
            
            
        </div>
    </div>
    
  )
}
