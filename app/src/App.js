import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsHidden: false
        };
    }

    toggleFormVisibility = () => {
        this.setState({formIsHidden: !this.state.formIsHidden});
    };

    displayRecommendedPlan() {}
    
    render() {
        
        return(
            <Form 
                formIsHidden = {this.state.formIsHidden}
                toggleFormVisibility = {this.toggleFormVisibility}
            />
                
        ); 
    }
}

export default App;
