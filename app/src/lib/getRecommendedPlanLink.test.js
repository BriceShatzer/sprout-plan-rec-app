import React from 'react';
import { getRecommendedPlanLink } from './getRecommendedPlanLink';
import { getPlanLinksData } from '../data/getPlanLinksData';

let planDataLinksObj = getPlanLinksData();

it('when a valid plan names is provided as an augment,a correctly constructed object is returned', () => {
    Object.getOwnPropertyNames(planDataLinksObj).forEach(function (planName){
        test('looking at '+planName+' -', () => {
            expect(getRecommendedPlanLink(planName)).toEqual(planDataLinksObj[planName]);
        });
    });
});

it('returns the default link when a invalid plan name is provided as an argument', () => {
    const randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    expect(getRecommendedPlanLink(randomString)).toEqual('https://sproutsocial.com/pricing');
});
