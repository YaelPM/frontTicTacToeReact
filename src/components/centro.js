import React from 'react'
import css from '../assets/css/app.css'
import UserContext from "../context/userContext";

class Centro extends React.Component {
    render() {
        return(
            <UserContext.Consumer>
                { user =>
                    <section id="section-center">
                        <h1>Hola {user.name}</h1>
                        <h2> {user.aPaterno}</h2>
                    </section>
                }
            </UserContext.Consumer>
        )
    }
}

export default Centro;