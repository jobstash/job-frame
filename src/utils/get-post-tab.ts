import { JOB_TAB_PARAMS, JobTabParamsText } from '~/core/constants';
import { JobDetails } from '~/core/types';

const PREV_INDEX = 1;
const NEXT_INDEX = 3;

export const getPostTab = (
  job: JobDetails,
  tab: JobTabParamsText,
  buttonIndex: number,
) => {
  const tabs = getPostTabs(job);

  const tabIndex = tabs.indexOf(tab);

  let index = 0;

  if (buttonIndex === NEXT_INDEX) {
    const isLastIndex = tabIndex === tabs.length;
    index = isLastIndex ? 0 : tabIndex + 1;
  }

  if (buttonIndex === PREV_INDEX) {
    const isFirstIndex = tabIndex === 0;
    index = isFirstIndex ? -1 : tabIndex - 1;
  }

  return tabs.at(index);
};

const getPostTabs = (job: JobDetails) => {
  const tabs: JobTabParamsText[] = [JOB_TAB_PARAMS.DETAILS, JOB_TAB_PARAMS.ORG];

  const { requirements, responsibilities, benefits, tags } = job;

  if (requirements.length) tabs.push(JOB_TAB_PARAMS.REQUIREMENTS);
  if (responsibilities.length) tabs.push(JOB_TAB_PARAMS.RESPONSIBILITIES);
  if (benefits.length) tabs.push(JOB_TAB_PARAMS.BENEFITS);
  if (tags.length) tabs.push(JOB_TAB_PARAMS.SKILLS);

  return tabs;
};
