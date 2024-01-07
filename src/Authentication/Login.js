// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import './Login.css'
// export default function Login() {
//   return (
//     <section className="vh-80">
//   <div className="container py-5 h-100">
//     <div className="row d-flex align-items-center justify-content-center h-100">
//       <div className="col-md-8 col-lg-7 col-xl-6">
//         <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
//           className="img-fluid" alt="Phone image" style={{height:"75vh"}}/>
//       </div>
//       <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//         <form>
          
//           <div className="form-outline mb-4">
//             <input type="email" id="form1Example13" className="form-control form-control-lg" />
//             <label className="form-label" htmlFor="form1Example13">Email address</label>
//           </div>

          
//           <div className="form-outline mb-4">
//             <input type="password" id="form1Example23" className="form-control form-control-lg" />
//             <label className="form-label" htmlFor="form1Example23">Password</label>
//           </div>
//           <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
//         </form>
//       </div>
//     </div>
//   </div>
// </section>
//   )
// }

import React from 'react';
import Bank from "./../assests/images/bank2.jpeg";
import "./Login.css";


export default function Login() {
  const[login, setLogin] = React.useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    console.log(event);
    setLogin(prevState => {
      return {
        ...prevState,
      [event.target.name]: event.target.value
      }
      
    }
      )

  }
  function getSubmitted() {
    console.log(login)
  }


  return (
    <div className='login-main'>
    <div className='login-content'>
       <h2>Welcome Back</h2>
       <p>Enter your credentials to access your account</p>
    <div className='login-inputs'>
      <label>Email Address</label>
      <input 
      name="email" 
      type='text' 
      placeholder='Email address'
      onChange={handleChange}
      /> 
      <label>Password</label>
      <input 
      name="password" 
      type='password' 
      placeholder='Password'
      onChange={handleChange}
      />
      <button onClick={getSubmitted} className='buttn'>Login</button> 
    </div>   

      </div>
     <div className='login-image'>
      <img src={Bank} alt="Tree"/>
    </div>
    </div>
  )
}
