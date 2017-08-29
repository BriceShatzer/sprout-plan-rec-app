import React from 'react';
import { getRecommendedPlanContent } from '../lib/getRecommendedPlanContent';
import { getRecommendedPlanLink } from '../lib/getRecommendedPlanLink';


class PlanRecommendation extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    // returnToForm(event) {
    //     event.preventDefault();
    //     this.props.toggleFormVisibility();
    // }
    
    render() {
        const content = getRecommendedPlanContent(this.props.planRecommendation);
        const planLink = getRecommendedPlanLink(this.props.planRecommendation);
        const details = content.details;
        const detailElements = Object.keys(details).map((detail,i) =>
            <div key={i} className="detail">
                <div>{detail}</div>
                <div>{details[detail]}</div>
            </div>
        );
        
        return (
            <section className="plan-recommendation">
                <h1 className="guide-headline">The plan that's right for you is...</h1>
                <h1 className="plan-name">{content.name}</h1>
                <h2 className="value-proposition">{content.headline}</h2>
                <div className="details">
                    {detailElements}
                </div>
                <h2>All Plans Include a Free 30-day Trial</h2>
                <h4>Best-in-class social media management and engagement software. Change Plans or cancel at anytime.</h4>
                <div className="buttons">
                    <a href={planLink} target="_blank" rel="noopener noreferrer">
                        Start My Free Trial
                    </a>
                    <a href="https://sproutsocial.com/pricing" target="_blank" rel="noopener noreferrer">
                        Compare Plans
                    </a>
                </div>
            </section>
        )
        
    }
}

export default PlanRecommendation;