import React from 'react'
import css from '../assets/css/app.css'
import Game from "../components/Game";
import Login from "../components/Login";
import { io } from 'socket.io-client'
class App extends React.Component {
    componentDidMount(){
        const socket = io.connect('ws://localhost:3000')  //'ws://localhost:3000'
        socket.on('Conexion', (data) =>{
            console.log(data)
        } )

    }
    render(){
        return(
           <Game></Game>

        )
    }
}

export default App;