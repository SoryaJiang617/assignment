import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobItem from './JobItem';
import { Container, Typography } from '@mui/material';

const JobList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('/api/jobs')
            .then(response => {
                setJobs(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the jobs!', error);
            });
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Job List</Typography>
            {jobs.map(job => (
                <JobItem key={job.id} job={job} />
            ))}
        </Container>
    );
};

export default JobList;