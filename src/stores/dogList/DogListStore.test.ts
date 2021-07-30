import { setDogList } from "./DogListEvent";
import DogListStore from "./DogListStore";

describe("DogListStore", () => {
  const dogListMock = [
    {
      name: "affenpinscher",
      image: "image url",
      scolded: 0,
    },
    {
      name: "basenji",
      image: "image url",
      scolded: 1,
    },
  ];

  it("should change value of dogList", () => {
    setDogList(dogListMock);

    expect(DogListStore.getState().dogList).toEqual(dogListMock);
  });
});
