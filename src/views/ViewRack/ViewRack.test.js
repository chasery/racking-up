import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import ViewRack from "./ViewRack";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    rackId: "9d76e150-95ee-4cf1-8b4f-fbd4934a4eed",
  }),
}));

describe("ViewRack component", () => {
  it("renders without error", () => {
    const wrapper = shallow(<ViewRack />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
