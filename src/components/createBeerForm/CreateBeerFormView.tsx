import React from 'react';
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

    const [values, setValues] = React.useState({});
    const [beerType, setBeerType] = React.useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name] : event.target.value });
    }

    const handleType = (event: React.ChangeEvent<{ value: unknown }>) => {
        setBeerType(event.target.value as string);
    }

    // const handleCheckbox = (event: React.ChangeEvent<any>) => {
    //     setValues(event.target.checked);
    // }

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.target.reset();
        console.log(values);
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
                        onChange={handleInput}
                    />
                </div>
                <div className={classes.container}>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="beerTypeLabel">Beer type</InputLabel>
                        <Select
                            label="Beer type"
                            labelId="beerTypeLabel"
                            id="beerType"
                            value={beerType}
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
                        labelPlacement="end"
                        //onChange={handleCheckbox}
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
                        onChange={handleInput}
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
