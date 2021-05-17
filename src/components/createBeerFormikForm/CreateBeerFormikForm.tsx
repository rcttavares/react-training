import { useCallback } from 'react';
import { IBeerFormik } from '../../types/Types';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

const emptyValues = {
  beerName: '',
  beerType: '',
  hasCorn: false,
  ingredients: ''
}

function CreateBeerFormikForm() {
  const handleSubmit = useCallback((values: IBeerFormik, { resetForm }) => {
    console.log(values);
    resetForm();
  },[])

  return (
    <CreateBeerFormikFormView
      initialValues={emptyValues}
      onSubmit={handleSubmit}
    />
  )
}

export default CreateBeerFormikForm;
