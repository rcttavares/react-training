import { shallow } from "enzyme";
import DogDetails from "./DogDetails";
import DogDetailsView from "./DogDetailsView";
import { useStoreMap } from "effector-react";
import DogListStore from "../../stores/dogList/DogListStore";
import DogItemStore from "../../stores/dogItem/DogItemStore";
import * as DogListEvent from "../../stores/dogList/DogListEvent";

jest.mock("effector-react");
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

    expect(wrapper.matchesElement(<DogDetailsView />)).toBe(true);
  });

  it("should add + 1 to selectedDog scoldCount when onScold function is called", () => {
    useStoreMap
      .mockReturnValueOnce(stateBreeds())
      .mockReturnValueOnce(stateBreedSelected());

    jest
      .spyOn(DogListEvent, "setDogList")
      .mockImplementation(() => "some value");

    const wrapper = shallow(<DogDetails />);

    wrapper.invoke("onScold")();
    expect(DogListEvent.setDogList).toBeCalledWith([
      {
        name: "affenpinscher",
        image: "test",
        scolded: 0,
      },
      {
        name: "beagle",
        image: "test",
        scolded: 0,
      },
    ]);
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
    useStoreMap.mockReturnValueOnce(stateBreeds()).mockReturnValueOnce(stateBreedSelected());

    shallow(<DogDetails />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(DogListStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(stateBreeds())).toMatchObject({
      dogList: [
        {
          name: "affenpinscher",
          image: "test",
          scolded: 0,
        },
        {
          name: "beagle",
          image: "test",
          scolded: 0,
        },
      ],
    });

    expect(useStoreMap.mock.calls[1][0].store).toBe(DogItemStore);
    expect(useStoreMap.mock.calls[1][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[1][0].fn(stateBreedSelected())).toMatchObject({
      name: "affenpinscher",
      image: "test",
      scolded: 0,
    });
  });
});

function stateBreeds() {
  return {
    dogList: [
      {
        name: "affenpinscher",
        image: "test",
        scolded: 0,
      },
      {
        name: "beagle",
        image: "test",
        scolded: 0,
      },
    ],
  };
}

function stateBreedSelected() {
  return {
    name: "affenpinscher",
    image: "test",
    scolded: 0,
  };
}
