import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
    currentUser:JSON.parse(localStorage.getItem("user")) || null,
    setCurrentUser:()=>{},
    login:()=>{},
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async(input) => {
    const res=await axios.post('http://localhost:8800/api/auth/login',input,{
      withCredentials:true
    })
    setCurrentUser(res.data)
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const value={
    currentUser, 
    login
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};