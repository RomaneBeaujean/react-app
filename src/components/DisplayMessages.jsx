import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// ACTIONS

const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message
    };
};

// REDUCER

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [...state, action.message];
        default:
            return state;
    };
};

// STORE

const store = createStore(messageReducer);

// REACT

class Presentational extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    };

    submitMessage() {
        this.props.submitNewMessage(this.state.input)
        this.setState({
            input: ''
        })
    }


    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.props.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};

// ACCES ET DISPATCH AU STORE

const mapStateToProps = (state) => {
    return {
        messages: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: function (message) {
            dispatch(addMessage(message))
        }
    };
};

// CONNECTER AU COMPOSANT 

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        )
    }
};

export default AppWrapper;


