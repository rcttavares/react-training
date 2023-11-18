import CreateBeerFormikFormView from './CreateBeerFormikFormView';
import { IBeerFormik } from '../../types/Types';
import { useCallback } from 'react';

const initialValues = {
  beerName: '',
  beerType: '',
  hasCorn: false,
  ingredients: '',
};

function CreateBeerFormikForm() {
  const onSubmit = useCallback((values: IBeerFormik, { resetForm }: any) => {
    console.log(values);
    resetForm();
  }, []);

  return (
    <CreateBeerFormikFormView
      initialValues={initialValues}
      onSubmit={onSubmit}
    />
  );
}

export default CreateBeerFormikForm;
