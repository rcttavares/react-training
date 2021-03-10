import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BeerFormik } from './CreateBeerFormikForm.types';
import { useStyles } from './CreateBeerFormikFormView.styles';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core';
import ButtonView from '../button/ButtonView';

const validationSchema = yup.object().shape({
    beerName: yup.string().required(),
    beerType: yup.string().required(),
    ingredients: yup.string().required()
})

interface Props {
    initialValues: BeerFormik;
    onSubmit: (values: BeerFormik, { resetForm }: any) => void;
}

function CreateBeerFormikFormView(props: Props) {
    const classes = useStyles();
    const { initialValues, onSubmit } = props;

    return (
        <Paper className={classes.paper}>
            <h1 className={classes.title}>Beer Formik</h1>

            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ values, isValid, dirty, handleSubmit, handleChange, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={classes.container}>
                            <TextField
                                label="Beer name"
                                name="beerName"
                                variant="outlined"
                                fullWidth
                                value={values.beerName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.container}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel>Beer type</InputLabel>
                                <Select
                                    label="Beer type"
                                    name="beerType"
                                    value={values.beerType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={1}>Ale</MenuItem>
                                    <MenuItem value={2}>Lager</MenuItem>
                                    <MenuItem value={3}>Stout</MenuItem>
                                    <MenuItem value={4}>Malt</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className={classes.container}>
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Has corn"
                                name="hasCorn"
                                checked={values.hasCorn}
                                onChange={() => setFieldValue('hasCorn', !values.hasCorn)}
                            />
                        </div>

                        <div className={classes.container}>
                            <TextField
                                label="Ingredients"
                                name="ingredients"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={3}
                                value={values.ingredients}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.button}>
                            <ButtonView 
                                label="Submit"
                                disabled={!(isValid && dirty)}
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </Paper>
    )
}

export default CreateBeerFormikFormView;
