export function getPlanLinksData() {
    /**
     * In the future, this function could be used to retrieve the plan links via a service
     */
    const planLinksObj = {
        'Deluxe': 'https://app.sproutsocial.com/signup/start/standard_v6',
        'Premium': 'https://app.sproutsocial.com/signup/start/premium_v6',
        'Team': 'https://app.sproutsocial.com/signup/start/corporate_v6',
        'Enterprise': 'https://sproutsocial.com/demo?plan=enterprise'
    };
    return planLinksObj;

}