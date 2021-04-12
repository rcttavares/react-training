import React from 'react';
import { useStyles } from './DogFilterView.styles';
import { FormControlLabel, Paper, Radio, RadioGroup, Typography } from '@material-ui/core';

interface Props {
    filterOptions: string[];
    getDogBreedsLength: (breedLetter: string) => number;
    onChangeOption: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function DogFilterView(props: Props) {
    const classes = useStyles();
    const { filterOptions, getDogBreedsLength, onChangeOption } = props;

    return (
        <Paper className={classes.paper}>
            <RadioGroup row aria-label="dogLetter" name="dogLetter" onChange={onChangeOption}>
                {filterOptions.map((filter) => (
                    <FormControlLabel
                        key={filter}
                        value={filter}
                        control={<Radio color="primary" />}
                        labelPlacement="bottom"
                        label={
                            <div className={classes.flex}>
                                <Typography className={classes.letter}>{filter.toUpperCase()}</Typography>
                                <Typography className={classes.number}>({getDogBreedsLength(filter)})</Typography>
                            </div>
                        }
                    />
                ))}
            </RadioGroup>
        </Paper>
    );
}

export default DogFilterView;
