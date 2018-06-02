import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            img: '',
            title: '',
            type: ''
        };
    }

    onChange = (event) => {
        this.setState({ term: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const api_key = 'dc6zaTOxFJmzC';
        const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({ term:'', img: data.data[0].images.fixed_height.url, title: data.data[0].title, type: data.data[0].type }))
            .then(console.log(this.title))
            .then(console.log(this.data))
            .catch(e => console.log('error', e));
    }

    render() {
        return (
            <div className="App">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Search: </label>
                        <input className="highlight" value={this.state.term} onChange={this.onChange} />
                    </div>

                    <button>Submit!</button>
                </form>
                <img src={this.state.img} height="200" alt={this.state.term} />
                <h1> {this.state.title}</h1>
                <p> {this.state.type}</p>
            </div>
        );
    }
}

export default App;