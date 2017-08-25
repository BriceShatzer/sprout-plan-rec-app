import React from 'react';
import { getRecommendedPlan } from '../lib/getRecommendedPlan'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.formSubmit = this.formSubmit.bind(this);

    }
    formSubmit(event) {
        event.preventDefault();

        //hide the form
        // document.querySelector('.form').classList.add('is-hidden');
        //this.props.setState({formIsHidden: true});
        this.props.toggleFormVisibility();
        //alert(this.props.text)



        // get and display plan based on form inputs
        let formElement = document.getElementById('form');

        //window.alert(getRecommendedPlan(formElement));







        /* todo: trigger the rendering of the recommended plan page */
    }

    render() {
        return (
            // <h3>{this.props.formIsHidden ? "form is-hidden" : "form"}</h3>
            // <h3>{this.props.text}</h3>
            // <section className={this.props.formIsHidden ? "form is-hidden" : "form"}>

            <section className="form">

                <h3>{this.props.formIsHidden ? "form is-hidden" : "form"}</h3>

                <form id="form">
                    <h1>Find the Sprout Social plan that's right for you.</h1>
                    <label>How many social profiles do you manage?</label>
                    <input type="text" name="socialprofiles" /><br />
                    <label>How many followers do your social profiles have?</label>
                    <input type="text" name="audience" /><br />
                    <label>How many people are on your social media team?</label>
                    <input type="text" name="users"/><br />
                    <input type="submit" onClick={(event) => this.formSubmit(event)}/>
                </form>
            </section>

        );
    }
}

export default Form;
