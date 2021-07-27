import React from "react";
import "../assets/css/Login2.css"
class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return(
            <head>
                <meta charSet="UTF-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
                        <title>Tic Tac Toe</title>
                        <link rel="stylesheet"
                              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
                              integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
                              crossOrigin="anonymous"/>
                            <link rel="stylesheet" href="css/Login2.css"/>
            </head>,
            <body>
            <div className="container">
                <div className="row text-center login-page">
                    <div className="col-md-12 login-form">
                        <form action="claseDestino.php" method="post">
                            <div className="row">
                                <div className="col-md-12 login-form-header">
                                    <p className="login-form-font-header">Tic Tac <span>Toe</span></p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 login-from-row">
                                    <input name="usuario" type="text" placeholder="Usuario" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 login-from-row">
                                    <input name="password" type="password" placeholder="Contraseña" required/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 login-from-row">
                                    <button className="btn btn-info">Entrar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </body>

        )
    }
}

export default Login;