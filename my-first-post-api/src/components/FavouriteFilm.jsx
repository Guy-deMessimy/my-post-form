import './FavouriteFilm.css'
import React, { Component } from 'react';

export default class FavouriteFilm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: "",
            poster:"",
            comment:""
        }
    }
        
    onChange = (e) => {
            this.setState ({
                [e.target.name]: e.target.value,
            })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        };
        const url ="https://post-a-form.herokuapp.com/api/movies/";
        fetch(url, config)
            .then((res) => res.json())
            .then((res) => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Movie poster #${res} has been successfully added!`);
                }
            })
            .catch((e) => {
                console.error(e);
                    alert("There was an error when adding the Movie poster.");
            });

    };

    render () {
        return (
            <div className="FormMovie">
                <h1>Favorite Movie</h1>

                <form onSubmit={this.onSubmit}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">         
                            <label htmlFor="title">Movie Title:</label>
                            <input
                            type="text"
                            id="title"
                            name="title"
                            value={this.state.title}
                            onChange={this.onChange}
                            /> 
                        </div>

                        <div className="form-data">
                            <label htmlFor="poster">Movie Poster:</label>    
                            <input
                            type="text"
                            id="poster"
                            name="poster"
                            value={this.state.poster}
                            onChange={this.onChange}
                            />
                        </div>

                        <div className="form-data">
                            <label HtmlFor="comment">Enter a comment</label>
                            <textarea
                            id="comment"
                            name="comment"
                            rows="5"
                            cols="33"
                            value={this.state.comment}
                            onChange={this.onChange}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>        


            </div>
            
        )
    }
}