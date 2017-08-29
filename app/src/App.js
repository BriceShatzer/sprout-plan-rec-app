import React, { Component } from 'react';
import Form from './components/Form';
import PlanRecommendation from './components/PlanRecommendation';
import TestButtons from './components/testButtons';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsHidden: false,
            //formIsHidden: true, // <- value for mockup only
            planRecommendation: ''
        };

        window.onpopstate = () => {
            this.toggleFormVisibility();
        };
    }

    toggleFormVisibility = () => {
        this.setState({formIsHidden: !this.state.formIsHidden});
    };

    updatePlanRecommendation = (recommendation) => {
        this.setState({
           planRecommendation: recommendation
        });
    };

    render() {
        return(
            <div>
                <Form
                    formIsHidden = {this.state.formIsHidden}
                    updatePlanRecommendation = {this.updatePlanRecommendation}
                    toggleFormVisibility = {this.toggleFormVisibility}
                />
                <PlanRecommendation
                    toggleFormVisibility = {this.toggleFormVisibility}
                    planRecommendation = {this.state.planRecommendation}
                />
                <TestButtons
                    toggleFormVisibility = {this.toggleFormVisibility}
                    updatePlanRecommendation = {this.updatePlanRecommendation}
                />

            </div>

        ); 
    }
}

export default App;
