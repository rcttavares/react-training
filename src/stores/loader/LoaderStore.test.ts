import { setLoading } from "./LoaderEvent";
import LoaderStore from "./LoaderStore";

describe("LoaderStore", () => {
  it("should change value of loading", () => {
    setLoading({ loading: true });

    expect(LoaderStore.getState().loading).toEqual(true);
  });
});
