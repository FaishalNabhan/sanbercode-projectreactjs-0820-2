import React from 'react';

class Tugas9 extends React.Component {
    render(){
        return (
            <div className="Form">
            <h1 style={{textAlign:'center'}}><b>Form Pembelian Buah</b></h1>
            <div classname="innerText">
              <div classname="layouting">
                <table style={{textAlign:"left"}}>
                  <tr>
                    <th><label for="name">Nama Pelanggan</label></th>
                    <th><input type="text" id="name" name="name"></input></th>
                  </tr>
                  <tr>
                    <th><label for="email">Daftar Buah</label></th>
                    <th><input type="checkbox" id="buah1" name="buah1" value="Semangka"></input>
                          <label for="buah1"> Semangka</label><br></br>
                        <input type="checkbox" id="buah2" name="buah2" value="Jeruk"></input>
                          <label for="buah2"> Jeruk</label><br></br>
                        <input type="checkbox" id="buah3" name="buah3" value="Nanas"></input>
                          <label for="buah3"> Nanas</label><br></br>
                        <input type="checkbox" id="buah4" name="buah4" value="Salak"></input>
                          <label for="buah4"> Salak</label><br></br>
                        <input type="checkbox" id="buah5" name="buah5" value="Anggur"></input>
                          <label for="buah5"> Anggur</label>
                    </th>
                  </tr>
                  <tr>
                    <th><input type="submit" class="sendbutton" value="Kirim"></input></th>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        )
    }
}

export default Tugas9