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
    const handleSubmit = useCallback((values: BeerFormik, { resetForm }: any) => {
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
