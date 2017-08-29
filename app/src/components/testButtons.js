import React from 'react';
import { getPlanData } from '../data/getPlanData';

class TestButtons extends React.Component{

    updatePlanRecommendation(recommendation){
        this.props.updatePlanRecommendation(recommendation);
    }
    
    returnToForm(event) {
        event.preventDefault();
        this.props.toggleFormVisibility();
    }

    render() {
        const planDataObj = getPlanData();
        const planButtons = Object.keys(planDataObj).map((plan,i) =>
            <button key={i} onClick={() => this.updatePlanRecommendation(plan)}>{plan}</button>
        );
        return (
            <div className="test-triggers">
                <button onClick={(event) => this.returnToForm(event)}>Toggle Form</button>
                {planButtons} 
            </div>
        );
    }
}
export default TestButtons