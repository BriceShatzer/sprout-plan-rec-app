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
            planRecommendation: 'team' // <- value for mockup only
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

    displayRecommendedPlan = () => {};

    /**
     * todo: catch and handle popstate
     *
     */


    render() {
        
        return(
            <div>
                <Form
                    formIsHidden = {this.state.formIsHidden}
                    toggleFormVisibility = {this.toggleFormVisibility}
                />
                <PlanRecommendation
                    toggleFormVisibility = {this.toggleFormVisibility}
                    planRecommendation = {this.state.planRecommendation}
                />
                <TestButtons
                    updatePlanRecommendation = {this.updatePlanRecommendation}
                />

            </div>

        ); 
    }
}

export default App;
