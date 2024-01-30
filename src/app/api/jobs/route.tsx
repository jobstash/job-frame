import { ImageResponse } from 'next/og';

import { JobDetails as TJobDetails } from '~/core/types';
import {
  JOB_TAB_PARAMS,
  JOB_TAB_PARAMS_SET,
  JobTabParamsText,
} from '~/core/constants';

import { JobBenefits } from '~/components/job-benefits';
import { JobDetails } from '~/components/job-details';
import { JobOrganization } from '~/components/job-organization';
import { JobRequirements } from '~/components/job-requirements';
import { JobResponsibilities } from '~/components/job-responsibilities';
import { JobSkills } from '~/components/job-skills';
import { getJobDetails } from '~/data/get-job-details';

export const runtime = 'edge';

const OG_IMAGE_WIDTH = 850;
const OG_IMAGE_HEIGHT = 445;

export const GET = async (req: Request) => {
  try {
    const { searchParams } = new URL(req.url);

    const tab = searchParams.get('tab') as JobTabParamsText | null;
    if (!tab) throw new Error('"tab" param is required');

    const isInTabSet = JOB_TAB_PARAMS_SET.has(tab);
    if (!isInTabSet) throw new Error(`Invalid tab "${tab}"`);

    const id = searchParams.get('id');
    if (!id) throw new Error('"id" param is required');

    const job = await getJobDetails(id);
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
