import React from "react";

export default class PersonList extends React.Component {

    render(){
        return(
            <ul>{this.props.data.map(pokemon => <li>{pokemon.name}</li>)}</ul>
        )
    }
}