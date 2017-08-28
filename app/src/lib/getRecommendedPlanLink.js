import { getPlanLinksData } from '../data/getPlanLinksData';

export function getRecommendedPlanLink(recommendedPlanName) {
    const planLinksObj = getPlanLinksData();
    const normalizedRecommendedPlanName = recommendedPlanName.trim().toLowerCase();
    let recommendedPlanLink;


    // Look to see if the recommended plan name matches a plan name in the plan data
    Object.getOwnPropertyNames(planLinksObj).forEach(function (planName){
        const normalizedPlanName = planName.trim().toLowerCase();

        //if one matches, return its sting
        if (normalizedRecommendedPlanName === normalizedPlanName) {
            recommendedPlanLink = planLinksObj[planName];
        }
    });

    // If no matching plan found, return a default link
    if (recommendedPlanLink === undefined) {
        recommendedPlanLink = 'https://sproutsocial.com/pricing'
    }

    return recommendedPlanLink

}