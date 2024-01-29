import { JOB_TABS, JobTabText } from '~/core/constants';
import { JobDetails } from '~/core/types';

export const createJobTabs = (activeTab: JobTabText, job: JobDetails) => {
  const { requirements, responsibilities, benefits, tags } = job;

  const tabs: { text: string }[] = [
    { text: JOB_TABS.JOB_DETAILS },
    { text: JOB_TABS.ORGANIZATION },
  ];

  if (requirements.length) {
    tabs.push({ text: JOB_TABS.REQUIREMENTS });
  }

  if (responsibilities.length) {
    tabs.push({ text: JOB_TABS.RESPONSIBILITIES });
  }

  if (benefits.length) {
    tabs.push({ text: JOB_TABS.BENEFITS });
  }

  if (tags.length) {
    tabs.push({ text: JOB_TABS.SKILLS });
  }

  return tabs.map(({ text }) => ({ text, isActive: activeTab === text }));
};
