import React  from "react";

export class Create extends React.Component{
    
    constructor(){
        super();

        // Bind handleSubmit and onChange of each fields
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        this.onChangeBookURL = this.onChangeBookURL.bind(this);

        // Update State
        this.state = {
            title: '',
            author: '',
            url: ''
        }
    }

    // Handles when the form is submitted.
    handleSubmit(e){
        // Prevents default value from entering (blank)
        e.preventDefault();
        console.log(`${this.state.title} ${this.state.author} ${this.state.url}`) // Debug
        
        // Update State
        this.state = {
            title: '',
            author: '',
            url: ''
        }
    }

    /* Functions handling change in values */
    onChangeBookTitle(e){
        this.setState({title: e.target.value})
    }
    onChangeBookAuthor(e){
        this.setState({author: e.target.value})
    }
    onChangeBookURL(e){
        this.setState({url: e.target.value})
    }
    
    // Renders Form and Input
    render(){
        return(
            <div>
                <h3>Hello from Create component</h3>
                <form onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <label>
                            Add Book Title:
                            <input type="text" 
                                className="form-control" 
                                value={this.state.title}
                                onChange={this.onChangeBookTitle}/>
                        </label>
                        <label>
                            Add Book Author:
                            <input type="text" 
                                className="form-control" 
                                value={this.state.author}
                                onChange={this.onChangeBookAuthor}/>
                        </label>
                        <label>
                            Add Front Page Url:
                            <input type="text" 
                                className="form-control" 
                                value={this.state.url}
                                onChange={this.onChangeBookURL}/>
                        </label>
                        <input type="submit" value="Add Book"/>
                    </div>
                </form>
            </div>
        );
    }
}