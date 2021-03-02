import React, { useCallback, useState } from 'react';
import { BeerForm } from './CreateBeerForm.types';
import CreateBeerFormView from './CreateBeerFormView';

const emptyValues = {
    beerName: '',
    beerType: '',
    hasCorn: false,
    ingredients: ''
}

function CreateBeerForm() {
    const [values, setValues] = useState<BeerForm>(emptyValues);

    const handleInput = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    },[values])

    const handleSelect = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        setValues({ ...values, beerType: event.target.value as string });
    },[values])

    const handleCheckBox = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: !values.hasCorn });
    },[values])

    const handleSubmit = useCallback((event: React.FormEvent) => {
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
            onChangeSelect={handleSelect}
            onChangeCheckbox={handleCheckBox}
            onSubmit={handleSubmit}
        />
    )
}

export default CreateBeerForm;
