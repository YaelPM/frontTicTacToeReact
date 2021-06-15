import React from 'react'
import css from '../assets/css/app.css'
import Header from "../components/header";
import Main from "../components/Main";

class App extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header></Header>
                <Main></Main>
            </React.Fragment>
        )
    }
}

export default App;