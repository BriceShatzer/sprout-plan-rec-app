import React, { Component } from 'react';
import Form from './components/Form';
import PlanRecommendation from './components/PlanRecommendation';

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

    displayRecommendedPlan = () => {};
    
    render() {
        
        return(
            <div>
                <Form
                    formIsHidden = {this.state.formIsHidden}
                    toggleFormVisibility = {this.toggleFormVisibility}
                />
                <PlanRecommendation
                    toggleFormVisibility = {this.toggleFormVisibility}
                />
            </div>


            
                
        ); 
    }
}

export default App;
