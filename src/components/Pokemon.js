import React, {Component} from 'react'

class Pokemon extends Component{
    constructor(){
        super()
        this.state = {
            isEditing: false, 
            userInput: ''
        }
    }

    toggleEdit(){}
    handleChange(e){}
    handleSaveName(){}

    render(){
        return(
            <div>Pokemon.js</div>
        )

    }
}

export default Pokemon