import React from 'react';
import ReactDOM from 'react-dom';
import PlanRecommendation from './PlanRecommendation';

it('renders without crashing', () => {
    let props = {
        formIsHidden: false,
        planRecommendation: '',
        toggleFromVisibility: () => {
            this.props.formIsHidde=!this.props.formIsHidden
        }
    };
    const component = <PlanRecommendation
        toggleFormVisibility = {props.toggleFormVisibility}
        planRecommendation = {props.planRecommendation}
    />;

    const div = document.createElement('div');
    ReactDOM.render(component, div);
});

