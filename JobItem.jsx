import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

const getStatusColor = (status) => {
    switch (status) {
        case 'Pending':
            return 'orange';
        case 'In Progress':
            return 'blue';
        case 'Completed':
            return 'green';
        default:
            return 'gray';
    }
};

const JobItem = ({ job }) => {
    return (
        <Card variant="outlined" style={{ marginBottom: '16px' }}>
            <CardContent>
                <Typography variant="h5">{job.title}</Typography>
                <Typography variant="body2" color="textSecondary">{job.description}</Typography>
                <List>
                    {job.subItems.map(subItem => (
                        <ListItem key={subItem.itemId} style={{ backgroundColor: getStatusColor(subItem.status) }}>
                            <ListItemText
                                primary={subItem.title}
                                secondary={subItem.description}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default JobItem;