import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SignIn from "./SignIn";

describe("SignIn component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<SignIn />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
