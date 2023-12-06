import React from 'react'
import { useState, createContext } from 'react';
import { useContext } from 'react';

type Props = {
    children: React.ReactNode
}

const initialValue = {
    age: 0,
    addAge: () => {},
    saving: 0,
    addSaving: () =>{}
}

export const InfoContext = createContext(initialValue)

export const useInfoContext = () =>{
    return useContext(InfoContext)
}

const MyContentProvider = (props: Props) => {
    const [age, setAge] = useState(18)
    const [saving, setSaving] = useState(1000)

    const addAge = () =>{
        setAge((prev) => prev + 1)
    }

    const addSaving = () =>{
        setSaving((prev) => prev + 1000)
    }
    
  return (
    <InfoContext.Provider value={{age, addAge, saving, addSaving}}>
        {props.children}
    </InfoContext.Provider>
  )
}

export default MyContentProvider