import React from "react";
import bookData from "./books.json";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";

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
        .catch(); // If error
    }

    state = {
        books: []
    }

    render(){
        // Returns BookItems rendered with data from each book
        return(
            <div>
                <h3>Hello from Read component</h3>
                <h1>Read Component</h1>
                {this.state.books.map((book)=>(
                <BookItems
                    title={book.title}
                    isbn={book.isbn}
                    pageCount={book.pageCount}
                    thumbnailUrl={book.thumbnailUrl}
                    statusB={book.status}
                    authors={book.authors[0]}
                    categories={book.categories}
                />
                ))}
            </div>
        );
    }
}

// Card for each book item (called from above)
const BookItems = ({title, isbn, pageCount, thumbnailUrl,statusB, authors, categories}) => (
    <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Img src={thumbnailUrl} style={{width:'200px'}}/>
            <Card.Text>{authors}</Card.Text>
        </Card.Body>
        
    </Card>
)