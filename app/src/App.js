import React, { Component } from 'react';
import Nav from './components/Nav';
import Form from './components/Form';
import PlanRecommendation from './components/PlanRecommendation';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formIsHidden: false,
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
                <Nav />
                <Form
                    formIsHidden = {this.state.formIsHidden}
                    updatePlanRecommendation = {this.updatePlanRecommendation}
                    toggleFormVisibility = {this.toggleFormVisibility}
                />
                <PlanRecommendation
                    toggleFormVisibility = {this.toggleFormVisibility}
                    planRecommendation = {this.state.planRecommendation}
                />
            </div>
        ); 
    }
}

export default App;
