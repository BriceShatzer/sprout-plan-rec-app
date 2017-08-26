import React from 'react';

class PlanRecommendation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    returnToForm(event) {
        event.preventDefault();
        this.props.toggleFormVisibility();
    }
    
    render() {
        return (
            <section className="plan-recommendation">
                <a href="/" id="showForm" onClick={(event) => this.returnToForm(event)}>Show Form</a>
            </section>
        )
        
    }
}

export default PlanRecommendation;