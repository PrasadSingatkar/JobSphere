import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import jobSeekerService from '../../services/jobSeeker.service';

const JobDetails = () => {
    const { id } = useParams();
    const jobId = parseInt(id, 10);
    const [job, setJob] = useState({});

    useEffect(() => {
        jobSeekerService.getJobDetails(jobId)
            .then(response => {
                console.log('Job details', response.data);
                setJob(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            });
    }, [jobId]);

    const handleApplyClick = () => {
        if (job.applyLink) {
            window.open(job.applyLink, '_blank'); // Open the applyLink URL in a new tab
        } else {
            console.log('Apply link not available');
        }
    };
    

    return (
        <div className="card text-center">
            <div className="card-header">
                Company Name: {job.companyName}
            </div>
            <div className="card-body">
                <h5 className="card-title">Position: {job.position}</h5>
                <p className="card-text">Job Description: {job.description}</p>
                <p className="card-text">Openings: {job.openings}</p>
                <p className="card-text">Remuneration: {job.renumeration} LPA</p>
                {job.applyLink && (
                    <button className="btn btn-primary" onClick={handleApplyClick}>Apply</button>
                )}
            </div>
        </div>
    );
};

export default JobDetails;
