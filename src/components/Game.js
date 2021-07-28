import React from "react"
import { io } from 'socket.io-client'
import "../assets/css/game.css"
import Swal from 'sweetalert2'

let socket;

class Game extends React.Component{
    
    constructor(){
        super();
        this.array = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        this.state={
            b1:"",
            b2:"",
            b3:"",
            b5:"",
            b6:"",
            b7:"",
            b8:"",
            b9:""
        }
        this.wins=0
        this.loses=0
        this.marca=""
        this.marcaOpponnent=""
        this.turno=false
        this.arrayList=[[],[],[],[],[],[],[],[],[]]
        
    }
    componentDidMount(){
        socket = io.connect('ws://localhost:3001')  //'ws://localhost:3000'
        socket.on('connection',  (data) =>{
            console.log(data)
            this.marca="X"
            this.marcaOpponnent="O"
        } )
        socket.on('ganador', (dato)=>{
            console.log(dato)
        })

        socket.emit('listo')

        socket.on('cambio', (data)=>{
            this.marca="O"
            this.marcaOpponnent="X"
            this.turno=true
        })

        socket.on('clear', ()=>{
            this.clearBtns()
            console.log(this.turno)
        })

        socket.on('msj-output-client', (data) => {
            console.log(data);
            let posicion= data.posicion
            this.arrayList[data.index]=data.mrc
            this.setState({
                [posicion] : data.mrc
            })
            this.comprobarGanador()

            if(this.turno==false){
                this.turno=true
            }else{
                this.turno=false
            }
            
        });

    }
    comprobarGanador(){
        for (let x = 0; x < this.array.length; x++) {
            if(this.arrayList[this.array[x][0]]== "X" &&
            this.arrayList[this.array[x][1]]== "X" &&
            this.arrayList[this.array[x][2]]== "X" ){
                if(this.marca=="X"){
                    Swal.fire({
                        title: 'Has ganado!!',
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Volver a jugar!',
                        timer:5000
                      })
                      this.wins++
                }else{
                    Swal.fire({
                        title: 'Has perdido!!',
                        icon: 'warning',
                        showCancelButton: false,
                        confirmButtonText: 'Volver a jugar!',
                        timer:5000
                      })
                    this.loses++
                }
                
                this.clearEmit()
            }
        }
        for (let x = 0; x < this.array.length; x++) {
            if(this.arrayList[this.array[x][0]]== "O" &&
            this.arrayList[this.array[x][1]]== "O" &&
            this.arrayList[this.array[x][2]]== "O" ){
                if(this.marca=="O"){
                    Swal.fire({
                        title: 'Has ganado!!',
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Volver a jugar!',
                        timer:5000
                      })
                    this.wins++
                }else{
                    Swal.fire({
                        title: 'Has perdido!!',
                        icon: 'warning',
                        showCancelButton: false,
                        confirmButtonText: 'Volver a jugar!',
                        timer:5000
                      })
                    this.loses++
                }
                this.clearEmit()
            }
        }

    }
    changeValue(e) {
        let pos = e.target.name
        let idx= e.target.id

        if (this.turno==true) {
            socket.emit('msj-input-server', { index: idx, posicion: pos, mrc: this.marca })
            this.arrayList[idx]=this.marca
            this.setState({
                [pos] : this.marca
            })

        }else{
            console.log("esperar turno")
        }
        
        
    }

    clearBtns(){
        this.arrayList=[[],[],[],[],[],[],[],[],[]]
        this.setState({
            b1:"",
            b2:"",
            b3:"",
            b4:"",
            b5:"",
            b6:"",
            b7:"",
            b8:"",
            b9:""
        })
    }

    clearEmit(){
        socket.emit('limpiar')
        
    }

    render(){
        return(
        
            <div className="container">
                <h1 className="title mt-3">Tic Tac Toe</h1>
                <h3>Wins: {this.wins}</h3>
                <h3>Loses: {this.loses}</h3>
                <div id="tablero">
                    <input type="Button" id="0" name="b1" onClick={this.changeValue.bind(this)} defaultValue={this.state.b1}></input>
                    <input type="Button" id="1" name="b2" onClick={this.changeValue.bind(this)} defaultValue={this.state.b2}></input>
                    <input type="Button" id="2" name="b3" onClick={this.changeValue.bind(this)} defaultValue={this.state.b3}></input>
                    <input type="Button" id="3" name="b4" onClick={this.changeValue.bind(this)} defaultValue={this.state.b4}></input>
                    <input type="Button" id="4" name="b5" onClick={this.changeValue.bind(this)} defaultValue={this.state.b5}></input>
                    <input type="Button" id="5" name="b6" onClick={this.changeValue.bind(this)} defaultValue={this.state.b6}></input>
                    <input type="Button" id="6" name="b7" onClick={this.changeValue.bind(this)} defaultValue={this.state.b7}></input>
                    <input type="Button" id="7" name="b8" onClick={this.changeValue.bind(this)} defaultValue={this.state.b8}></input>
                    <input type="Button" id="8" name="b9" onClick={this.changeValue.bind(this)} defaultValue={this.state.b9}></input>
                </div>
                <div>
                    <input type="Button" defaultValue="Reiniciar" onClick={this.clearEmit.bind(this)}></input>
                </div>
            </div>

        )
    }
}
export default Game;