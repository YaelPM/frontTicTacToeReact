import React from "react"
import { io } from 'socket.io-client'
import Box from "./box"
import "../assets/css/game.css"
let socket;

class Game extends React.Component{
    
    constructor(){
        super();
        const array = [
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
        this.marca=""
        this.marcaOpponnent=""
        this.turno=false
        
    }
    componentDidMount(){
        socket = io.connect('ws://localhost:3000')  //'ws://localhost:3000'
        socket.on('connection',  (data) =>{
            console.log(data)
            this.marca="X"
            this.marcaOpponnent="O"
        } )

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
            this.setState({
                [posicion] : data.mrc
            })

            if(this.turno==false){
                this.turno=true
            }else{
                this.turno=false
            }
            
        });

    }
    changeValue(e) {
        let pos = e.target.name

        if (this.turno==true) {
            socket.emit('msj-input-server', { posicion: pos, mrc: this.marca })
            
            this.setState({
                [pos] : this.marca
            })

        }else{
            console.log("esperar turno")
        }
        
        
    }

    clearBtns(){
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
                <div id="tablero">
                    <input type="Button" name="b1" onClick={this.changeValue.bind(this)} defaultValue={this.state.b1}></input>
                    <input type="Button" name="b2" onClick={this.changeValue.bind(this)} defaultValue={this.state.b2}></input>
                    <input type="Button" name="b3" onClick={this.changeValue.bind(this)} defaultValue={this.state.b3}></input>
                    <input type="Button" name="b4" onClick={this.changeValue.bind(this)} defaultValue={this.state.b4}></input>
                    <input type="Button" name="b5" onClick={this.changeValue.bind(this)} defaultValue={this.state.b5}></input>
                    <input type="Button" name="b6" onClick={this.changeValue.bind(this)} defaultValue={this.state.b6}></input>
                    <input type="Button" name="b7" onClick={this.changeValue.bind(this)} defaultValue={this.state.b7}></input>
                    <input type="Button" name="b8" onClick={this.changeValue.bind(this)} defaultValue={this.state.b8}></input>
                    <input type="Button" name="b9" onClick={this.changeValue.bind(this)} defaultValue={this.state.b9}></input>
                </div>
                <div>
                    <input type="Button" defaultValue="Reiniciar" onClick={this.clearEmit.bind(this)}></input>
                </div>
            </div>

        )
    }
}
export default Game;