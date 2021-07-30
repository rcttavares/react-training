import { setDogFilter } from "./DogFilterEvent";
import DogFilterStore from "./DogFilterStore";

describe("DogFilterStore", () => {
  it("should change value of dogFilter", () => {
    setDogFilter({ dogFilter: "a" });

    expect(DogFilterStore.getState().dogFilter).toEqual("a");
  });
});
