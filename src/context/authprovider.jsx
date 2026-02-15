import { useState } from "react";
import {Authcontext} from '../context/authcontext.js'


const AuthProvider = ({ children }) => {

  const [login,setlogin] = useState()
   const [user,setuser] = useState()
   const [roll,setroll] = useState()
  return (
    <Authcontext.Provider value={{login,setlogin,user,setuser,roll,setroll}}>
      {children}
    </Authcontext.Provider>
  );
}

export default AuthProvider;