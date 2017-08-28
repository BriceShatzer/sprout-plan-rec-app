import React from 'react';

class TestButtons extends React.Component{
    constructor(props) {
        super(props);
    }

    updatePlanRecommendation(recommendation){
        this.props.updatePlanRecommendation(recommendation);
    }

    render() {
        return (
            <div className="test-triggers">
                <button onClick={() => this.updatePlanRecommendation('deluxe')}>Deluxe</button>
                <button onClick={() => this.updatePlanRecommendation('premium')}>Premium</button>
                <button onClick={() => this.updatePlanRecommendation('team')}>Team</button>
                <button onClick={() => this.updatePlanRecommendation('enterprise')}>Enterprise</button>
            </div>
        );
    }
}
export default TestButtons