import { ImageResponse } from 'next/og';

import { JobDetails as TJobDetails } from '~/core/types';
import { JOB_TAB_PARAMS, JobTabParamsText } from '~/core/constants';

import { JobBenefits } from '~/components/job-benefits';
import { JobDetails } from '~/components/job-details';
import { JobOrganization } from '~/components/job-organization';
import { JobRequirements } from '~/components/job-requirements';
import { JobResponsibilities } from '~/components/job-responsibilities';
import { JobSkills } from '~/components/job-skills';

export const runtime = 'edge';

const tabSet = new Set(Object.values(JOB_TAB_PARAMS));

const OG_IMAGE_WIDTH = 850;
const OG_IMAGE_HEIGHT = 420;

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const tab = searchParams.get('tab') as JobTabParamsText | null;
    if (!tab) throw new Error('"tab" param is required');

    const isInTabSet = tabSet.has(tab);
    if (!isInTabSet) throw new Error(`Invalid tab "${tab}"`);

    const id = searchParams.get('id');
    if (!id) throw new Error('"id" param is required');

    const jobDetailsUrl = `${process.env.MW_URL}/jobs/details/${id}`;

    const res = await fetch(jobDetailsUrl);
    if (!res.ok) {
      throw new Error(`MW fetch job-details "${id}" !res.ok`);
    }

    const job = await res.json();
    const el = getOGElement(tab, job);

    return new ImageResponse(el, {
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
    });
  } catch (error: any) {
    return new Response(
      error.message ? error.message : `Failed to generate the image`,
      {
        status: 500,
      },
    );
  }
};

const getOGElement = (tab: JobTabParamsText, job: TJobDetails) => {
  switch (tab) {
    case JOB_TAB_PARAMS.DETAILS:
      return <JobDetails job={job} />;

    case JOB_TAB_PARAMS.ORG:
      return <JobOrganization job={job} />;

    case JOB_TAB_PARAMS.REQUIREMENTS:
      return <JobRequirements job={job} />;

    case JOB_TAB_PARAMS.RESPONSIBILITIES:
      return <JobResponsibilities job={job} />;

    case JOB_TAB_PARAMS.BENEFITS:
      return <JobBenefits job={job} />;

    case JOB_TAB_PARAMS.SKILLS:
      return <JobSkills job={job} />;

    default:
      throw new Error(`Invalid tab "${tab}"`);
  }
};
