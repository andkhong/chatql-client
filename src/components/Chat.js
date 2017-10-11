import React, { Component } from 'react';

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = { input: '' };
    }
    handleSubmit = e => {
        e.preventDefault();
        if(this.state.input !== '') {
            this.setState({ input: '' });            
        }
    }
    handleInput = e => {
        this.setState({ input: e.target.value });
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleInput}
                        value={this.state.input}
                    />
                    <button> Submit </button>
                </form>
            </div>
        )
    }
}