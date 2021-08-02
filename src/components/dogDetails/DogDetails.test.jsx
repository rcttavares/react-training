import { shallow } from "enzyme";
import DogDetails from "./DogDetails";
import DogDetailsView from "./DogDetailsView";
import { useStoreMap } from "effector-react";
import { DogListEvent } from "../../stores/dogList/DogListEvent";
import { DogListStore } from "../../stores/dogList/DogListStore";
import { DogItemStore } from "../../stores/dogItem/DogItemStore";

jest.mock("effector-react");
jest.mock("../../stores/dogList/DogListEvent.ts");

const mockEnqueue = jest.fn();
jest.mock("notistack", () => ({
  ...jest.requireActual("notistack"),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue,
    };
  },
}));

describe("DogDetails", () => {
  it("should render the view with the right props", () => {
    useStoreMap
      .mockReturnValueOnce(stateBreeds())
      .mockReturnValueOnce(stateBreedSelected());

    const wrapper = shallow(<DogDetails />);

    expect(wrapper.type()).toBe(DogDetailsView);
  });

  it("should handle the onScold function is called", () => {
    useStoreMap
      .mockReturnValueOnce(stateBreeds())
      .mockReturnValueOnce(stateBreedSelected());

    const wrapper = shallow(<DogDetails />);

    wrapper.invoke("onScold")();
    expect(DogListEvent).toHaveBeenCalled();
  });

  it("should handle the onBark function is called", () => {
    useStoreMap
      .mockReturnValueOnce(stateBreeds())
      .mockReturnValueOnce(stateBreedSelected());

    const wrapper = shallow(<DogDetails />);

    wrapper.invoke("onBark")();
    expect(mockEnqueue).toHaveBeenCalled();
  });

  it("should call storeMap and return the right props from store", () => {
    useStoreMap
      .mockReturnValueOnce(stateBreeds())
      .mockReturnValueOnce(stateBreedSelected());

    shallow(<DogDetails />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(DogListStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(stateBreeds())).toMatchObject(
      stateBreeds()
    );

    expect(useStoreMap.mock.calls[1][0].store).toBe(DogItemStore);
    expect(useStoreMap.mock.calls[1][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[1][0].fn(stateBreedSelected())).toMatchObject(
      stateBreedSelected()
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

function stateBreedSelected() {
  return {
    name: "affenpinscher",
    image: "image url",
    scolded: 0,
  };
}
