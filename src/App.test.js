import { shallow } from "enzyme";
import React from "react";
import App from './App';

it('expect to render App component', () => {
    expect(shallow(<App></App>).length).toEqual(1)
});
it('take snap of App component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
