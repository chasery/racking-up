import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import EditRackItem from "./EditRackItem";

describe("EditRackItem component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<EditRackItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
