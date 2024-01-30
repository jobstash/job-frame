import { JobDetails } from '~/core/types';

export const getJobDetails = async (id: string) => {
  const url = `${process.env.MW_URL}/jobs/details/${id}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`MW fetch job-details "${id}" !res.ok`);
  }

  const jobDetails = await res.json();

  return jobDetails as JobDetails;
};
