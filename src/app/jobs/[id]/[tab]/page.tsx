import { getFrameMetadata } from '@coinbase/onchainkit';
import {
  JOB_TAB_PARAMS_SET,
  JOB_TAB_PARAMS_VALUES,
  JobTabParamsText,
} from '~/core/constants';

interface Props {
  params: {
    id: string;
    tab: JobTabParamsText;
  };
}

const defaultTab = JOB_TAB_PARAMS_VALUES[0];
const tabValuesLength = JOB_TAB_PARAMS_VALUES.length;

const getSafeTab = (tab: JobTabParamsText) => {
  return JOB_TAB_PARAMS_SET.has(tab) ? tab : defaultTab;
};

const getNextTab = (tab: JobTabParamsText) => {
  if (!JOB_TAB_PARAMS_SET.has(tab)) return defaultTab;

  const tabIndex = JOB_TAB_PARAMS_VALUES.indexOf(tab);

  const isNotFound = tabIndex < 0;
  const isLastIndex = tabIndex === tabValuesLength;

  const index = isNotFound || isLastIndex ? 0 : tabIndex + 1;

  return JOB_TAB_PARAMS_VALUES[index];
};

export const generateMetadata = async ({ params: { id, tab } }: Props) => {
  const imageURL = new URL(`${process.env.FE_URL}/api/jobs`);
  imageURL.searchParams.append('id', id);
  imageURL.searchParams.append('tab', getSafeTab(tab));

  const postURL = new URL(`${process.env.FE_URL}/api/frame`);
  postURL.searchParams.append('id', id);
  postURL.searchParams.append('tab', getNextTab(tab));

  const frameMetadata = getFrameMetadata({
    buttons: ['Prev', 'Next'],
    image: imageURL.toString(),
    post_url: postURL.toString(),
  });

  return {
    title: 'Test Titlle',
    description: 'Test Description',
    openGraph: {
      title: 'Test Title',
      description: 'Test Description',
      images: [imageURL],
    },
    other: {
      ...frameMetadata,
    },
  };
};

const JobMetadataPage = async () => null;
export default JobMetadataPage;
