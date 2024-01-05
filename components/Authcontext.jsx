import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const UserContext = createContext()


const Authcontext = ({ children }) => {
  const [error, setError] = useState("");
  const [isLoggedin, setIsloggedin] = useState(false)
  const [userData, setUserdata] = useState('')
  
  //check if user is logged in
  useEffect(() => {
    AsyncStorage.getItem("userData").then((data) => {
      if (data) {
        console.log(data)
       return setUserdata(JSON.parse(data))
      }
     
    })
    AsyncStorage.getItem("loginjwt").then((data) => {
      if (data) {
        setIsloggedin(true)
      }
      {
        setIsloggedin(false)
      }
    }).catch((err)=> console.log(err))
  },[]);

  const logindata = ()=>{
    AsyncStorage.getItem("userData").then((data) => {
      if (data) {
        console.log(data)
       return setUserdata(JSON.parse(data))
      }
     
    }).catch((err)=> console.log(err))
  }
  const handleLogout = () => {
    AsyncStorage.removeItem("loginjwt")
      .then((data) => {
        setIsloggedin(false);
        setUserdata('')
      })
      .catch((err) => console.log(err));
  };

  
  
  
  return <UserContext.Provider value={{logindata, handleLogout, isLoggedin, setIsloggedin, userData}}>{children}</UserContext.Provider>;
};

export default Authcontext;
