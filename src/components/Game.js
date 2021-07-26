import React from "react"
import Box from "./box"
import "../assets/css/game.css"

class Game extends React.Component{
    
    constructor(){
        super();
        const array = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
          ];
        console.log(array)

        this.state={

            
        }
    }
    
    render(){
        return(
            <div className="text-center text-light">
                <h1 className="title mt-3">Tic Tac Toe</h1>
                <div className="container  border border-dark">

                <For each="item" index="idx" of={ [1,2,3] }>
                    <div key= {idx} className= "row">
                        <For each="item2" index="idx2" of={ [1,2,3] }>
                            <div key= {idx2} className= "col">
                                <Box></Box>
                            </div>
                            
                        </For>
                    </div>
                </For>

                </div>
            </div>
        )
    }
}
export default Game;