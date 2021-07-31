import React from "react";
import { shallow } from "enzyme";
import DogWrapper from "./DogWrapper";
import DogWrapperView from "./DogWrapperView";
import { DogListEffect } from "../../stores/dogList/DogListEffect";

jest.mock("../../stores/dogList/DogListEffect.ts");

describe("DogWrapper", () => {
  it("should render the view with the right props", () => {
    const wrapper = shallow(<DogWrapper />);

    expect(wrapper.type()).toBe(DogWrapperView);
  });

  it("should call DogListEffect when useEffect has been called", () => {
    jest.spyOn(React, "useEffect").mockImplementationOnce((f) => f());

    shallow(<DogWrapper />);

    expect(DogListEffect).toHaveBeenCalled();
  });
});
