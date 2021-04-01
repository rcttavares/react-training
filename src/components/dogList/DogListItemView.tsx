import React from 'react';
import { Avatar, Chip, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { capitalize } from 'lodash';

interface Props {
    name: string;
    image: string;
    scolded: number;
    selected: boolean;
    onSelectDog: (breed: string) => void;
}

function DogListItemView(props: Props) {
    const { name, image, scolded, selected, onSelectDog } = props;

    const onClick: React.MouseEventHandler<HTMLDivElement> = React.useCallback(() => {
        onSelectDog(name);
    }, [name, onSelectDog]);

    return (
        <ListItem 
            button
            selected={selected}
            onClick={onClick}
        >
            <ListItemAvatar>
                <Avatar alt={name} src={image} />
            </ListItemAvatar>
            <ListItemText primary={capitalize(name)} />
            <ListItemSecondaryAction>
                <Chip label={scolded} />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default DogListItemView;
