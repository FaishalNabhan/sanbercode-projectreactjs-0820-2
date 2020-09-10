import React, {useState, useEffect} from "react"
import axios from 'axios';

const DaftarBuah = () => {
    // {nama: "Semangka", harga: 10000, berat: 1000},
    // {nama: "Anggur", harga: 40000, berat: 500},
    //   {nama: "Strawberry", harga: 30000, berat: 400},
    //   {nama: "Jeruk", harga: 30000, berat: 1000},
    //   {nama: "Mangga", harga: 30000, berat: 500}
    const [dataBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({name: "", id: null})
    const [inputHarga, setInputHarga] = useState({name: "", id: null})
    const [inputBerat, setInputBerat] = useState({name: "", id: null})

    useEffect(() => {
        if (dataBuah === null){
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                setDataBuah(res.data)
                console.log(res.data)
            })
        }
    }, [dataBuah]);

    const SubmitForm = (event) => {
        event.preventDefault()

        if ( input.id === null) {
            axios.post(`http://backendexample.sanbercloud.com/api/fruits`)
            .then(res => {
                var data = res.data
                setDataBuah([...dataBuah, {id: data.id, name: data.name}])
                setInput({id: null, name: ""})
            })

        }else{

            axios.put(`http://backendexample.sanbercloud.com/api/fruits/{ID_FRUIT}`)
        }
    }
 
  handleDelete(event){
    let index = event.target.value
    let newDaftarBuah = daftarBuah
    let editedDataBuah = newDaftarBuah[indexOfForm]
    newDaftarBuah.splice(index, 1)

    if (editedDataBuah !== undefined){
      // array findIndex baru ada di ES6
      var newIndex = newDaftarBuah.findIndex((el) => el === editedDataBuah)
      setState({daftarBuah: newDaftarBuah, indexOfForm: newIndex})
      
    }else{
      
      setState({daftarBuah: newDaftarBuah})
    }
    
  }
  
  handleEdit(event){
    let index = event.target.value
    let dataBuah = daftarBuah[index]
    setState({
      inputName: dataBuah.nama,
      inputHarga: dataBuah.harga,
      inputBerat: dataBuah.berat,
      indexOfForm: index
    })
  }

  handleChange(event){
    let typeOfInput = event.target.name
    switch (typeOfInput){
      case "name":
      {
        setState({inputName: event.target.value});
        break
      }
      case "harga":
      {
        setState({inputHarga: event.target.value});
        break
      }
      case "berat":
      {
        setState({inputBerat: event.target.value});
          break
      }
    default:
      {break;}
    }
  }

  handleSubmit(event){
    // menahan submit
    event.preventDefault()

    let nama = inputName
    let harga = inputHarga.toString()
    let berat = inputBerat

    console.log(this.state)

    if (nama.replace(/\s/g,'') !== "" && harga.replace(/\s/g,'') !== ""){      
      let newDaftarBuah = daftarBuah
      let index = indexOfForm
      
      if (index === -1){
        newDaftarBuah = [...newDaftarBuah, {nama, harga, berat}]
      }else{
        newDaftarBuah[index] = {nama, harga, berat}
      }
  
      setState({
        daftarBuah: newDaftarBuah,
        inputName: "",
        inputHarga: "",
        inputBerat: 0
      })
    }

  }

  render(){
    return(
      <>
        <h1>Daftar Harga Buah</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Harga</th>
              <th>Berat</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
              {
                daftarBuah.map((item, index)=>{
                  return(                    
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.nama}</td>
                      <td>{item.harga}</td>
                      <td>{item.berat/1000} kg</td>
                      <td>
                        <button onClick={handleEdit} value={index}>Edit</button>
                        &nbsp;
                        <button onClick={handleDelete} value={index}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
          </tbody>
        </table>
        {/* Form */}
        <h1>Form Daftar Harga Buah</h1>
        <div style={{width: "50%", margin: "0 auto", display: "block"}}>
          <div style={{border: "1px solid #aaa", padding: "20px"}}>
            <form onSubmit={handleSubmit}>
              <label style={{float: "left"}}>
                Nama:
              </label>
              <input style={{float: "right"}} type="text" name="name" value={inputName} onChange={handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Harga:
              </label>
              <input style={{float: "right"}} type="text" name="harga" value={inputHarga} onChange={handleChange}/>
              <br/>
              <br/>
              <label style={{float: "left"}}>
                Berat (dalam gram):
              </label>
              <input style={{float: "right"}} type="number" name="berat" value={inputBerat} onChange={handleChange}/>
              <br/>
              <br/>
              <div style={{width: "100%", paddingBottom: "20px"}}>
                <button style={{ float: "right"}}>submit</button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default DaftarBuah