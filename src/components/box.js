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
    render(){
        return(
            <div>
                <Choose>
                    <When condition={this.state.marcado}>
                        <button type="button"className="w-100 h-100 fs-1 fw-bold btn btn-success border border-dark">
                            X
                        </button>
                    </When>
                    <When condition={!this.state.marcado}>
                        <button type="button" className="w-100 h-100 fs-1 fw-bold btn btn-success border border-dark">

                        </button>
                    </When>
                </Choose>
            </div>
            
        )
    }
}
export default box;