// Imports from node should be at the top
import React, { Component } from 'react';
import axios from 'axios';

// Imports of custom components should be after the built in node imports
import Error from './Error';
import SideSingle from './SideSingle';


class SideNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        };
    }

    // componentDidMount runs after the component has been rendered
    componentDidMount() {
        // Using template strings to insert the prop values into the URL
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=9e335cfa16914994b47b2235d96b7fa0`;
        axios.get(url)
            .then((response) => {
                this.setState({
                    // axios automatically converts the data to JSON format
                   'sidenews': response.data.articles 
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: true,
                })
            })
    }

    renderItems() {
        if(!this.state.error){
            return this.state.sidenews.map((item) => (
                // As we are iterating over the items, we need to pass in a key
                // for every component that is created along with the item itself
                // The only thing needed for this key is for it to be unique
                <SideSingle key={item.url} item={item} />
            ));
        } else {
            return <Error />;
        }
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default SideNews;
