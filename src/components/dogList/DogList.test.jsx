import { shallow } from "enzyme";
import DogList from "./DogList";
import DogListView from "./DogListView";
import { useStoreMap } from "effector-react";
import { DogListStore } from "../../stores/dogList/DogListStore";
import { DogItemEvent } from "../../stores/dogItem/DogItemEvent";
import { DogItemStore } from "../../stores/dogItem/DogItemStore";
import { DogFilterStore } from "../../stores/dogFilter/DogFilterStore";

jest.mock("effector-react");
jest.mock("../../stores/dogItem/DogItemEvent.ts");

describe("DogList", () => {
  it("should render the view with the right props", () => {
    useStoreMap
      .mockReturnValueOnce(stateDogList())
      .mockReturnValueOnce(stateDogItem())
      .mockReturnValueOnce(stateDogFilter());

    const wrapper = shallow(<DogList />);

    expect(wrapper.type()).toBe(DogListView);
  });

  it("should return all breeds when dogFilter is empty", () => {
    function stateDogFilterEmpty() {
      return {
        dogFilter: "",
      };
    }

    useStoreMap
      .mockReturnValueOnce(stateDogList())
      .mockReturnValueOnce(stateDogItem())
      .mockReturnValueOnce(stateDogFilterEmpty());

    const wrapper = shallow(<DogList />);

    expect(wrapper.prop("dogList")).toEqual(stateDogList().dogList);
  });

  it("should return list filtered when user select one letter", () => {
    useStoreMap
      .mockReturnValueOnce(stateDogList())
      .mockReturnValueOnce(stateDogItem())
      .mockReturnValueOnce(stateDogFilter());

    const wrapper = shallow(<DogList />);

    wrapper.invoke("onSelect")(stateDogList().dogList);
    expect(DogItemEvent).toHaveBeenCalledTimes(1);
  });

  it("should call storeMap and return the right props from store", () => {
    useStoreMap
      .mockReturnValueOnce(stateDogList())
      .mockReturnValueOnce(stateDogItem())
      .mockReturnValueOnce(stateDogFilter());

    shallow(<DogList />);

    expect(useStoreMap.mock.calls[0][0].store).toBe(DogListStore);
    expect(useStoreMap.mock.calls[0][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[0][0].fn(stateDogList())).toMatchObject(
      stateDogList()
    );

    expect(useStoreMap.mock.calls[1][0].store).toBe(DogItemStore);
    expect(useStoreMap.mock.calls[1][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[1][0].fn(stateDogItem())).toMatchObject(
      stateDogItem()
    );

    expect(useStoreMap.mock.calls[2][0].store).toBe(DogFilterStore);
    expect(useStoreMap.mock.calls[2][0].keys).toEqual([]);
    expect(useStoreMap.mock.calls[2][0].fn(stateDogFilter())).toMatchObject(
      stateDogFilter()
    );
  });
});

function stateDogList() {
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

function stateDogItem() {
  return {
    dogItem: {
      name: "affenpinscher",
      image: "image url",
      scolded: 0,
    },
  };
}

function stateDogFilter() {
  return {
    dogFilter: "a",
  };
}
