import { getPlanData } from './getPlanData';

const value = getPlanData();


it('returns an object', () => {
    expect(typeof value).toBe('object');
});


/**
 * todo:
 *   Write tests checking to make sure the structure of the object attributes agrees with what the getRecommendedPlan function is expecting
 *   For example stuff like:
 *      for (plan in planDataObj) {
 *          expect(plan.values.socialprofiles).toBeDefined()
 *      }
 *
 */