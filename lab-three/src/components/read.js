import React from "react";
import bookData from "./books.json";
import Button from 'react-bootstrap/Button';
import axios from "axios";
import {Books} from "./books";

//there is no book class for this, instead it directly goes to BookItems
export class Read extends React.Component{
    
    // Runs when component output rendered to DOM
    componentDidMount(){
        // Get the source via URL using GET method
        axios.get("https://jsonblob.com/api/jsonblob/1027219693823606784")
        .then( // If success
            (response) => { 
            this.setState({ // Set state from response
                books: response.data // response.data - data without headers
            })
        }) 
        .catch( // If error
            (error) => {
                console.log(error); // Log error to console
            }
        ); 
    }

    state = {
        books: []
    }

    render(){
        // Returns Books (list of book items)
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}