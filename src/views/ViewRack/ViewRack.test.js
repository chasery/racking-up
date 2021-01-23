import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ViewRack from "./ViewRack";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    rackId: "1",
  }),
}));

describe("ViewRack component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<ViewRack />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
