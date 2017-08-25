import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  renderComponent();
});

describe('ensure that required initial state is being set correctly', () => {
  const render = renderComponent();

  test('formIsHidden is correct', () => {
    expect(typeof render.state.formIsHidden).toBe('boolean');
    expect(render.state.formIsHidden).toBe(false);
  });

});

describe('test toggleFormVisibility method', () => {
  const render = renderComponent();

  test('successfully toggles booleans', () => {
    testMethodEffect(false,true);
    testMethodEffect(true,false);
  });

  test('formIsHidden = false on all other types', () => {
    let obj = {food: ["pizza","tacos","salad"]};
    let arr = ["inky","blinky","pinky","clyde"];
    let str = "false";
    let num = 42;

    testMethodEffect(obj,false);
    testMethodEffect(arr,false);
    testMethodEffect(str,false);
    testMethodEffect(num,false);
  });

  function testMethodEffect(intialValue, expectedValue){
    render.setState({formIsHidden: intialValue});
    expect(render.state.formIsHidden).toEqual(intialValue);

    render.toggleFormVisibility();
    expect(render.state.formIsHidden).toBe(expectedValue);
  }
});


function renderComponent(){
  return ReactDOM.render(<App />, document.createElement('div'));
}
