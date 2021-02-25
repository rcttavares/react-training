import React, { useState, useCallback } from 'react';
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

function CreateBeerFormView() {
    const classes = useStyles();

    const [values, setValues] = useState({});
    const [type, setType] = useState('');

    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    },[values])

    const handleType = (event: React.ChangeEvent<{ value: unknown }>) => {
        setType(event.target.value as string);
    }

    const handleSubmit = (event: React.ChangeEvent<any>) => {
        event.preventDefault();
        console.log(values);
        event.target.reset();
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
                            value={type}
                            onChange={handleType}
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
                        //onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                <div className={classes.button}>
                    <ButtonView label="Submit" />
                </div>
            </form>
        </Paper>
    )
}

export default CreateBeerFormView;
