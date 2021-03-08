import React, { useCallback } from 'react';
import { BeerFormik } from './CreateBeerFormikForm.types';
import CreateBeerFormikFormView from './CreateBeerFormikFormView';

const emptyValues = {
    beerName: '',
    beerType: '',
    hasCorn: false,
    ingredients: ''
}

function CreateBeerFormikForm() {
    const handleSubmit = useCallback((values: BeerFormik) => {
        console.log(values);
    },[])

    return (
        <CreateBeerFormikFormView
            initialValues={emptyValues}
            onSubmit={handleSubmit}
        />
    )
}

export default CreateBeerFormikForm;
