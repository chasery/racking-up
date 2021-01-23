import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Rack from "./Rack";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    rackId: "",
  }),
}));

describe("Rack component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<Rack />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
