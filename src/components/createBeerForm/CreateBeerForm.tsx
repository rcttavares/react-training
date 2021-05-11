import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { IBeerForm } from '../../types/Types';
import CreateBeerFormView from './CreateBeerFormView';

const emptyValues = {
  beerName: '',
  beerType: '',
  hasCorn: false,
  ingredients: ''
}

function CreateBeerForm() {
  const [values, setValues] = useState<IBeerForm>(emptyValues);

  const handleInput = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  },[values])

  const handleCheckBox = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: !values.hasCorn });
  },[values])

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    console.log(values);
    setValues(emptyValues);
  },[values])

  return (
    <CreateBeerFormView
      beerName={values.beerName}
      beerType={values.beerType}
      hasCorn={values.hasCorn}
      ingredients={values.ingredients}
      onChangeInput={handleInput}
      onChangeCheckbox={handleCheckBox}
      onSubmit={handleSubmit}
    />
  )
}

export default CreateBeerForm;
