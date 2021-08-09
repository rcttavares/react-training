import React from "react";
import DogWrapperView from "./DogWrapperView";
import { useStoreMap } from "effector-react";
import { DogListEffect } from "../../stores/dogList/DogListEffect";
import { LoaderStore } from "../../stores/loader/LoaderStore";

function DogWrapper() {
  const { isLoading } = useStoreMap({
    store: LoaderStore,
    keys: [],
    fn: (state) => state,
  });

  React.useEffect(() => {
    DogListEffect();
  }, []);

  return <DogWrapperView isLoading={isLoading} />;
}

export default DogWrapper;
