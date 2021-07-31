import React from "react";
import { useStoreMap } from "effector-react";
import { LoaderStore } from "../../stores/loader/LoaderStore";
import { DogListEffect } from "../../stores/dogList/DogListEffect";
import DogWrapperView from "./DogWrapperView";

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
