import React from 'react';
import { useStyles } from './CreateBeerFormView.styles';
import { Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';
import ButtonView from '../button/ButtonView';

interface Props {
    beerName: string;
    beerType: string;
    hasCorn: boolean;
    ingredients: string;
    onChangeInput: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChangeSelect: (event: React.ChangeEvent<{ value: unknown }>) => void;
    onChangeCheckbox: (event: React.ChangeEvent<any>) => void;
    onSubmit: (event: React.FormEvent) => void;
}

function CreateBeerFormView(props: Props) {
    const classes = useStyles();
    const { beerName, beerType, hasCorn, ingredients, onChangeInput, onChangeSelect, onChangeCheckbox, onSubmit } = props;

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h1" className={classes.title}>
                Beer Form
            </Typography>

            <form onSubmit={onSubmit}>
                <div className={classes.container}>
                    <TextField
                        label="Beer name"
                        name="beerName"
                        variant="outlined"
                        fullWidth
                        value={beerName}
                        onChange={onChangeInput}
                    />
                </div>

                <div className={classes.container}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel>Beer type</InputLabel>
                        <Select
                            label="Beer type"
                            name="beerType"
                            value={beerType}
                            onChange={onChangeSelect}
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
                        checked={hasCorn}
                        onChange={onChangeCheckbox}
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
                        value={ingredients}
                        onChange={onChangeInput}
                    />
                </div>

                <div className={classes.button}>
                    <ButtonView 
                        label="Submit"
                        disabled={!beerName || !beerType || !ingredients}
                    />
                </div>
            </form>
        </Paper>
    )
}

export default CreateBeerFormView;
