import { getPlanLinksData } from './getPlanLinksData';

const planLinksObj = getPlanLinksData();

it('returns an object', () => {
    expect(typeof planLinksObj).toBe('object');
});


it('returned object contains valid values', () => {
    Object.getOwnPropertyNames(planLinksObj).forEach(function (planName) {
        let planPath = planLinksObj[planName];
        let possibleHost1 = /^https:\/\/app.sproutsocial.com\//;
        let possibleHost2 = /^https:\/\/sproutsocial.com\//;

        expect(typeof planPath).toBe('string');

        expect(possibleHost1.test(planPath) || possibleHost2.test(planPath)).toBe(true);
    });
});
