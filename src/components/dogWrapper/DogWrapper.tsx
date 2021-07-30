import { useStoreMap } from 'effector-react';
import React from 'react';
import { fetchBreeds } from '../../stores/dogList/DogListEffect';
import LoaderStore from '../../stores/loader/LoaderStore';
import DogWrapperView from './DogWrapperView';

function DogWrapper() {
  const { loading } = useStoreMap({
    store: LoaderStore,
    keys: [],
    fn: (state) => state,
  });

  React.useEffect(() => {
    fetchBreeds();
  }, []);

  return (
    <DogWrapperView
      loading={loading}
    />
  );
}

export default DogWrapper;
