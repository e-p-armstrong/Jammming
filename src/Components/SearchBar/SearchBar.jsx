import { render } from '@testing-library/react';
import './SearchBar.css';
import React from 'react';
// import React, {useState} from 'react';

export class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            term: null
        };
        this.callSearchProp = this.callSearchProp.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }
    callSearchProp(){ //having two methods named 'search' in two different classes really goddamn irked me.
        this.props.onSearch(this.state.term)
    }
    handleTermChange(event){
        console.log(event.target.value)
        this.setState({term: event.target.value})
    }
    render(){
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton" onClick={this.callSearchProp}>SEARCH</button>
            </div>
        );
    }
}
//Function version
// Really not sure if this would work. Especially not sure about the scope and potential issues related to it when I set the term to = event.target.value :

// function Searchbar(props){
//     [term,handleTermChange] = useState(null);
//     return (
//         <div className="SearchBar">
//             <input placeholder="Enter A Song, Album, or Artist" onChange={()=> handleTermChange(term = event.target.value)}/>
//             <button className="SearchButton">SEARCH</button>
//         </div>
//     );
// }