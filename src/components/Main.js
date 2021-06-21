import React from "react";
import css from '../assets/css/app.css'
import Left from "../components/left";
import Center from '../components/centro'
import Right from "../components/right";
import UserContext from "../context/userContext";
import {io} from "socket.io-client";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.users = [
            {
                id:1,
                name:"Alí",
                aPaterno:"López"
            },
            {
                id:2,
                name:"Liam",
                aPaterno:"López"
            },
            {
                id:3,
                name:"Tania",
                aPaterno:"García"
            }
        ];
        this.state = this.users[Math.floor(Math.random() * this.users.length)];
        let socket = null
    }

    componentDidMount() {
        console.log('Component')
        this.socket = io('ws://localhost:3000')
        this.socket.on("connect", () => {
            console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx
        });

    }

    changeUser(e){
        this.setState(this.users[Math.floor(Math.random() * this.users.length)])
        this.socket.emit('chat:message',{nombre: 'alí'})
        this.socket.on('chat:message', (data) => {
            console.log('clienteeeeee', data)
        })
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <main onClick={this.changeUser.bind(this)}>
                    <Left></Left>
                    <Center></Center>
                    <Right></Right>
                </main>
            </UserContext.Provider>
        )
    }
}

export default Main;