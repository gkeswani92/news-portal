import React, { Component } from 'react';
import './App.css';
import News from './News/News';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: 'everything',
        query: 'domains=techcrunch.com&language=en'
      },
      news2: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      }
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to your news feed!</h1>
        </header>
        <News news={this.state.news1} />
        <News news={this.state.news2} /> 
      </div>
    );
  }
}

export default App;
