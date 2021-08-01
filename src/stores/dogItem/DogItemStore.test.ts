import { DogItemEvent } from "./DogItemEvent";
import { DogItemStore } from "./DogItemStore";

describe("DogItemStore", () => {
  const dogItemMock = { name: "affenpinscher", image: "image url", scolded: 0 };

  it("should change value of dogItem", () => {
    DogItemEvent({ dogItem: dogItemMock });

    expect(DogItemStore.getState().dogItem).toEqual(dogItemMock);
  });
});
