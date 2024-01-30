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

const getSanitizedTab = (tab: JobTabParamsText) => {
  return JOB_TAB_PARAMS_SET.has(tab) ? tab : JOB_TAB_PARAMS_VALUES[0];
};

const FE_URL = process.env.FE_URL;

export const generateMetadata = async ({ params: { id, tab } }: Props) => {
  const sanitizedTab = getSanitizedTab(tab);

  const imageURL = new URL(`${FE_URL}/api/jobs`);
  imageURL.searchParams.append('id', id);
  imageURL.searchParams.append('tab', sanitizedTab);

  const frameMetadata = getFrameMetadata({
    buttons: ['Prev', 'Next'],
    image: imageURL.toString(),
    post_url: `${FE_URL}/api/frame/jobs/${id}/${sanitizedTab}`,
  });

  return {
    metadataBase: new URL(`${FE_URL}/${id}/${sanitizedTab}`),
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
