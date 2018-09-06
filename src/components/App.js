import React, { Component } from 'react';
import './App.css';
import News from './News/News';
import SideNews from './News/SideNews';

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
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com&language=en'
      }
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="/" className="bran-logo center">Welcome to your News Feed!</a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news2} /> 
            <News news={this.state.news1} />
          </div>
          <div className="col s4">
            <SideNews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
