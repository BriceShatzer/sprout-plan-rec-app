import React from 'react';
import { getRecommendedPlan } from '../lib/getRecommendedPlan';
import logo from '../images/logo.png';

class Form extends React.Component {
    findPlan(event) {
        event.preventDefault();

        // get and display plan based on form inputs
        let formElement = document.getElementById('form');
        let recommendedPlan = getRecommendedPlan(formElement);
        this.props.updatePlanRecommendation(recommendedPlan);

        //hide the form
        this.props.toggleFormVisibility();
        window.history.pushState(null, null, '/#PlanRecommendation');
    }

    render() {
        return (
            <section className={this.props.formIsHidden ? "form is-hidden" : "form"}>
                <form id="form">
                    <div className="header">
                        <a href="https://sproutsocial.com/" target="_blank" rel="noopener noreferrer">
                            <img src={logo} className="logo" alt="logo" />
                        </a>
                        <h1 className="guide-headline">Find the Sprout Social plan that's right for you.</h1>
                    </div>

                    <div className="questions">
                        <p>
                            I manage 
                            <select name="socialprofiles" defaultValue="10">
                                <option value="5">1 to 5</option>
                                <option value="10">6 to 10</option>
                                <option value="30">10 to 30</option>
                                <option value="50">30 to 50</option>
                             </select>
                            different social profiles,
                        </p>
                        <p>
                            that together have around <input type="number" name="audience" defaultValue="20000" step="1000"/> fans and followers,
                        </p>

                        <p>
                            and there are <input type="number" name="users" defaultValue="3"/> people on my social media team.
                        </p>

                    </div>

                    <a href="/" target="_blank" rel="noopener noreferrer" className="find-my-plan" onClick={(event) => this.findPlan(event)}>
                        Find My Plan ›
                    </a>
                </form>
            </section>
        );
    }
}

export default Form;
