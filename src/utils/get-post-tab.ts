import { JOB_TAB_PARAMS_VALUES, JobTabParamsText } from '~/core/constants';

const PREV_INDEX = 1;
const NEXT_INDEX = 2;

export const getPostTab = (tab: JobTabParamsText, buttonIndex: number) => {
  const tabIndex = JOB_TAB_PARAMS_VALUES.indexOf(tab);

  let index = 0;

  if (buttonIndex === NEXT_INDEX) {
    const isLastIndex = tabIndex === JOB_TAB_PARAMS_VALUES.length;
    index = isLastIndex ? 0 : tabIndex + 1;
  }

  if (buttonIndex === PREV_INDEX) {
    const isFirstIndex = tabIndex === 0;
    index = isFirstIndex ? -1 : tabIndex - 1;
  }

  return JOB_TAB_PARAMS_VALUES.at(index);
};
