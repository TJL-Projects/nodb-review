import React, {Component} from 'react'
import Grass from './Grass'

class Finder extends Component{
    constructor(props){
        super(props)

        this.state = {
    
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div>
                Finder.js
                <Grass catchPokemon={this.props.catchPokemon} />
            </div>
        )
    }
}

export default Finder