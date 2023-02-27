import { createContext , useEffect, useState} from "react"

export const ModeContext= createContext({
    setDarkMode:()=>{},
    toggle:()=>{},
    darkMode:false
})

export const ModeProvider=({children})=>{
    const [darkMode,setDarkMode]=useState(JSON.parse(localStorage.getItem('darkMode'))|| false)

    const toggle=()=>{
        setDarkMode(!darkMode)
    }

    useEffect(()=>{
        localStorage.setItem('darkMode',darkMode)
    },[darkMode])

    const value={
        darkMode,
        setDarkMode,
        toggle,
    }
    return (<ModeContext.Provider value={value}>{children}</ModeContext.Provider>)
}