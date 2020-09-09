import React, {Component} from "react"

class Item extends Component{

  render(){
    return(
      <tr>
        <td>{this.props.item.nama}</td>
        <td>{this.props.item.harga}</td>
        <td>{this.props.item.berat} gram</td>
      </tr>
    )
  }
}

export default Item