import React from 'react';
import { getRecommendedPlan } from './getRecommendedPlan';

const mockFormElement = document.createElement('form');
mockFormElement.innerHTML = `
    <input type="text" name="socialprofiles" />
    <input type="text" name="audience" />
    <input type="text" name="users" />
    <input type="submit" />`;


it('returns a string', () => {
    mockFormElement.socialprofiles = 5;
    mockFormElement.audience = 500;
    mockFormElement.users = 1;

    expect(typeof getRecommendedPlan(mockFormElement)).toBe('string');
});

describe('recommends correct plan based on multiple users', () => {
    let userCount;
    for (userCount = 0; userCount < 20; userCount++) {
        mockFormElement.users = userCount;
        let expectedValue;
/*
        if (userCount <=10) {
            expectedValue = 'Deluxe';
        } else if (userCount >= 3 && userCount < 10 ){
            expectedValue = 'Team';
        } else if (userCount >= 10 ){
            expectedValue = 'Enterprise';
        }
*/
        expectedValue = 'Deluxe';
        expect(getRecommendedPlan(mockFormElement)).toBe(expectedValue);
    }

});

/**
 * todo:
 *   - Dissect the provided getPlanData function and write a suite of tests that check that
 *   provided form values return the proper plan title. A structure similar to the one commented out should work.
 */

