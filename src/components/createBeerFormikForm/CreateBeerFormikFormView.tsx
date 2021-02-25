import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { BeerForm } from './CreateBeerFormikForm.types';
import { useStyles } from './CreateBeerFormikFormView.styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import ButtonView from '../button/ButtonView';

const emptyValues = {
    beerName: '',
    beerType: '',
    hasCorn: false,
    ingredients: ''
}

const validationSchema = yup.object().shape({
    beerName: yup.string().required(),
    beerType: yup.string().required(),
    ingredients: yup.string().required()
})

function CreateBeerFormikFormView() {
    const classes = useStyles();

    const handleSubmit = (values: BeerForm, { resetForm }: any) => {
        console.log(values);
        resetForm();
    }

    return (
        <Paper className={classes.paper}>
            <h1 className={classes.title}>Beer Formik</h1>

            <Formik
                initialValues={emptyValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, isValid, dirty, handleSubmit, handleChange, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={classes.container}>
                            <TextField
                                label="Beer name"
                                id="beerName"
                                name="beerName"
                                variant="outlined"
                                fullWidth
                                value={values.beerName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className={classes.container}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel id="beerTypeLabel">Beer type</InputLabel>
                                <Select
                                    label="Beer type"
                                    labelId="beerTypeLabel"
                                    id="beerType"
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
                                id="hasCorn"
                                name="hasCorn"
                                labelPlacement="end"
                                checked={values.hasCorn}
                                onChange={() => setFieldValue('hasCorn', !values.hasCorn)}
                            />
                        </div>

                        <div className={classes.container}>
                            <TextField
                                label="Ingredients"
                                id="ingredients"
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
                            <ButtonView label="Submit" disabled={!(isValid && dirty)} />
                        </div>
                    </form>
                )}
            </Formik>
        </Paper>
    )
}

export default CreateBeerFormikFormView;
