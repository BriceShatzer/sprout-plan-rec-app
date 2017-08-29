import React from 'react';
import { getRecommendedPlan } from '../lib/getRecommendedPlan';
import logo from '../logo.png';

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


        //window.alert();

        /* todo: trigger the rendering of the recommended plan page */
    }

    render() {
        return (

            //<h3>{this.props.text}</h3>
            //<h3>{this.props.formIsHidden ? "form is-hidden" : "form"}</h3>
            //<input type="submit" onClick={(event) => this.formSubmit(event)}/>
            <section className={this.props.formIsHidden ? "form is-hidden" : "form"}>
                <form id="form">
                    <div className="header">
                        <a href="https://sproutsocial.com/" target="_blank" rel="noopener noreferrer">
                            <img src={logo} className="logo" alt="logo" />
                        </a>
                        <h1 className="guide-headline">Find the Sprout Social plan that's right for you.</h1>
                    </div>
                    <label>How many social profiles do you manage?</label>
                    <input type="text" name="socialprofiles" /><br />
                    <label>How many followers do your social profiles have?</label>
                    <input type="text" name="audience" /><br />
                    <label>How many people are on your social media team?</label>
                    <input type="text" name="users"/><br />
                    <a href="/" target="_blank" rel="noopener noreferrer" className="find-my-plan" onClick={(event) => this.findPlan(event)}>
                        Find My Plan ›
                    </a>
                </form>
            </section>

        );
    }
}

export default Form;
