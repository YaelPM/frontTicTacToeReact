import React from "react";
import css from '../assets/css/app.css'
import Left from "../components/left";
import Center from '../components/centro'
import Right from "../components/right";
import UserContext from "../context/userContext";

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
    }

    changeUser(e){
        this.setState(this.users[Math.floor(Math.random() * this.users.length)])
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