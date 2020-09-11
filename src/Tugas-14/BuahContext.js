import React, { useState, createContext } from "react";

export const FruitContext = createContext();

export const FruitProvider = props => {
    const [fruit, setFruit] = useState([
        { id: 1, nama: "Semangka", harga: 10000, berat: 1000},
        { id: 2, nama: "Anggur", harga: 40000, berat: 500},
        { id: 3, nama: "Strawberry", harga: 30000, berat: 400},
        { id: 4, nama: "Jeruk", harga: 30000, berat: 1000},
        { id: 5, nama: "Mangga", harga: 30000, berat: 500}
    ]);

    const [inputForm, setInputForm] = useState({
        nama: "",
        harga: 0,
        berat: 0,
        id: null
    })

    return (
        <FruitContext.Provider value={[fruit, setFruit, inputForm, setInputForm]}>
            {props.children}
        </FruitContext.Provider>
    );
};