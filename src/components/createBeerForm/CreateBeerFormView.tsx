import React, { useState, useCallback } from 'react';
import { BeerForm } from './CreateBeerForm.types';
import { useStyles } from './CreateBeerFormView.styles';
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

function CreateBeerFormView() {
    const classes = useStyles();

    const [values, setValues] = useState<BeerForm>(emptyValues);

    const handleChange = useCallback((event: React.ChangeEvent<any>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    },[values])

    const handleCheckBox = useCallback((event: React.ChangeEvent<any>) => {
        setValues({ ...values, [event.target.name]: !values.hasCorn });
    },[values])

    const handleSubmit = (event: React.ChangeEvent<any>) => {
        event.preventDefault();
        console.log(values);
        setValues(emptyValues);
    }

    return (
        <Paper className={classes.paper}>
            <h1 className={classes.title}>Beer Form</h1>

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
                        required
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
                            required
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
                        onChange={handleCheckBox}
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
                        required
                    />
                </div>

                <div className={classes.button}>
                    <ButtonView label="Submit" disabled={!values.beerName || !values.beerType || !values.ingredients} />
                </div>
            </form>
        </Paper>
    )
}

export default CreateBeerFormView;
