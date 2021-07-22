import React from "react"
import "../assets/css/Login.css"

class Game extends React.Component{
    constructor(){
        super();
        this.state={
            espacio:[]
        }
    }
    
    render(){
        return(
            <div className="text-center text-light">
                <h1 className="title mt-3">Tic Tac Toe</h1>
                <div className="container w-75 h-75 border border-dark">

                <For each="item" index="idx" of={ [1,2,3] }>
                    <div key= {idx} className= "row">
                        <For each="item2" index="idx2" of={ [1,2,3] }>
                            <button type="button" key={idx2} className="fs-1 fw-bold btn btn-success col border border-dark">
                                X
                            </button>

                        </For>
                    </div>
                </For>

                </div>
            </div>
        )
    }
}
export default Game;