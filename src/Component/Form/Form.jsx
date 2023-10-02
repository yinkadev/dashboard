// import React, { useState,useEffect } from 'react'
// // import Validation from '../Validation/Validation'

// const Form = () => {
//   const [values,setValues ] = useState({
//     email:"",
//     password:"",
    
//   })



//   const [errors, setError] = useState({})

//   function handleChange(e){
//     setValues({...values,[e.target.name]:e.target.value})

//   }

//   const Validation = (values) => {
//     let errors = {}
//     if(!values.password){
//       errors.password = "password is required"
//     }else if (values.password.length < 5){
//       errors.password = "password must be  more than 5"
//     }
    
    
    
//     if(!values.email){
//       errors.email = "email is required"
//     }
//     return errors;
//     }
//   function handleSubmit(e){
//     e.preventDefault();
//     setError(Validation(values));
//    }

//   return (

//     <div>
  
//     <form onSubmit={handleSubmit}>

//     <div>

//     <input type="text"
//      name='email'
//       placeholder='Email'
//       value={values.email}
//        onChange={handleChange} 
//        { errors.email && <p style={{color:"red"}}>{errors.email}</p> }
//     />
//     </div>


//     <div>
//     <input type="password"
//      name='password'
//       placeholder='Password'
//       value={values.password}
//       onChange={handleChange}
//       {
//         errors.password && <p style={{color:"red"}}>{errors.password}</p>
//       }
//        />


//        </div>
//        <button type='submit'>log</button>
//        </form>
//     </div>
//   )
// }

// export default Form