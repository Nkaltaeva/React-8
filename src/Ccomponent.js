import React, { Component } from 'react';
import "./App.css";

export default class Ccomponent extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

        componentDidMount() {
            fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.categories
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        }

render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p> ERROR {error.message}</p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.idCategory}
                            <img width="50"  src={item.strCategoryThumb}/>
                        </li>
                    ))}
                </ul>
            )
        }
    }
}