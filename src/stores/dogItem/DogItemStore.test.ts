import { setDogItem } from "./DogItemEvent";
import DogItemStore from "./DogItemStore";

describe("DogItemStore", () => {
  const dogItemMock = { name: "affenpinscher", image: "image url", scolded: 0 };

  it("should change value of dogItem", () => {
    setDogItem({ dogItem: dogItemMock });

    expect(DogItemStore.getState().dogItem).toEqual(dogItemMock);
  });
});
