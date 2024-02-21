import React, { useState, useEffect } from 'react';

function JobsComponent() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchJobs() {
      const url = 'https://jobs-api14.p.rapidapi.com/list?query=Web%20Developer&location=United%20States&distance=1.0&language=en_GB&remoteOnly=false&datePosted=month&employmentTypes=fulltime%3Bparttime%3Bintern%3Bcontractor&index=0';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'cd6be0b38bmsh208d3ec9f1436b0p11b777jsnc02456292eb7',
          'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    }

    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Available Jobs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="job-cards">
          {Array.isArray(jobs) && jobs.length > 0 ? (
            jobs.map(job => (
              <div key={job.id} className="job-card">
                <h2>{job.title}</h2>
                <p>{job.description}</p>
                <p>Location: {job.location}</p>
                <p>Company: {job.company}</p>
                <p>Posted on: {new Date(job.postedDate).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <h2>Work in Progress..............................................................................................................</h2>
          )}
        </div>
      )}
    </div>
  );
}

export default JobsComponent;
