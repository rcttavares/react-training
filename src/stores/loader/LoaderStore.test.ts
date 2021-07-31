import { LoaderEvent } from "./LoaderEvent";
import { LoaderStore } from "./LoaderStore";

describe("LoaderStore", () => {
  it("should change value of isLoading", () => {
    LoaderEvent({ isLoading: true });

    expect(LoaderStore.getState().isLoading).toEqual(true);
  });
});
