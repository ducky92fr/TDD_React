/* eslint-disable react/forbid-foreign-prop-types */
import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProp } from "../test/testUtils";
import Congrats from "./Congrats";
import "./setupTests";

const defaultProps = { success: false };
/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @return {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("render non-empty congrats message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("doest not throw warning with expected props", () => {
  const expectedProps = { success: false };
  checkProp(Congrats, expectedProps);
});
