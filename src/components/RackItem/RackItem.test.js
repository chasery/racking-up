import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import RackItem from "./RackItem";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    rackId: "1",
  }),
}));

describe("RackItem component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<RackItem />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
