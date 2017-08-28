import React from 'react';
import { getRecommendedPlanContent } from '../lib/getRecommendedPlanContent';


class PlanRecommendation extends React.Component {
    constructor(props) {
        super(props);
    }

    returnToForm(event) {
        event.preventDefault();
        this.props.toggleFormVisibility();
    }
    
    render() {
        let content = getRecommendedPlanContent(this.props.planRecommendation);
        let details = content.details;

        let detailElements = Object.keys(details).map((detail,i) =>
            <div key={i} className="detail">
                <div>{detail}</div>
                <div>{details[detail]}</div>
            </div>
        );


        return (
            <section className="plan-recommendation">
                <h3>The plan that's right for you is...</h3>
                <h1>{content.name}</h1>
                <div className="value-propositions">
                    {content.headline}
                </div>
                <div className="details">
                    {detailElements}
                </div>
                
                <a href="/" id="showForm" onClick={(event) => this.returnToForm(event)}>Show Form</a>
            </section>
        )
        
    }
}

export default PlanRecommendation;