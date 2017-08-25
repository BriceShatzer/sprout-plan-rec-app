import React from 'react';
import { getRecommendedPlan } from '../lib/getRecommendedPlan'

class Form extends React.Component {

    formSubmit(event) {
        let formElement = document.getElementById('form');
        event.preventDefault();
        window.alert(getRecommendedPlan(formElement));

        /* todo: trigger the rendering of the recommended plan page */
    }

    render() {
        return (
            <section>
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
