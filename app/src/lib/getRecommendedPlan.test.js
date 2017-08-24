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



