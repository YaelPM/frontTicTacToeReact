import React from 'react'
import css from '../assets/css/app.css'
import UserContext from "../context/userContext";

class Right extends React.Component {
    render() {
        return(
            <UserContext.Consumer>
                { user =>
                    <section id="section-right">
                        <span>Bienvenido {user.name}</span>

                    </section>
                }
            </UserContext.Consumer>

        )
    }
}

export default Right;