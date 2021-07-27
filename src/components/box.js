import React from "react"
import "../assets/css/box.css"

class box extends React.Component{

    constructor(){
        super()
        this.state={
            marcado:false
        }
    }
    change(){
        this.setState({
            marcado: !this.state.marcado
        })
    }

}
export default box;