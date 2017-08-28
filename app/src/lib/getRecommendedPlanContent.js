import { getPlanData } from './getPlanData';

export function getRecommendedPlanContent(recommendedPlanName) {
    const planDataObj = getPlanData();
    const normalizedRecommendedPlanName = recommendedPlanName.trim().toLowerCase();
    let recommendedPlanContent;


    // Look to see if the recommended plan name matches a plan name in the plan data
    Object.getOwnPropertyNames(planDataObj).forEach(function (planName){
        const normalizedPlanName = planName.trim().toLowerCase();

        //if one matches, construct a content object with that plan's information
        if (normalizedRecommendedPlanName === normalizedPlanName) {
            recommendedPlanContent = planDataObj[planName];

            if( !recommendedPlanContent.hasOwnProperty('name') ){
                recommendedPlanContent.name = planName;
            }
        }
    });

    // Return an error message
    if (recommendedPlanContent === undefined) {
        recommendedPlanContent = {
            'error': true,
            'Message': 'No recommended plan found matching "' + recommendedPlanName + '"'
        }
    }

    return recommendedPlanContent

}