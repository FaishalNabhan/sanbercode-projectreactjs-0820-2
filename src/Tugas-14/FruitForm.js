import React, {useState, useContext} from "react"
import {FruitContext} from "./BuahContext.js"

const FruitForm = () =>{
  const [fruit, setfruit, inputForm, setInputForm] = useContext(FruitContext)


  const handleSubmit = (event) =>{
    event.preventDefault()
    var newId = fruit.length + 1
    if (inputForm.id === null){
      setMovie([...fruit, {nama: inputForm.nama, harga: inputForm.harga, berat: inputForm.berat, id: newId}])
    }else{
      var singleFruit = fruit.find(x=> x.id === inputForm.id)
      singleFruit.nama = inputForm.nama
      singleFruit.harga = inputForm.harga
      singleFruit.berat = inputForm.berat
      setFruit([...fruit])
    }
    setInputForm({nama: "", harga: 0, berat: 0, id: null})
  }


  const handleChangeName = (event) =>{
    setInputForm({...inputForm, nama: event.target.value})
  }
  
  const handleChangePrice = (event) =>{
    setInputForm({...inputForm, harga: event.target.value})
  }

  const handleChangeWeight = (event) =>{
      setInputForm({...inputForm, berat: event.target.value})
  }

  return(
    <>
      <form onSubmit={handleSubmit}>

        <strong>Nama Buah : </strong><input type="text" value={inputForm.name} onChange={handleChangeName} /><br/>
        <strong>Harga Buah : </strong><input type="number" value={inputForm.harga} onChange={handleChangePrice} /><br/>
        <strong>Berat Buah : </strong><input type="number" value={inputForm.berat} onChange={handleChangeWeight} /> <br/>
        <button>submit</button>
      </form>
    </>
  )

}

export default FruitForm