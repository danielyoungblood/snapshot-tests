import { render, screen } from '@testing-library/react';
import App from './App';
import renderer from "react-test-renderer";
import React from "react";

test("renders a snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

