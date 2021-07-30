import { shallow } from "enzyme";
import React from "react";
import { getBreed } from "../../services/dogBreed/DogBreedService";
import DogWrapper from "./DogWrapper";
import DogWrapperView from "./DogWrapperView";

jest.mock("../../services/dogBreed/DogBreedService.ts");

describe("DogWrapper", () => {
  it("should render the view with the right props", () => {
    const wrapper = shallow(<DogWrapper />);

    expect(wrapper.type()).toBe(DogWrapperView);
  });

  it("should get a list of dog breeds", () => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());

    shallow(<DogWrapper />);

    expect(getBreed).toBeCalled();
  });
});
