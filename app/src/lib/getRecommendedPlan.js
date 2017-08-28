import { getPlanData } from '../data/getPlanData';
import _ from 'lodash';

export function getRecommendedPlan(formElement) {
    const planDataObj = getPlanData();
    const formValuesArray = serializeArray(formElement);
    const formValues = _.zipObject(_.map(formValuesArray, 'name'), _.map(formValuesArray, i => parseInt(i.value, 10) || 1));

    // Make 100% sure the plans are sorted in ascending order
    let planNames = _.sortBy(_.keys(planDataObj), (plan) => planDataObj[plan].values.socialprofiles);
    let recommendedPlan = planNames[0];

    ['audience', 'socialprofiles'].forEach((key) => {
        recommendedPlan = planNames.filter((plan) => (formValues[key] || 0) <= planDataObj[plan].values[key]).shift();
        planNames = planNames.slice(planNames.indexOf(recommendedPlan));
    });

    // Recommend plan based on multiple users
    if (formValues.users > 1 && planDataObj[recommendedPlan].values.users === 1) {
        const recommendedPlanValues = planDataObj[recommendedPlan].values;
        const recommendedPlanCost = recommendedPlanValues.costPerUser * formValues.users;
        const biggerPlan = planNames.filter((plan) => {
            const {
                users,
                costPerUser,
                costPerMonth
            } = planDataObj[plan].values;
            const extraUsers = Math.max(formValues.users - users, 0);
            const biggerPlanCost = costPerMonth + extraUsers * costPerUser;
            return biggerPlanCost <= recommendedPlanCost;
        });

        recommendedPlan = _.isEmpty(biggerPlan) ? recommendedPlan : biggerPlan.shift();
    }

    return recommendedPlan;

    /**
     * Function to replace jQuery's .serializeArray() functionality
     * src: https://plainjs.com/javascript/ajax/serialize-form-data-into-an-array-46/
     */
    function serializeArray(form) {
        let field;
        let l;
        let s = [];

        if (typeof form === 'object' && form.nodeName === "FORM") {
            const len = form.elements.length;
            for (let i=0; i<len; i++) {
                field = form.elements[i];
                if (field.name &&
                    !field.disabled &&
                    field.type !== 'file' &&
                    field.type !== 'reset' &&
                    field.type !== 'submit' &&
                    field.type !== 'button') {
                    if (field.type === 'select-multiple') {
                        l = form.elements[i].options.length;
                        for (let j=0; j<l; j++) {
                            if(field.options[j].selected)
                                s[s.length] = { name: field.name, value: field.options[j].value };
                        }
                    } else if ( (field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
                        s[s.length] = { name: field.name, value: field.value };
                    }
                }
            }
        }
        return s;
    }
}