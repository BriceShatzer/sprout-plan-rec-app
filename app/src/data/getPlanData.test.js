import { getPlanData } from './getPlanData';

const planDataObj = getPlanData();


it('returns an object', () => {
    expect(typeof planDataObj).toBe('object');
});

describe('returned object contains expected/required values', () => {

    Object.getOwnPropertyNames(planDataObj).forEach(function (planName){
        let planData = planDataObj[planName];

        expect(typeof planData.headline).toEqual('string');
        expect(typeof planData.details).toEqual('object');
        expect(typeof planData.values).toEqual('object');
        expect(typeof planData.values.socialprofiles).toEqual('number');
        expect(typeof planData.values.users).toEqual('number');
        expect(typeof planData.values.audience).toEqual('number');
        expect(typeof planData.values.costPerMonth).toEqual('number');
        expect(typeof planData.values.costPerUser).toEqual('number');
    });
    

});
