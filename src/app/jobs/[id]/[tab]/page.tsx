import Image from 'next/image';
import {
  JOB_TAB_PARAMS_SET,
  JOB_TAB_PARAMS_VALUES,
  JobTabParamsText,
} from '~/core/constants';
import { Redirector } from './redirector';

interface Props {
  params: {
    id: string;
    tab: JobTabParamsText;
  };
}

const getSanitizedTab = (tab: JobTabParamsText) => {
  return JOB_TAB_PARAMS_SET.has(tab) ? tab : JOB_TAB_PARAMS_VALUES[0];
};

const FRAME_SERVER_URL = process.env.FRAME_SERVER_URL;

const title = 'JobStash';
const description = 'The Ultimate Crypto Native Job Aggregator';

export const generateMetadata = async ({ params: { id, tab } }: Props) => {
  const sanitizedTab = getSanitizedTab(tab);

  const imageURL = new URL(`${FRAME_SERVER_URL}/api/jobs`);
  imageURL.searchParams.append('id', id);
  imageURL.searchParams.append('tab', sanitizedTab);

  const imageLink = imageURL.toString();
  const postURL = `${FRAME_SERVER_URL}/api/frame/jobs/${id}/${sanitizedTab}`;

  return {
    metadataBase: new URL(`${FRAME_SERVER_URL}/${id}/${sanitizedTab}`),
    title,
    description,
    openGraph: {
      title,
      description,
      images: [imageLink],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@jobstash_xyz',
      images: [imageLink],
    },
    other: {
      'fc:frame': 'vNext',
      'fc:frame:button:1': 'Prev',
      'fc:frame:button:2': 'Next',
      'fc:frame:image': imageLink,
      'fc:frame:post_url': postURL,
    },
  };
};

const JobMetadataPage = async ({ params: { id } }: Props) => {
  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center">
        <div className="relative h-16 w-16">
          <div className="absolute left-0 top-0 animate-spin">
            <div className="h-16 w-16">
              <Image src="/Logo-01.svg" height={300} width={300} alt="" />
            </div>
          </div>

          <div className="absolute left-0 top-0 animate-reverse-spin">
            <div className="h-16 w-16">
              <Image src="/Logo-02.svg" height={300} width={300} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <Redirector id={id} /> */}
    </>
  );
};

export default JobMetadataPage;
