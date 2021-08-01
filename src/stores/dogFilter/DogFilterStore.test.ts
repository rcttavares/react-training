import { DogFilterEvent } from "./DogFilterEvent";
import { DogFilterStore } from "./DogFilterStore";

describe("DogFilterStore", () => {
  it("should change value of dogFilter", () => {
    DogFilterEvent({ dogFilter: "a" });

    expect(DogFilterStore.getState().dogFilter).toEqual("a");
  });
});
