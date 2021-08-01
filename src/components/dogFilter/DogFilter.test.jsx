import { shallow } from "enzyme";
import DogFilter from "./DogFilter";
import DogFilterView from "./DogFilterView";
import { useStoreMap } from "effector-react";
import { DogFilterEvent } from "../../stores/dogFilter/DogFilterEvent";
import { DogListStore } from "../../stores/dogList/DogListStore";

jest.mock("effector-react");
jest.mock("../../stores/dogFilter/DogFilterEvent.ts");

describe("DogFilter", () => {
  it("should render the view with the right props", () => {
    useStoreMap.mockReturnValueOnce(stateBreeds());

    const wrapper = shallow(<DogFilter />);

    expect(wrapper.type()).toBe(DogFilterView);
  });

  it("should call onChangeOption event when change an option", () => {
    useStoreMap.mockReturnValueOnce(stateBreeds());

    const event = {
      target: {
        value: {},
      },
    };

    const wrapper = shallow(<DogFilter />);

    wrapper.invoke("onChangeOption")(event);
    expect(DogFilterEvent).toHaveBeenCalledTimes(1);
  });

  it("should return the length of dogBreed on filter when getDogBreedLength have been called", () => {
    useStoreMap.mockReturnValueOnce(stateBreeds());

    const wrapper = shallow(<DogFilter />);

    wrapper.invoke("getDogBreedLength")("a");
    expect(DogFilterEvent).toHaveBeenCalledTimes(0);
  });

  it("shold call storeMap and return the right props from store", () => {
    useStoreMap.mockReturnValueOnce(stateBreeds());

    shallow(<DogFilter />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(DogListStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(stateBreeds())).toMatchObject(
      stateBreeds()
    );
  });
});

function stateBreeds() {
  return {
    dogList: [
      {
        name: "affenpinscher",
        image: "image url",
        scolded: 0,
      },
      {
        name: "basenji",
        image: "image url",
        scolded: 0,
      },
    ],
  };
}
