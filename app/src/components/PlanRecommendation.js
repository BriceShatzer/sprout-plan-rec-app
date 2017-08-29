import React from 'react';
import { getRecommendedPlanContent } from '../lib/getRecommendedPlanContent';
import { getRecommendedPlanLink } from '../lib/getRecommendedPlanLink';


class PlanRecommendation extends React.Component {
    render() {
        const content = getRecommendedPlanContent(this.props.planRecommendation);
        if (content.error){
            return (
                <section className="plan-recommendation error">
                    <h1 className="guide-headline">
                        We had an issue figuring out which plan would be best for you.
                    </h1>
                    <h4>
                        Sorry about that. Please visit our <a href="https://sproutsocial.com/pricing" target="_blank" rel="noopener noreferrer">pricing page</a> for more information on the available plans.
                    </h4>
                    <a href="/" className="back">‹ Back</a>
                </section>
            )
        } else {
            const planLink = getRecommendedPlanLink(this.props.planRecommendation);
            const details = content.details;
            const detailElements = Object.keys(details).map((detail,i) =>
                <tr key={i} className="detail">
                    <td>{detail}</td>
                    <td>{details[detail]}</td>
                </tr>
            );

            return (
                <section className="plan-recommendation">
                    <h1 className="guide-headline">The plan that's right for you is...</h1>
                    <h1 className="plan-name">{content.name}</h1>
                    <h2 className="value-proposition">{content.headline}</h2>
                    <table className="details">
                        {detailElements}
                    </table>
                    <h2 className="value-proposition">All Plans Include a Free 30-day Trial</h2>
                    <h4 className="final-pitch">
                        Best-in-class social media management and engagement software. <br/>
                        Change plans or cancel at any time.
                    </h4>
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
}

export default PlanRecommendation;