import React, {useContext} from "react"
import {FruitContext} from "./BuahContext.js"

const FruitList = () =>{
  const [fruit, setFruit, inputForm ,setInputForm] = useContext(FruitContext)

  const handleDelete=(event)=>{
    var idFruit = parseInt(event.target.value)
    var newFruit = movie.filter(x=> x.id !== idFruit)
    setFruit([...newFruit])
  }

  const handleEdit=(event)=>{
    var idFruit = parseInt(event.target.value)
    var singleFruit = fruit.find(x=> x.id === idMovie)
    setInputForm({...inputForm, nama: singleFruit.nama, harga: singleFruit.harga, berat: singleFruit.berat,
        id: idFruit})
  }

  return(
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>Harga</th>
          <th>Berat</th>
          <th>Action</th>
        </tr>        
      </thead>
      <tbody>

      {fruit.map((el, idx)=>{
        return(
          <tr key={el.id}>
            <td>{idx+1}</td>
            <td>{el.name} </td>
            <td>{el.harga} </td>
            <td>{el.berat/1000} kg / 1000</td>
            <td>
              <button value={el.id} style={{marginRight: "10px"}} onClick={handleEdit}>Edit</button>
              <button value={el.id} onClick={handleDelete}>Delete</button>
            </td>
          </tr>
        ) 
      })}
      </tbody>
    </table>
  )

}

export default FruitList