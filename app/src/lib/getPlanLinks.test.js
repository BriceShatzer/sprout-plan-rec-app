import { getPlanLinks } from './getPlanLinks';

const planLinksObj = getPlanLinks();


it('returns an object', () => {
    expect(typeof planLinksObj).toBe('object');
});


Object.getOwnPropertyNames(planLinksObj).forEach(function (planName){
    let planPath = planLinksObj[planName];
    let possibleHost1 = /^https:\/\/app.sproutsocial.com\//;
    let possibleHost2 = /^https:\/\/sproutsocial.com\//;

    expect(typeof planPath).toBe('string');
    
    expect(possibleHost1.test(planPath) || possibleHost2.test(planPath)).toBe(true);
});
