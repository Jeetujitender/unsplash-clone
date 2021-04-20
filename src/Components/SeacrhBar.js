import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state = {
        term: '',
    
    }

    inputClick() {
        console.log('user click the text')
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.term);

    }

    render() {
        return (
            <div className="content">
                <form onSubmit={this.onFormSubmit}>
                    <input type='text'
                        name="keysearch"
                        className="search"
                        placeholder="Search for photos"
                        value={this.state.term}
                        onClick={this.inputClick}
                        onChange={(event) =>
                            this.setState({ term: event.target.value })}>
                    </input>
                    <button class="searchButton" onClick={this.onFormSubmit}>Search</button>
                    <p><span className="searchKeyword">{this.state.term}</span><br></br>
                       <span className="total">{ this.props.total} images has been found</span> </p>
                    


                </form>
            </div>
        )
    }
}

export default SearchBar;