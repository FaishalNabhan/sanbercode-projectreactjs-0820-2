import React from "react"
import {FruitProvider} from "./BuahContext"
import FruitList from "./FruitList"
import FruitForm from "./FruitForm"

const Fruit = () => {
  return(
    <FruitProvider>
      <div style={{width: "40%", margin: "0 auto"}}>
        <FruitList/>
        <br/>
        <br/>
        <FruitForm/>
      </div>
    </FruitProvider>
  )
}

export default Fruit