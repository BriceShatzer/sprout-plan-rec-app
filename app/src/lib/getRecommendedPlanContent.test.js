import React from 'react';
import { getRecommendedPlanContent } from './getRecommendedPlanContent';
import { getPlanData } from './getPlanData';

let planDataObj = getPlanData();




it('when a valid plan names is provided as an augment,a correctly constructed object is returned', () => {
    Object.getOwnPropertyNames(planDataObj).forEach(function (planName){
        test('looking at '+planName+' -', () => {
            expect(getRecommendedPlanContent(planName)).toEqual(expectedObject(planName));
        });
    });

});

function expectedObject(planName){
    let expectedObject = planDataObj[planName];
    expectedObject.name = planName;
    return expectedObject;
}
