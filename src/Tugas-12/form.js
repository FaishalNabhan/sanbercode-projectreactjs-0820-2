import React, {Component} from "react";
import Item from '../Tugas-10/item.js';

class FormBuah extends Component{
    constructor(props){
        super(props)
        this.state = {
            tabelBuah:[
                {nama: "Semangka", harga: 10000, berat: 1000},
                {nama: "Anggur", harga: 40000, berat: 500},
                {nama: "Strawberry", harga: 30000, berat: 400},
                {nama: "Jeruk", harga: 30000, berat: 1000},
                {nama: "Mangga", harga: 30000, berat: 500}
              ],
            inputBuah: "",
            inputHarga: "",
            inputBerat: "",
            index: -1
        }
        this.submitForm = this.submitForm.bind(this);
        this.deleteBuah = this.deleteBuah.bind(this);
    }

    submitForm(event){
        event.preventDefault()
        var index = this.state.index
        if ( index === -1){
          this.setState({
            tabelBuah: [...this.state.tabelBuah, this.state.inputBuah],
            inputNama: ""
          })
        }else{
          var newBuah = this.state.tabelBuah 
          newBuah[index] = this.state.inputBuah
    
          this.setState({
            tabelBuah: [...newBuah],
            inputNama: "",
            index: -1
          })
        }
      }

      changeInputBuah = (event) =>{
        var value= event.target.value
        this.setState({inputBuah: value})
      }

      render(){
        return (
            <>
              <h1 style={{textAlign : "center"}}> Daftar Harga Buah</h1>
              <table style={{border: "1px solid", width: "40%", margin: "0 auto"}}>
                <thead style={{background: "#aaa"}}>
                  <tr>
                    <th>No.</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody style={{background: "coral"}}>
                  {this.state.tabelBuah.map((el, index)=> {
                    return (
                      <tr key={index}>
                          <td>{index+1}</td>
                          <td>{el}</td>
                          <td>
                            <button value={index} style={{marginRight: "5px"}} onClick={this.editBuah}>Edit</button>
                            <button value={index} onClick={this.deleteBuah}>Delete</button>
                          </td>
                      </tr>
                      )
                    })}
                </tbody>
              </table>
              <br/> <br/>
              <form style={{textAlign: "center"}} onSubmit={this.submitForm}>
                <strong style={{marginRight: "10px"}}>Nama</strong>
                <input required type="text" value={this.state.inputBuah} onChange={this.changeInputBuah}/>
                <button>Save</button>
              </form>
            </>
          )
      }
}

export default FormBuah