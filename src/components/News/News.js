import React, { Component } from 'react';
import Error from './Error';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            error: false,
        };
    }

    // componentDidMount runs after the component has been rendered
    componentDidMount() {
        // Using template strings to insert the prop values into the URL
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=9e335cfa16914994b47b2235d96b7fa0`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({
                    'news': data.articles
                });
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: true,
                })
            });
    }

    renderItems() {
        if(!this.state.error){
            return this.state.news.map((item) => (
                // As we are iterating over the items, we need to pass in a key
                // for every component that is created along with the item itself
                // The only thing needed for this key is for it to be unique
                <NewSingle key={item.url} item={item} />
            ));
        } else {
            return <Error />;
        }
    }

    render() {
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News;
