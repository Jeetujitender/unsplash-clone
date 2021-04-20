import React from 'react';
import SearchBar from './SeacrhBar';
import ImageList from './ImageList';
import './app.css'

// import axios from 'axios';

import callApi from '../Api/callApi';
class App extends React.Component {
    state = { image: [], totalimages: 0 ,search:"",items:4}
    onsubmit = async (val) => {
        this.setState({items:4})
        this.setState({ search: val });
        const response = await
            callApi.get('/search/photos',
                {
                    params: {
                        query: val,
                        
                    per_page:this.state.items},
                    

                });
        // console.log(response.data.results[0].links.self);
        this.setState({ totalimages: response.data.total })
        this.setState({ image: response.data.results });
        // console.log(this.state.image[0]);
        console.log(response.data.results);
    }
    loadmore = async () => {
        this.setState({ items: this.state.items + 4 });
        const response = await
            callApi.get('/search/photos',
                {
                    params: {
                        query: this.state.search,
                        page:1,
                        per_page: this.state.items,
                        // orientation:"squarish",
                    }
                    
                    });
                
        this.setState({ totalimages: response.data.total });
        this.setState({ image: response.data.results });
    }
    
    render() {
        return <div className="main" ><SearchBar total={this.state.totalimages} submit={this.onsubmit} />
           {/* <label> images has been</label>   */}
            <ImageList images={this.state.image}  />
        <button className="loadmoreButton" onClick={this.loadmore}>Load more</button>
        </div>
    }

}
export default App;