import React from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
]

class NamaBuah extends React.Component {
    render() {
        return <p>{this.props.nama}</p>;
    }
}

class HargaBuah extends React.Component {
    render() {
        return <p>{this.props.harga}</p>;
    }
}

class BeratBuah extends React.Component {
    render() {
        return <p>{this.props.berat}</p>;
    }
}

class Tugas10 extends React.Component {
    render() {
        return(
            {dataHargaBuah.map(el=> {
                return (
                    <h1 style={{textAlign:'center'}}><b>Tabel Harga Buah</b></h1>
                    <div style={{border: "1px  solid #000", padding: "20px"}}>
                    <table className='TabelBuah'>
                        <tr>
                            <th>Nama</th>
                            <th>Harga</th>
                            <th>Berat</th>
                        </tr>
                        <tr><NamaBuah /></tr>
                        <tr><HargaBuah /></tr>
                        <tr><BeratBuah /></tr>
                    </table>
                    </div>
                )
            })}
        )
    }
}

export default Tugas10
